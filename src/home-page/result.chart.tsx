import { ShootingResult } from './result';

type ResultChartProps = {
  history: ShootingResult[];
};

export function ResultChart({ history }: ResultChartProps) {
  return (
    <ul>
      {history.map((res, key) => (
        <li key={key}>
          {res.result}: {res.date.toISOString()}
        </li>
      ))}
    </ul>
  );
}
