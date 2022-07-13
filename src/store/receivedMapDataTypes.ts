export interface ChinaTotal {
  nowConfirm: number;
  localConfirm: number;
  confirm: number;
  suspect: number;
  localWzzAdd: number;
  nowLocalWzz: number;
  dead: number;
  noInfectH5: number;
  local_acc_confirm: number;
  mediumRiskAreaNum: number;
  deadAdd: number;
  mRiskTime: string;
  noInfect: number;
  showLocalConfirm: number;
  localConfirmH5: number;
  confirmAdd: number;
  mtime: string;
  localConfirmAdd: number;
  highRiskAreaNum: number;
  heal: number;
  nowSevere: number;
  importedCase: number;
  showlocalinfeciton: number;
}

export interface ChinaAdd {
  importedCase: number;
  noInfect: number;
  noInfectH5: number;
  localConfirmH5: number;
  confirm: number;
  heal: number;
  dead: number;
  localConfirm: number;
  nowConfirm: number;
  suspect: number;
  nowSevere: number;
}

export interface ShowAddSwitch {
  confirm: boolean;
  heal: boolean;
  noInfect: boolean;
  all: boolean;
  dead: boolean;
  nowConfirm: boolean;
  nowSevere: boolean;
  importedCase: boolean;
  localConfirm: boolean;
  localinfeciton: boolean;
  suspect: boolean;
}

export interface Total {
  nowConfirm: number;
  confirm: number;
  showHeal: boolean;
  mtime: string;
  heal: number;
  provinceLocalConfirm: number;
  continueDayZeroLocalConfirmAdd: number;
  continueDayZeroLocalConfirm: number;
  dead: number;
  showRate: boolean;
  wzz: number;
  mediumRiskAreaNum: number;
  highRiskAreaNum: number;
  adcode: string;
}

export interface Today {
  tip: string;
  wzz_add: number;
  local_confirm_add: number;
  abroad_confirm_add: number;
  dead_add: number;
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
}

export interface Children {
  name: string;
  adcode: string;
  date: string;
  today: Today;
  total: Total;
}

export interface AreaTree {
  total: Total;
  children: Children[];
  name: string;
  today: Today;
}

export interface Diseaseh5Shelf {
  chinaTotal: ChinaTotal;
  chinaAdd: ChinaAdd;
  isShowAdd: boolean;
  showAddSwitch: ShowAddSwitch;
  areaTree: AreaTree[];
  lastUpdateTime: string;
}

export interface StatisGradeCityDetail {
  province: string;
  city: string;
  nowConfirm: number;
  confirm: number;
  dead: number;
  heal: number;
  grade: string;
  wzz_add: string;
  confirmAdd: number;
  date: string;
  mtime: string;
  sdate: string;
  syear: number;
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
