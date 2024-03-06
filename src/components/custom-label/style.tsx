import React from 'react';
import { cn } from '@/lib/utils';

interface OwnerState {
  color: 'warning' | 'success' | 'error' | 'info' | 'default'; 
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
  );

  return <div className={classes}>{children}</div>;
};

export default StyledLabel;
