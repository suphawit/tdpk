export interface IInternHubLayoutContents {
  contentType: string | null;
  contents: IInternHubContents;
  section: string | null;
  type: string | null;
}

export interface IInternHubContents {
  id: number;
  detail: string | null;
  title: string | null;
  color: string | null;
  subimages: string[];
  image: string | null;
  subtitle: string | null;
  target: string | null;
  theme: string | null;
  subdata: IInternHubSubdata[];
}

export interface IInternHubSubdata {
  refId: string | null;
  title: string | null;
  detail: string | null;
  subtitle: string | null;
  target: string | null;
}
