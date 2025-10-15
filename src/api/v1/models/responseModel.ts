export interface ApiResponse<T> {
  success: true;
  message: string;
  data: T;
}

export interface ApiError {
  success: false;
  message: string;
  error?: string;
}

export type ApiResult<T> = ApiResponse<T> | ApiError;
