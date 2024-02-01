import { IStore } from './istore';

export class HistoryStore implements IStore<ShotHistory> {
  private static readonly _historyKey = 'hhhh_istory_kkk';
  private static _storage: Storage;
  private _listeners: (() => void)[] = [];
  private _shotHistory: ShotHistory[] = [];

  static init(storage: Storage = localStorage): HistoryStore {
    HistoryStore._storage = storage;
    try {
      const serializedHistory = deserializeShootingHistory(
        JSON.parse(this._storage.getItem(this._historyKey) ?? '[]')
      );

      return new HistoryStore(serializedHistory);
    } catch (error) {
      console.log(`An error ocured`, error);
    }

    return new HistoryStore(null);
  }

  private constructor(data: ShotHistory[] | null) {
    this._shotHistory = data ?? [];
  }

  subscribe(listener: () => void): () => void {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((l) => l !== listener);
    };
  }

  getEntries(): ShotHistory[] {
    return this._shotHistory;
  }

  update(data: ShotHistory): void {
    this._shotHistory = [...this._shotHistory, data];
    HistoryStore._storage.setItem(
      HistoryStore._historyKey,
      JSON.stringify(this._shotHistory)
    );
    this._listeners.forEach((l) => l());
  }
}

type ShotHistory = {
  date: Date;
  result: number;
};

function deserializeShootingHistory(history: unknown): ShotHistory[] {
  if (!Array.isArray(history)) {
    return [];
  }

  return history.map((entry) => {
    return {
      date: new Date(entry.date),
      result: Number.parseInt(entry.result),
    };
  });
}
