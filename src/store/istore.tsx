export interface IStore<T> {
  subscribe(listener: () => void): () => void;
  getEntries(): T[];
  update(data: T): void;
}
