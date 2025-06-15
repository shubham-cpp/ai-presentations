export type CustomResponse<TData>
  = | { status: number; data: TData; error?: never }
    | {
      status: number;
      data?: never;
      error: object | string;
    };
