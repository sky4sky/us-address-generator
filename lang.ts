// ===================== 国际化支持 =====================

type MessageKey =
  | "app_title"
  | "app_subtitle"
  | "state_label"
  | "select_state"
  | "generate_btn"
  | "copy"
  | "copied"
  | "disclaimer"
  | "checking_update"
  | "update_available"
  | "current_version"
  | "new_version"
  | "update_note"
  | "update_history"
  | "check_failed"
  | "no_internet"

const messages: Record<string, Record<MessageKey, string>> = {
  zh: {
    "app_title": "美国地址生成器",
    "app_subtitle": "小闻说 专属工具",
    "state_label": "美区免税州",
    "select_state": "选择州",
    "generate_btn": "一键生成新地址",
    "copy": "复制",
    "copied": "已复制到剪贴板",
    "disclaimer": "注：生成的地址仅用于参考，请勿用于非法用途。",
    "checking_update": "正在检查更新...",
    "update_available": "发现新版本",
    "current_version": "当前版本",
    "new_version": "新版本",
    "update_note": "更新说明",
    "update_history": "版本历史",
    "check_failed": "更新检查失败",
    "no_internet": "网络不可用",
  },
  en: {
    "app_title": "US Address Generator",
    "app_subtitle": "For Internal Reference Only",
    "state_label": "Tax-Free States",
    "select_state": "Select State",
    "generate_btn": "Generate New Address",
    "copy": "Copy",
    "copied": "Copied to clipboard",
    "disclaimer": "Note: Generated addresses are for reference only. Do not use for illegal purposes.",
    "checking_update": "Checking for updates...",
    "update_available": "Update Available",
    "current_version": "Current Version",
    "new_version": "New Version",
    "update_note": "What's New",
    "update_history": "Version History",
    "check_failed": "Update check failed",
    "no_internet": "No internet connection",
  },
}

let currentLang: "zh" | "en" = "zh"

export function t(key: MessageKey): string {
  return messages[currentLang]?.[key] || key
}

export function setLanguage(lang: "zh" | "en") {
  currentLang = lang
}

export function getCurrentLang(): "zh" | "en" {
  return currentLang
}
