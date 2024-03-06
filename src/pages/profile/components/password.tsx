import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import React from 'react';
import { FormData } from '@/types';
import { useForm } from 'react-hook-form';
import Iconify from '@/components/iconify';
import { passwordSchema } from '@/lib/schema';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordInput } from '@/components/custom-password-input';

function ChangePassword() {
  const form = useForm<FormData>({
    resolver: zodResolver(passwordSchema),
  });
  const [loading, setLoading] = React.useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = form;

  const onSubmit = (formData: FormData) => {
    setLoading(true);
    try {
      console.log(formData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="contents">
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>
              Your passord must be least 6 characters, including numbers,
              letters and special characters (!$@%).
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {/* current password */}
            <FormField
              name="currentPassword"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      type="password"
                      disabled={loading}
                      placeholder="Enter Current Password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* new password */}
            <FormField
              name="newPassword"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      type="password"
                      disabled={loading}
                      placeholder="Enter New Password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* repeat password */}
            <FormField
              name="repeatPassword"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repeat Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      type="password"
                      disabled={loading}
                      placeholder="Enter Repeat Password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="justify-end">
            <Button
              type="submit"
              disabled={!isDirty || loading}
              className={`w-full flex items-center md:w-36 m-0 cursor-${
                loading ? 'error' : 'disabled'
              }`}
            >
              {loading && (
                <Iconify
                  className="mr-4 mt-1"
                  icon="svg-spinners:3-dots-scale"
                />
              )}
              {loading ? 'Saving' : 'Save change'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

export default ChangePassword;
