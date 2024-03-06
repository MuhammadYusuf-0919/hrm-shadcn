import * as React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { loginSchema } from '@/lib/schema';
import { useForm } from 'react-hook-form';
import Iconify from '@/components/iconify';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormData } from '@/types';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { PasswordInput } from '@/components/custom-password-input';

const initialState = {
  username: '',
  password: '',
};

export function UserAuthForm() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const formMethods = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialState,
  });
  const {
    reset,
    control,
    handleSubmit,
    formState: { isDirty },
  } = formMethods;

  const onSubmit = async (formData: FormData) => {
    try {
      // const mutationPromise = addEntity({ entity, data: formData });
      // await Promise.all([
      //   toast.promise(mutationPromise, {
      //     loading: 'Adding item...',
      //     success: `Item added successfully`,
      //     error: `Failed to add item`,
      //   }),
      //   mutationPromise
      //     .then(() => reset(initialState))
      //     .then(() => navigate('/')),
      // ]);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const onError = (errors: any) => {
    console.log(errors);
  };
  // radix-icons:eye-none
  // radix-icons:eye-open
  return (
    <Form {...formMethods}>
      <div className={cn('grid gap-6')}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="grid gap-14">
            <div className="grid gap-4">
              {/* username */}
              <FormField
                name="username"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Enter user username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* password */}
              <FormField
                name="password"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        {...field}
                        type="password"
                        disabled={isLoading}
                        placeholder="Enter Your Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={!isDirty || isLoading}>
              {isLoading && (
                // <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                <Iconify
                  icon="radix-icons:sipnner"
                  className="mr-2 h-4 w-4 animate-spin"
                />
              )}
              Login
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
}
