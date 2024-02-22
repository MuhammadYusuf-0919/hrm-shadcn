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
  name: string;
  role: string;
  email: string;
  imgUrl: string;
  status: string;
  gender: string;
  address: string;
  position: string;
  brithday: string;
  username: string;
  phoneNumber: string;
}
export interface gGLO {
  row: FormData[];
  config: ConfigState
}