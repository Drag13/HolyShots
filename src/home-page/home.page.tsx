import { Header } from '../shared/header';
import { Divider } from '../shared/divider';
import { ResultChart } from './result.chart';
import { ResultForm, ResultFormState } from './result.form';
import { useSyncExternalStore } from 'react';
import { ShootingResult } from './result';
import { useHistoryStoreContext } from '../store/history-store.provider';

export function HomePage() {
  const historyStore = useHistoryStoreContext();
  const historyState = useSyncExternalStore(
    (l) => historyStore.subscribe(l),
    () => historyStore.getEntries()
  );

  const updateHistory = (newResult: ResultFormState) => {
    const { date, result } = newResult;
    const shootingResult: ShootingResult = {
      date: new Date(date),
      result,
    };
    historyStore.update(shootingResult);
  };

  return (
    <>
      <Header>Header</Header>
      <ResultForm onSubmit={updateHistory} />
      <Divider />
      <ResultChart history={historyState} />
    </>
  );
}
