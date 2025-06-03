import { AnchorHTMLAttributes, HTMLAttributes } from 'react';

export function Link(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} />;
}
