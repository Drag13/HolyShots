import { Header } from '../shared/header';
import { Divider } from '../shared/divider';
import { ResultChart } from './result.chart';
import { ResultForm, ResultFormState } from './result.form';
import { useState } from 'react';
import { ShootingResult } from './result';

export function HomePage() {
  const [history, setHistory] = useState<ShootingResult[]>([]);
  const updateHistory = (newResult: ResultFormState) => {
    const { date, result } = newResult;
    const shootingResult: ShootingResult = {
      date: new Date(date),
      result,
    };
    setHistory([...history, shootingResult]);
  };
  return (
    <>
      <Header>Header</Header>
      <ResultForm onSubmit={updateHistory} />
      <Divider />
      <ResultChart history={history} />
    </>
  );
}
