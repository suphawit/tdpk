interface ISubMenu {
  label: string;
  path: string;
  openInNewTab: boolean;
  subMenu?: ISubMenu[];
}

export interface IMenuLinks {
  header: string;
  subMenu: ISubMenu[];
}
