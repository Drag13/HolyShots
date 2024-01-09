import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

export function Label({
  children,
  ...props
}: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>) {
  return <label {...props}>{children}</label>;
}
