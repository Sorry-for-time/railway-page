export interface ChinaTotal {
  confirm: number;
  heal: number;
  showLocalConfirm: number;
  noInfectH5: number;
  confirmAdd: number;
  nowLocalWzz: number;
  showlocalinfeciton: number;
  localWzzAdd: number;
  deadAdd: number;
  mtime: string;
  highRiskAreaNum: number;
  localConfirm: number;
  mRiskTime: string;
  dead: number;
  localConfirmAdd: number;
  nowConfirm: number;
  suspect: number;
  nowSevere: number;
  importedCase: number;
  noInfect: number;
  localConfirmH5: number;
  local_acc_confirm: number;
  mediumRiskAreaNum: number;
}

export interface ChinaAdd {
  localConfirm: number;
  localConfirmH5: number;
  dead: number;
  suspect: number;
  importedCase: number;
  nowSevere: number;
  noInfect: number;
  noInfectH5: number;
  confirm: number;
  heal: number;
  nowConfirm: number;
}

export interface ShowAddSwitch {
  localConfirm: boolean;
  all: boolean;
  confirm: boolean;
  suspect: boolean;
  dead: boolean;
  heal: boolean;
  nowSevere: boolean;
  noInfect: boolean;
  localinfeciton: boolean;
  nowConfirm: boolean;
  importedCase: boolean;
}

export interface Total {
  showHeal: boolean;
  continueDayZeroConfirmAdd: number;
  mtime: string;
  confirm: number;
  wzz: number;
  highRiskAreaNum: number;
  continueDayZeroConfirm: number;
  continueDayZeroLocalConfirmAdd: number;
  dead: number;
  showRate: boolean;
  provinceLocalConfirm: number;
  adcode: string;
  nowConfirm: number;
  heal: number;
  mediumRiskAreaNum: number;
}

export interface Today {
  isUpdated: boolean;
  tip: string;
  local_confirm_add: number;
  abroad_confirm_add: number;
  dead_add: number;
  confirm: number;
  confirmCuts: number;
}

export interface Children {
  total: Total;
  children: Children[];
  name: string;
  adcode: string;
  date: string;
  today: Today;
}

export interface AreaTree {
  name: string;
  today: Today;
  total: Total;
  children: Children[];
}

export interface Diseaseh5Shelf {
  lastUpdateTime: string;
  chinaTotal: ChinaTotal;
  chinaAdd: ChinaAdd;
  isShowAdd: boolean;
  showAddSwitch: ShowAddSwitch;
  areaTree: AreaTree[];
}

export interface StatisGradeCityDetail {
  confirmAdd: number;
  confirm: number;
  mtime: string;
  sdate: string;
  heal: number;
  grade: string;
  date: string;
  syear: number;
  province: string;
  city: string;
  nowConfirm: number;
  dead: number;
  wzz_add: string;
}

export interface Data {
  diseaseh5Shelf: Diseaseh5Shelf;
  statisGradeCityDetail: StatisGradeCityDetail[];
}

export interface RootObject {
  ret: number;
  info: string;
  data: Data;
}
