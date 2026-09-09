import { StateData, Address } from "./types"

// 美国免税州（无州销售税）：OR, AK, DE, MT, NH
export const TAX_FREE_STATES: StateData[] = [
  {
    code: "OR",
    name: "Oregon",
    nameZh: "俄勒冈州",
    cities: [
      { name: "Portland", zips: ["97201", "97202", "97203", "97204", "97205", "97206", "97207", "97208", "97209", "97210", "97211", "97212", "97213", "97214", "97215", "97216", "97217", "97218", "97219", "97220"] },
      { name: "Salem", zips: ["97301", "97302", "97303", "97304", "97305", "97306", "97307", "97308", "97309", "97310", "97311", "97312", "97313", "97314", "97315", "97316", "97317"] },
      { name: "Eugene", zips: ["97401", "97402", "97403", "97404", "97405", "97406", "97407", "97408", "97409", "97410", "97411", "97412", "97413", "97414", "97415", "97416", "97417"] },
      { name: "Gresham", zips: ["97030", "97035", "97038", "97086", "97089"] },
      { name: "Hillsboro", zips: ["97123", "97124", "97127"] },
      { name: "Beaverton", zips: ["97005", "97006", "97007", "97008", "97076", "97078"] },
      { name: "Bend", zips: ["97701", "97702", "97703", "97704", "97705", "97706", "97707", "97708", "97709"] },
      { name: "Medford", zips: ["97501", "97502", "97503", "97504", "97505", "97506", "97507", "97508", "97509"] },
      { name: "Corvallis", zips: ["97330", "97331", "97332", "97333", "97334", "97335", "97336", "97337", "97339"] },
      { name: "Springfield", zips: ["97477", "97478"] },
    ],
    areaCodes: ["503", "971", "458", "541"],
  },
  {
    code: "AK",
    name: "Alaska",
    nameZh: "阿拉斯加州",
    cities: [
      { name: "Anchorage", zips: ["99501", "99502", "99503", "99504", "99505", "99506", "99507", "99508", "99509", "99510", "99511", "99512", "99513", "99514", "99515", "99516", "99517", "99518", "99519", "99520"] },
      { name: "Fairbanks", zips: ["99701", "99702", "99703", "99704", "99705", "99706", "99707", "99708", "99709", "99710", "99711", "99712"] },
      { name: "Juneau", zips: ["99801", "99802", "99803", "99804", "99805", "99806", "99807", "99808", "99809", "99810", "99811", "99812"] },
      { name: "Wasilla", zips: ["99654"] },
      { name: "Palmer", zips: ["99645"] },
      { name: "Knik-Fairview", zips: ["99690"] },
      { name: "Bethel", zips: ["99559"] },
      { name: "Ketchikan", zips: ["99901"] },
    ],
    areaCodes: ["907"],
  },
  {
    code: "DE",
    name: "Delaware",
    nameZh: "特拉华州",
    cities: [
      { name: "Wilmington", zips: ["19801", "19802", "19803", "19804", "19805", "19806", "19807", "19808", "19809", "19810"] },
      { name: "Dover", zips: ["19901", "19902", "19903", "19904", "19905", "19906", "19907", "19908", "19909", "19910"] },
      { name: "Newark", zips: ["19711", "19713"] },
      { name: "Middletown", zips: ["19709"] },
      { name: "Smyrna", zips: ["19976", "19977"] },
      { name: "Milford", zips: ["19963"] },
    ],
    areaCodes: ["302"],
  },
  {
    code: "MT",
    name: "Montana",
    nameZh: "蒙大拿州",
    cities: [
      { name: "Billings", zips: ["59101", "59102", "59103", "59104", "59105", "59106", "59107", "59108", "59109", "59110", "59111", "59112", "59113", "59114", "59115", "59116", "59117"] },
      { name: "Missoula", zips: ["59801", "59802", "59803", "59804", "59805", "59806", "59807", "59808"] },
      { name: "Great Falls", zips: ["59401", "59403", "59404", "59405", "59406", "59407", "59408", "59409", "59410"] },
      { name: "Bozeman", zips: ["59715", "59717", "59718", "59719"] },
      { name: "Helena", zips: ["59601", "59602", "59603", "59604", "59605", "59606"] },
      { name: "Butte", zips: ["59701"] },
    ],
    areaCodes: ["406"],
  },
  {
    code: "NH",
    name: "New Hampshire",
    nameZh: "新罕布什尔州",
    cities: [
      { name: "Manchester", zips: ["03101", "03102", "03103", "03104", "03105", "03106", "03107", "03108", "03109", "03110", "03111"] },
      { name: "Nashua", zips: ["03060", "03061", "03062", "03063", "03064"] },
      { name: "Concord", zips: ["03301", "03302", "03303", "03304", "03305"] },
      { name: "Derry", zips: ["03038"] },
      { name: "Dover", zips: ["03820", "03821", "03822"] },
      { name: "Rochester", zips: ["03867", "03868"] },
      { name: "Salem", zips: ["03079"] },
    ],
    areaCodes: ["603"],
  },
]

