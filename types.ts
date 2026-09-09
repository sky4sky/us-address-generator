// ===================== 类型定义 =====================

export interface CityData {
  name: string
  zips: string[]
}

export interface StateData {
  code: string
  name: string
  nameZh: string
  cities: CityData[]
  areaCodes: string[]
}

export interface Address {
  fullName: string
  street: string
  city: string
  state: string
  zip: string
  phone: string
}

export interface VersionInfo {
  version: string
  note: string
}

export interface ChangelogEntry {
  version: string
  note: string
  timestamp: number
}
