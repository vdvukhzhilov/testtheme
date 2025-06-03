import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

type CustomProps = {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
};

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap transition-colors disabled:pointer-events-none [&_svg]:pointer-events-none shrink-0 not-[disabled]:cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'button-primary-bg button-primary-fg button-primary-border shadow-skeuomorphic-button-primary',
        secondary:
          'button-secondary-bg button-secondary-fg button-secondary-border',
        link: 'button-tertiary-fg',
      },
      size: {
        sm: 'h-9 gap-1 px-3 py-2 typography-text-sm-semibold rounded-md [&_svg]:size-5',
        md: 'h-10 gap-1 px-3.5 py-2.5 typography-text-sm-semibold rounded-md [&_svg]:size-5',
        lg: 'h-11 gap-1.5 px-4 py-2.5 typography-text-md-semibold rounded-md [&_svg]:size-5',
        xl: 'h-12 gap-1.5 px-4.5 py-3 typography-text-md-semibold rounded-md [&_svg]:size-5',
        '2xl':
          'h-[60px] gap-2.5 px-5.5 py-4 typography-text-lg-semibold rounded-lg [&_svg]:size-6',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
    compoundVariants: [
      {
        variant: 'primary',
        size: 'sm',
        className: 'skeuemorphic-gradient-border-md',
      },
      {
        variant: 'primary',
        size: 'md',
        className: 'skeuemorphic-gradient-border-md',
      },
      {
        variant: 'primary',
        size: 'lg',
        className: 'skeuemorphic-gradient-border-md',
      },
      {
        variant: 'primary',
        size: 'xl',
        className: 'skeuemorphic-gradient-border-md',
      },
      {
        variant: 'primary',
        size: '2xl',
        className: 'skeuemorphic-gradient-border-lg',
      },
      {
        variant: 'link',
        size: 'sm',
        className: 'h-5 px-0 py-0 rounded-xs',
      },
      {
        variant: 'link',
        size: 'md',
        className: 'h-5 px-0 py-0 rounded-xs',
      },
      {
        variant: 'link',
        size: 'lg',
        className: 'h-6 px-0 py-0 rounded-xs',
      },
      {
        variant: 'link',
        size: 'xl',
        className: 'h-6 px-0 py-0 rounded-xs',
      },
      {
        variant: 'link',
        size: '2xl',
        className: 'h-7 px-0 py-0 rounded-xs',
      },
    ],
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  leadingIcon,
  trailingIcon,
  ...props
}: CustomProps &
  React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const { children, ...rest } = props;
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    >
      {leadingIcon}
      <span className="z-[1] relative text-ellipsis">{children}</span>
      {trailingIcon}
    </Comp>
  );
}

function Link({
  className,
  variant,
  size,
  asChild = false,
  leadingIcon,
  trailingIcon,
  ...props
}: CustomProps &
  React.ComponentProps<'a'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const { children, ...rest } = props;
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="link"
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    >
      {leadingIcon}
      <span className="z-[1] relative text-ellipsis">{children}</span>
      {trailingIcon}
    </Comp>
  );
}

export { Button, Link, buttonVariants };
