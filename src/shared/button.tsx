import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
