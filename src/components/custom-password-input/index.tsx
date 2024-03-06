import { cn } from '@/lib/utils';
import Iconify from '../iconify';
import { forwardRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input, InputProps } from '@/components/ui/input';

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, disabled, type, className, ...field }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative">
        <Input
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          disabled={disabled}
          placeholder={placeholder}
          className={cn('hide-password-toggle pr-10', className)}
          ref={ref}
          {...field}
        />
        <Button
          size="sm"
          type="button"
          variant="ghost"
          disabled={disabled}
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <Iconify
            width={20}
            aria-hidden="true"
            className="text-gray-500"
            icon={`radix-icons:${
              showPassword && !disabled ? 'eye-open' : 'eye-none'
            }`}
          />
          <span className="sr-only">
            {showPassword ? 'Hide password' : 'Show password'}
          </span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
