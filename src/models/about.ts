export interface IAbout {
  id: number;
  title: string | null;
  slug: string | null;
  detail: string | null;
  keywords: string | null;
  layoutContents: IAboutLayoutContents[];
}

export interface IAboutLayoutContents {
  contentType: string | null;
  contents: IAboutContents;
  section: string | null;
  type: string | null;
}

export interface IAboutContents {
  id: number;
  detail: string | null;
  title: string | null;
  color: string | null;
  subimages: string[];
  image: string | null;
  subtitle: string | null;
  target: string | null;
}
