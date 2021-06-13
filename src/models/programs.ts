import { AuditData } from './common';
export interface IStartupList {
  id: number;
  logo: string;
  header: string;
  description: string;
  buttonPathLink: string;
  openInNewTab: boolean;
}

export interface IUnorderedList {
  id: number;
  text: string;
}

export interface ITimelineList {
  titleTh: string;
  titleEn: string;
  detailTh: string;
  detailEn: string;
}

export interface IOurMentors {
  id: number;
  image: string;
  name: string;
  title: string;
}

export interface IStartupBoosterTabs {
  id: number;
  header: string;
  description: string | JSX.Element;
}

export interface ICompanyLogos {
  id: number;
  logo: string;
}
export interface IFeedbackBanner extends AuditData {
  contentType: string;
  detail: string;
  image: string;
}
