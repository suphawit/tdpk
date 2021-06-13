export interface IContactUs {
  id: number;
  title: string | null;
  slug: string | null;
  detail: string | null;
  keywords: string | null;
  layoutContents: IContactUsLayoutContents[];
}

export interface IContactUsLayoutContents {
  contentType: string | null;
  contents: IContactUsContents;
  section: string | null;
  type: string | null;
}

export interface IContactUsContents {
  id: number;
  detail: string | null;
  title: string | null;
  color: string | null;
  theme: string | null;
  subimages: string[];
  image: string | null;
}

export interface IContactUsSocialList {
  id: number;
  title: string | null;
  image: string;
  target: string;
}