const FIRST_NAMES = [
  "James", "Mary", "Robert", "Patricia", "John", "Jennifer", "Michael", "Linda",
  "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica",
  "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Lisa", "Daniel", "Nancy",
  "Matthew", "Betty", "Anthony", "Margaret", "Mark", "Sandra", "Donald", "Ashley",
  "Steven", "Kimberly", "Paul", "Emily", "Andrew", "Donna", "Joshua", "Michelle",
  "Kenneth", "Dorothy", "Kevin", "Carol", "Brian", "Amanda", "George", "Melissa",
  "Timothy", "Deborah", "Ronald", "Stephanie", "Edward", "Rebecca", "Jason", "Sharon",
  "Jeffrey", "Laura", "Ryan", "Cynthia", "Jacob", "Kathleen", "Gary", "Amy",
  "Nicholas", "Angela", "Eric", "Shirley", "Jonathan", "Anna", "Stephen", "Brenda",
  "Larry", "Pamela", "Justin", "Emma", "Scott", "Nicole", "Brandon", "Helen",
  "Benjamin", "Samantha", "Samuel", "Katherine", "Raymond", "Christine", "Gregory", "Debra",
  "Frank", "Rachel", "Alexander", "Carolyn", "Patrick", "Janet", "Jack", "Catherine",
  "Denis", "Maria", "Jerry", "Heather", "Tyler", "Diane",
]

const LAST_NAMES = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
  "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
  "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson",
  "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker",
  "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill",
  "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell",
  "Mitchell", "Carter", "Roberts", "Gomez", "Philips", "Evans", "Turner", "Diaz",
  "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales",
  "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson",
  "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward",
  "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray",
  "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel",
  "Myers", "Long", "Ross", "Foster",
]

const STREET_NAMES = [
  "Lake", "River", "Hill", "Park", "Oak", "Pine", "Maple", "Cedar",
  "Elm", "Washington", "Lincoln", "Jefferson", "Madison", "Monroe", "Adams",
  "Franklin", "Highland", "Forest", "Spring", "Sunset", "Ocean", "Mountain",
  "Valley", "Church", "School", "Mill", "Station", "Center", "Union",
  "Prospect", "Hillside", "Meadow", "Garden", "Orchard", "Field", "Green",
  "Fairview", "Fairway", "Riverside", "Lakeside", "Hilltop", "Sunnyvale",
  "Willow", "Birch", "Aspen", "Spruce", "Walnut", "Cherry", "Magnolia",
  "Dogwood", "Beech", "Sycamore", "Cypress", "Redwood", "Sequoia", "Laurel",
  "Hawthorn", "Locust", "Chestnut", "Butternut", "Hickory", "Cottonwood",
]

const STREET_SUFFIXES = [
  { abbr: "Rd", full: "Road" },
  { abbr: "St", full: "Street" },
  { abbr: "Ave", full: "Avenue" },
  { abbr: "Dr", full: "Drive" },
  { abbr: "Ln", full: "Lane" },
  { abbr: "Ct", full: "Court" },
  { abbr: "Way", full: "Way" },
  { abbr: "Blvd", full: "Boulevard" },
  { abbr: "Pl", full: "Place" },
  { abbr: "Ter", full: "Terrace" },
  { abbr: "Cir", full: "Circle" },
  { abbr: "Hwy", full: "Highway" },
]

// ===================== 工具函数 =====================

export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function generateHouseNumber(): string {
  return String(Math.floor(Math.random() * 9800) + 100)
}

export function generatePhone(areaCode: string): string {
  const exchange = String(Math.floor(Math.random() * 800) + 200)
  const line = String(Math.floor(Math.random() * 9000) + 1000)
  return `+1-${areaCode}-${exchange}-${line}`
}

export function generateAddress(stateCode: string): Address | null {
  const state = TAX_FREE_STATES.find((s) => s.code === stateCode)
  if (!state) return null

  const cityData = pickRandom(state.cities)
  const zip = pickRandom(cityData.zips)

  const firstName = pickRandom(FIRST_NAMES)
  const lastName = pickRandom(LAST_NAMES)
  const fullName = `${firstName} ${lastName}`

  const houseNumber = generateHouseNumber()
  const streetName = pickRandom(STREET_NAMES)
  const suffix = pickRandom(STREET_SUFFIXES)
  const street = `${houseNumber} ${streetName} ${suffix.abbr}`

  const areaCode = pickRandom(state.areaCodes)
  const phone = generatePhone(areaCode)

  return {
    fullName,
    street,
    city: cityData.name,
    state: `${state.name}（${state.nameZh}（${state.code}））`,
    zip,
    phone,
  }
}

/**
 * 版本比较函数（语义化版本）
 */
export function compareVersions(a: string, b: string): number {
  const parse = (v: string) => v.split(".").map((n) => parseInt(n, 10) || 0)
  const av = parse(a)
  const bv = parse(b)
  for (let i = 0; i < Math.max(av.length, bv.length); i++) {
    const diff = (av[i] || 0) - (bv[i] || 0)
    if (diff !== 0) return diff
  }
  return 0
}
