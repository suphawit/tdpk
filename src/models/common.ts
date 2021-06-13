export type SafeAny = any;

export interface AuditData {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PagingResponse<T = any> {
  edges: T[];
  total: number;
  pageInfo: {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    perPage: number;
  };
}
