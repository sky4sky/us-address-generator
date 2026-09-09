import {
  useState,
  VStack,
  HStack,
  Spacer,
  Text,
  Button,
  Navigation,
  NavigationStack,
  List,
  Image,
  Picker,
  Script,
} from "scripting"
import { TAX_FREE_STATES, generateAddress } from "./utils"
import { t, getCurrentLang } from "./lang"

// ===================== 更新检查 =====================

const SCRIPT_NAME = "美国地址生成器"
const SCRIPT_AUTHOR = "Ant"
const CURRENT_VERSION = "1.0.1"
const GITHUB_REPO = "ant/scripting-us-address-generator"
const CHECK_INTERVAL = 24 * 60 * 60 * 1000 // 24小时

;(async () => {
  try {
    const base = FileManager.appGroupDocumentsDirectory
    const histDir = base + "/changelog_history"
    const histPath = histDir + "/" + SCRIPT_NAME + ".json"
    let history = []
    try { history = JSON.parse(await FileManager.readAsString(histPath)) } catch {}

    // 过滤已有记录，避免重复
    history = history.filter(h => h.version !== CURRENT_VERSION)
    history.push({ version: CURRENT_VERSION, note: "初始正式版发布", timestamp: Date.now() })
    // 按版本降序排列
    history.sort((a, b) => compareVersionsDesc(b.version, a.version))
    history = history.slice(0, 20)
    await FileManager.writeAsString(histPath, JSON.stringify(history))

    // 已读状态检查
    const seenDir = base + "/changelog_seen"
    const statePath = seenDir + "/" + SCRIPT_NAME + ".json"
    let seen = {}
    try { seen = JSON.parse(await FileManager.readAsString(statePath)) } catch {}
    if (seen[CURRENT_VERSION]) return

    // 作者设备不提示更新
    try {
      const mgrCfg = JSON.parse(await FileManager.readAsString(base + "/script-manager-config.json"))
      if (mgrCfg.authorName === SCRIPT_AUTHOR) return
    } catch {}

    // GitHub 更新检查（简化版：直接提示版本号变化）
    // 实际项目中可添加远程版本 API
    // 此处仅记录历史，不强制网络请求

  } catch (e) {
    console.error("更新检查失败:", e)
  }
})()

function compareVersionsDesc(a: string, b: string): number {
  const parse = (v: string) => v.split(".").map((n) => parseInt(n, 10) || 0)
  const av = parse(a)
  const bv = parse(b)
  for (let i = 0; i < Math.max(av.length, bv.length); i++) {
    const diff = (av[i] || 0) - (bv[i] || 0)
    if (diff !== 0) return -diff // 降序
  }
  return 0
}

// ===================== UI 组件 =====================

function AddressField(props: {
  label: string
  value: string
  onCopy: (value: string) => void
}) {
  return (
    <VStack spacing={6} alignment="leading" padding={{ horizontal: 14, vertical: 10 }}>
      <Text font="caption" foregroundStyle="secondaryLabel">{props.label}</Text>
      <HStack alignment="center" spacing={8}>
        <Text font="body" foregroundStyle="label" lineLimit={1}>{props.value}</Text>
        <Spacer />
        <Button
          controlSize="small"
          buttonStyle="bordered"
          foregroundStyle="tintColor"
          action={() => props.onCopy(props.value)}
        >
          <Text font="caption" foregroundStyle="tintColor">{t("copy")}</Text>
        </Button>
      </HStack>
    </VStack>
  )
}

function Divider() {
  return (
    <HStack spacing={0} alignment="center" frame={{ height: 1 }}>
      <Text foregroundStyle="separator" font="caption">{""}</Text>
    </HStack>
  )
}

function AddressCard(props: { address: { fullName: string; street: string; city: string; state: string; zip: string; phone: string }; onCopy: (value: string) => void }) {
  return (
    <VStack
      spacing={0}
      alignment="leading"
      background="secondarySystemBackground"
      containerShape={{ type: "rect", cornerRadius: 14 }}
    >
      <AddressField label={t("全名")} value={props.address.fullName} onCopy={props.onCopy} />
      <Divider />
      <AddressField label={t("街道")} value={props.address.street} onCopy={props.onCopy} />
      <Divider />
      <AddressField label={t("城市")} value={props.address.city} onCopy={props.onCopy} />
      <Divider />
      <AddressField label={t("州全称")} value={props.address.state} onCopy={props.onCopy} />
      <Divider />
      <AddressField label={t("邮编")} value={props.address.zip} onCopy={props.onCopy} />
      <Divider />
      <AddressField label={t("电话")} value={props.address.phone} onCopy={props.onCopy} />
    </VStack>
  )
}

function HeaderView() {
  return (
    <VStack spacing={6} alignment="center" padding={{ top: 8, bottom: 12 }}>
      <HStack spacing={8} alignment="center">
        <Image systemName="mappin.circle.fill" foregroundStyle="tintColor" font={22} />
        <Text font="title3" foregroundStyle="label" bold>{t("app_title")}</Text>
      </HStack>
      <Text font="caption" foregroundStyle="secondaryLabel">{t("app_subtitle")}</Text>
    </VStack>
  )
}

