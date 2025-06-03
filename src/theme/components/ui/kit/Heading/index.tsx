import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

type CustomProps = {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const variants = cva('inline-flex', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
      xl: '',
      '2xl': '',
    },
    variant: {
      regular: '',
      medium: '',
      semibold: '',
      bold: '',
    },
  },
  defaultVariants: {
    variant: 'bold',
    size: 'lg',
  },
  compoundVariants: [
    {
      variant: 'regular',
      size: 'sm',
      className: 'display-xs-regular',
    },
    {
      variant: 'medium',
      size: 'sm',
      className: 'display-xs-medium',
    },
    {
      variant: 'semibold',
      size: 'sm',
      className: 'display-xs-semibold',
    },
    {
      variant: 'bold',
      size: 'sm',
      className: 'display-xs-bold',
    },
    {
      variant: 'regular',
      size: 'md',
      className: 'display-sm-regular',
    },
    {
      variant: 'medium',
      size: 'md',
      className: 'display-sm-medium',
    },
    {
      variant: 'semibold',
      size: 'md',
      className: 'display-sm-semibold',
    },
    {
      variant: 'bold',
      size: 'md',
      className: 'display-sm-bold',
    },
    {
      variant: 'regular',
      size: 'lg',
      className: 'display-md-regular',
    },
    {
      variant: 'medium',
      size: 'lg',
      className: 'display-md-medium',
    },
    {
      variant: 'semibold',
      size: 'lg',
      className: 'display-md-semibold',
    },
    {
      variant: 'bold',
      size: 'lg',
      className: 'display-md-bold',
    },
    {
      variant: 'regular',
      size: 'xl',
      className: 'display-lg-regular',
    },
    {
      variant: 'medium',
      size: 'xl',
      className: 'display-lg-medium',
    },
    {
      variant: 'semibold',
      size: 'xl',
      className: 'display-lg-semibold',
    },
    {
      variant: 'bold',
      size: 'xl',
      className: 'display-lg-bold',
    },
    {
      variant: 'regular',
      size: '2xl',
      className: 'display-xl-regular',
    },
    {
      variant: 'medium',
      size: '2xl',
      className: 'display-xl-medium',
    },
    {
      variant: 'semibold',
      size: '2xl',
      className: 'display-xl-semibold',
    },
    {
      variant: 'bold',
      size: '2xl',
      className: 'display-xl-bold',
    },
    {
      variant: 'regular',
      size: '2xl',
      className: 'display-xl-regular',
    },
    {
      variant: 'medium',
      size: '2xl',
      className: 'display-xl-medium',
    },
    {
      variant: 'semibold',
      size: '2xl',
      className: 'display-xl-semibold',
    },
    {
      variant: 'bold',
      size: '2xl',
      className: 'display-xl-bold',
    },
  ],
});

function Heading({
  className,
  variant,
  size,
  level: Tag = 'h1',
  asChild = false,
  ...props
}: CustomProps &
  React.ComponentProps<'h1'> &
  VariantProps<typeof variants> & {
    asChild?: boolean;
  }) {
  const { children, ...rest } = props;
  const Comp = asChild ? Slot : Tag;

  return (
    <Comp
      data-slot="heading"
      className={cn(variants({ variant, size, className }))}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export { Heading, variants };
