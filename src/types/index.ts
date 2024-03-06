export interface NavItem {
  title: string;
  path?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface ConfigState {
  entity: string;
  captions: string[];
  create: boolean;
  update: boolean;
  editValue: FormData
}
export interface FormData {
  id: string;
  note: string;
  role: string;
  email: string;
  signDay: Date;
  imgUrl: string;
  salary: number;
  status: string;
  gender: string;
  address: string;
  fullName: string;
  password: string;
  position: string;
  birthday: string;
  username: string;
  taskName: string;
  newPassword: string;
  projectName: string;
  phoneNumber: string;
  contractName: string;
  repeatPassword: string;
  contractNumber: number;
  currentPassword: string;
  staffType: 'part-time' | 'full-time';
  contractType: 'probationary' | 'offical';
  paymentMethod: 'bank-transfer' | 'receive-directly';
  contractPeriod: '6-months' | '1-year' | '2-years' | 'open-ended-contract';
}
export interface gGLO {
  row: FormData[];
  config: ConfigState
}

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};