function StatePicker(props: {
  selectedState: string
  onStateChange: (code: string) => void
}) {
  return (
    <VStack spacing={6} alignment="leading" padding={{ horizontal: 14, vertical: 10 }}>
      <HStack spacing={8} alignment="center">
        <Image systemName="flag.fill" foregroundStyle="tintColor" font={14} />
        <Text font="caption" foregroundStyle="secondaryLabel">{t("state_label")}</Text>
        <Spacer />
        <Image systemName="chevron.down" foregroundStyle="tertiaryLabel" font={12} />
      </HStack>
      <Picker
        pickerStyle="menu"
        label={<Text font="caption" foregroundStyle="secondaryLabel">{t("select_state")}</Text>}
        value={props.selectedState}
        onChanged={props.onStateChange}
      >
        {TAX_FREE_STATES.map((state) => (
          <Text key={state.code} tag={state.code}>
            {state.name}（{state.nameZh}）
          </Text>
        ))}
      </Picker>
    </VStack>
  )
}

function VersionHistoryView(props: { onClose: () => void }) {
  const base = FileManager.appGroupDocumentsDirectory
  const histPath = base + "/changelog_history/" + SCRIPT_NAME + ".json"
  const [history, setHistory] = useState([])

  useState(() => {
    (async () => {
      try {
        const raw = await FileManager.readAsString(histPath)
        setHistory(JSON.parse(raw))
      } catch {
        setHistory([])
      }
    })()
  })

  return (
    <NavigationStack navigationTitle={t("update_history")} onDismiss={props.onClose}>
      <List>
        {history.length === 0 ? (
          <VStack padding={20}>
            <Text font="body" foregroundStyle="secondaryLabel" alignment="center">暂无版本历史</Text>
          </VStack>
        ) : (
          history.map((entry, idx) => (
            <VStack key={idx} spacing={4} padding={{ horizontal: 16, vertical: 12 }}>
              <HStack spacing={8} alignment="center">
                <Image systemName="tag.fill" foregroundStyle="tintColor" font={12} />
                <Text font="body" bold>{entry.version}</Text>
                <Spacer />
                <Text font="caption" foregroundStyle="secondaryLabel">
                  {new Date(entry.timestamp).toLocaleDateString("zh-CN")}
                </Text>
              </HStack>
              <Text font="caption" foregroundStyle="label">{entry.note}</Text>
              {idx < history.length - 1 && <Divider />}
            </VStack>
          ))
        )}
      </List>
    </NavigationStack>
  )
}

// ===================== 主视图 =====================

function MainView() {
  const [selectedState, setSelectedState] = useState<string>(TAX_FREE_STATES[0].code)
  const [address, setAddress] = useState<{ fullName: string; street: string; city: string; state: string; zip: string; phone: string } | null>(() => generateAddress(TAX_FREE_STATES[0].code))
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState(t("copied"))
  const [showHistory, setShowHistory] = useState(false)

  function handleCopy(value: string) {
    Pasteboard.setString(value)
    setToastMessage(t("copied"))
    setShowToast(true)
  }

  function handleGenerate() {
    const newAddr = generateAddress(selectedState)
    if (newAddr) {
      setAddress(newAddr)
    }
  }

  return (
    <>
      <List
        navigationTitle={t("app_title")}
        navigationBarTitleDisplayMode="inline"
        toast={{
          isPresented: showToast,
          onChanged: setShowToast,
          message: toastMessage,
          duration: 2,
          position: "bottom",
          backgroundColor: "systemGreen",
          textColor: "white",
          cornerRadius: 8,
        }}
      >
        <HeaderView />

        <StatePicker
          selectedState={selectedState}
          onStateChange={setSelectedState}
        />

        <VStack padding={{ horizontal: 16, vertical: 12 }}>
          <Button
            action={handleGenerate}
            buttonStyle="borderedProminent"
            controlSize="large"
          >
            <Text font="body" foregroundStyle="white" bold>{t("generate_btn")}</Text>
          </Button>
        </VStack>

        {address ? (
          <VStack padding={{ horizontal: 16, vertical: 8 }}>
            <AddressCard address={address} onCopy={handleCopy} />
          </VStack>
        ) : null}

        <VStack padding={{ horizontal: 16, vertical: 8 }}>
          <Button
            action={() => setShowHistory(true)}
            buttonStyle="bordered"
            controlSize="small"
          >
            <Text font="caption" foregroundStyle="tintColor">📋 {t("update_history")}</Text>
          </Button>
        </VStack>

        <VStack padding={{ horizontal: 16, vertical: 16 }}>
          <Text font="caption" foregroundStyle="tertiaryLabel" multilineTextAlignment="center">
            {t("disclaimer")}
          </Text>
        </VStack>
      </List>

      {showHistory && (
        <VersionHistoryView onClose={() => setShowHistory(false)} />
      )}
    </>
  )
}

// ===================== 入口 =====================

async function run() {
  await Navigation.present(<MainView />)
  Script.exit()
}

run()
