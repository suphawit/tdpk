import { AuditData } from './common';

export enum BANNER_ORIENTATIONS {
  LEFT = 'l',
  RIGHT = 'r',
}

export interface IHomeBanner extends AuditData {
  contentType: string;
  detail: string;
  image: string;
  orientation: BANNER_ORIENTATIONS;
  target: string;
  targetLabel: string;
  title: string;
}

export interface IMembershipResponse {
  section01: Section1;
  section02: Section234[];
  section03: Section234;
  section04: Section234[];
  section05: Section5;
}

export interface Section1 extends AuditData {
  contentType: string;
  title: string;
  detail: string;
}

export interface Section234 extends AuditData {
  contentType: string;
  image?: string;
  title?: string;
  detail?: string;
}

export interface Section5 extends AuditData {
  contentType: string;
  targetLabel: string;
  target: string;
}

export interface IInterconnectedResponse {
  section01: InterconnectedImage;
  section02: InterconnectedInfo;
  section03: InterconnectedImage[];
}

export interface InterconnectedInfo extends AuditData {
  contentType: string;
  title: string;
  detail: string;
  targetLabel: string;
  target: string;
}

export interface InterconnectedImage extends AuditData {
  contentType: string;
  image: string;
}
