export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

export interface ApiError {
  success: false;
  message: string;
  error?: string;
}

export type ApiResult<T> = ApiResponse<T> | ApiError;
