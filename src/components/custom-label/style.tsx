import React from 'react';
import { cn } from '@/lib/utils';

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
  const colours = {
    warning: "bg-amber-200 text-amber-500",
    success: "bg-green-200 text-green-500",
    error: "bg-red-200 text-red-500",
    info: "bg-cyan-200 text-cyan-500",
    default: "bg-gray-200 text-gray-500",
  };
  const classes = cn(
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
    colours[ownerState.color],
    // ownerState.color !== 'default' && {
    //   // Filled variant
    //   ...(filledVariant && {
    //     'text-white': true,
    //     [`bg-${ownerState.color}-500`]: true,
    //   }),
    //   // Outlined variant
    //   ...(outlinedVariant && {
    //     transparent: true,
    //     border: true,
    //     'border-solid': true,
    //     'border-[1px]': true,
    //     [`border-${ownerState.color}-500`]: true,
    //     [`text-${ownerState.color}-500`]: true,
    //   }),
    //   // Soft variant
    //   ...(softVariant && {
    //     [`text-${ownerState.color}-500`]: true,
    //     [`bg-${ownerState.color}-200`]: true,
    //   }),
    // },
    // ownerState.color === 'default' && {
    //   // Outlined variant
    //   ...(outlinedVariant && {
    //     transparent: true,
    //     'text-amber-500': true,
    //     'border-solid': true,
    //     'border-[1px]': true,
    //     'border-gray-500': true,
    //   }),
    //   // Soft variant
    //   ...(softVariant && {
    //     'text-gray-600': true,
    //     'bg-gray-300': true,
    //   }),
    // }
  );
  return <div className={classes}>{children}</div>;
};

export default StyledLabel;
