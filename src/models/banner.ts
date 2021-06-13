export interface ISection {
  contents: ISectionContents;
}
export interface ISectionContents {
  [x: string]: any;
  id: number;
  detail: string | null;
  title: string | null;
  color: string | null;
  subimages?: string[];
  image: string | null;
  embedVideo: string | null;
  theme: string | null;
}

export interface IContents {
  id: number;
  image: string | null;
  embedVideo: string | null;
  detail: string | null;
  title: string | null;
  color: string | null;
  theme: string | null;
  bannerImage: string | null;
}

export interface IBanner {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  bgUrl: string;
}
