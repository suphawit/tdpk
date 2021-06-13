import { AuditData } from './common';

export interface HomePageArticleInfo extends AuditData {
  detail: string;
  target: string;
  targetLabel: string;
  title: string;
}

export interface HomepageArticleItem extends AuditData {
  content: string;
  excerpt: string;
  featured: boolean;
  featuredImage: string;
  guid: string;
  name: string;
  title: string;
  postedAt: string;
  slug: string;
  categories: ArticleInfoItem[];
}

export interface IHomePageArticleResponse {
  section01: HomePageArticleInfo;
  articles: HomepageArticleItem[];
}

export interface IArticleCategory {
  articlesCount: number;
  createdAt: string;
  detail: string;
  id: number;
  slug: string;
  sort: number;
  title: string;
  updatedAt: string;
}

export interface ArticleInfoItem {
  id: number;
  slug: string;
  sort: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  detail: string;
}

export interface IArticleDetails {
  id: number;
  title: string;
  featuredImage: string;
  excerpt: string;
  featured: boolean;
  content: string;
  name: string;
  postedAt: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  categories: ArticleInfoItem[];
  tags: ArticleInfoItem[];
  suggestedArticles: IArticleDetails[];
}

export interface IArticleListRequest {
  term: string;
  categoryId: string;
  tagId: string;
  featured: boolean;
  offset: number;
}
