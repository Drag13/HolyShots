import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../shared/button';
import { Input } from '../shared/input';
import styles from './result.form.module.css';
import { formatDate } from '../shared/utils/time';
import { Label } from '../shared/label';

export type ResultFormState = {
  result: number;
  date: string;
};

type ResultFormProps = {
  onSubmit: (results: ResultFormState) => void;
};

const DEFAULT_FORM_STATE = {
  result: 1,
  date: formatDate(new Date()),
};
export function ResultForm({ onSubmit }: ResultFormProps) {
  const [resultFormState, setResultFormState] =
    useState<ResultFormState>(DEFAULT_FORM_STATE);

  const { date, result } = resultFormState;

  const setResult = (e: ChangeEvent<HTMLInputElement>) => {
    setResultFormState({ ...resultFormState, result: e.target.valueAsNumber });
  };

  const setDate = (e: ChangeEvent<HTMLInputElement>) => {
    setResultFormState({ ...resultFormState, date: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit(resultFormState);
  };

  return (
    <form autoComplete="off" className={styles.root} onSubmit={handleSubmit}>
      <Label htmlFor="result"> Результат у хвилинах</Label>
      <Input
        id="result"
        type="number"
        required
        step="0.1"
        value={result}
        onChange={setResult}
      />

      <Label htmlFor="date"> Дата пострілу</Label>
      <Input id="date" type="date" required value={date} onChange={setDate} />

      <Button>Save</Button>
    </form>
  );
}
