import { forwardRef, ReactNode } from 'react';
import StyledLabel from './style';

interface LabelProps {
  children: ReactNode;
  color?: string;
  variant?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  sx?: string;
  // Other props
  [key: string]: any;
}

const Label = forwardRef<HTMLSpanElement, LabelProps>(
  ({
    children,
    color = 'default',
    variant = 'soft',
    startIcon,
    endIcon,
    className,
    sx,
    ...other
  }) => {
    const iconStyle = {
      width: 16,
      height: 16,
      '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
    };

    return (
      <StyledLabel
        ownerState={{ color, variant, className }}
        className={`${startIcon ? 'pl-3' : ''} ${endIcon ? 'pr-3' : ''} ${
          sx ?? ''
        }`}
        {...other}
      >
        {startIcon && (
          <span className={`mr-3`} style={iconStyle}>
            {startIcon}
          </span>
        )}

        {children}

        {endIcon && (
          <span className={`ml-3`} style={iconStyle}>
            {endIcon}
          </span>
        )}
      </StyledLabel>
    );
  }
);

export default Label;
