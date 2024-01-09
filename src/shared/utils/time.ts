export function formatDate(date: Date): string {
  return `${date.getFullYear()}-${padDate(date.getMonth() + 1)}-${padDate(
    date.getDate()
  )}`;
}

const padDate = (v: number) => {
  const value = v.toString();
  return value.length < 2 ? value.padStart(2, '0') : v;
};
