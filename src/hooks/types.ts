export type AsyncFn<T> = (args: T) => Promise<Record<string, unknown>>;

export interface InitType {
  isLoading: boolean;
  err: null | unknown;
  res: any;
}
