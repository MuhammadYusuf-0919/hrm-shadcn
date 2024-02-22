import React from 'react';
import { cx } from 'class-variance-authority';

interface OwnerState {
  color: string;
  variant: string;
  className: string;
}

interface StyledLabelProps {
  className?: string;
  ownerState: OwnerState;
  children: React.ReactNode;
}

const StyledLabel: React.FC<StyledLabelProps> = ({
  children,
  className,
  ownerState,
}) => {
  const softVariant = ownerState.variant === 'soft';
  const filledVariant = ownerState.variant === 'filled';
  const outlinedVariant = ownerState.variant === 'outlined';
  
  const classes = cx(
    className,
    'h-6',
    'px-2',
    'text-sm',
    'font-sans',
    'rounded-md',
    'capitalize',
    'inline-flex',
    'leading-none',
    'items-center',
    'font-semibold',
    'cursor-default',
    'justify-center',
    'whitespace-nowrap',
    ownerState.color !== 'default' && {
      // Filled variant
      ...(filledVariant && {
        'text-white': true,
        [`bg-${ownerState.color}-500`]: true,
      }),
      // Outlined variant
      ...(outlinedVariant && {
        transparent: true,
        border: true,
        'border-solid': true,
        'border-[1px]': true,
        [`text-${ownerState.color}-500`]: true,
      }),
      // Soft variant
      ...(softVariant && {
        [`text-${ownerState.color}-600`]: true,
        [`bg-${ownerState.color}-300`]: true,
      }),
    },
    ownerState.color === 'default' && {
      // Outlined variant
      ...(outlinedVariant && {
        transparent: true,
        'text-amber-500': true,
        'border-solid': true,
        'border-[1px]': true,
        'border-gray-500': true,
      }),
      // Soft variant
      ...(softVariant && {
        'text-primary': true,
        'bg-gray-500': true,
      }),
    }
  );
  return <span className={classes}>{children}</span>;
};

export default StyledLabel;
