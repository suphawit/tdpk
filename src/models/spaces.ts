export interface ISpace {
  id: number;
  title: string | null;
  slug: string | null;
  detail: string | null;
  keywords: string | null;
  layoutContents: ISpaceLayoutContents[];
}

export interface ISpaceLayoutContents {
  contentType: string | null;
  contents: ISpaceContents;
  section: string | null;
  type: string | null;
}

export interface ISpaceContents {
  id: number;
  detail: string | null;
  title: string | null;
  color: string | null;
  subimages: string[];
  image: string | null;
  subtitle: string | null;
  target: string | null;
  theme: string | null;
}

export interface IAvailablePackages {
  [key: string]: number | string | boolean | null;
  expired_at: string | null;
  price_based_day_currency: string | null;
  price_based_day_satangs: number | null;
  price_based_month_currency: string | null;
  price_based_month_satangs: number | null;
}
