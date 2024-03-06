import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '@/components/ui/select';
import React, { ChangeEvent } from 'react';
import Iconify from '@/components/iconify';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { PasswordInput } from '@/components/custom-password-input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function AccountInfo({ data }: { data: any }) {
  const { form } = data;
  const {
    control,
    formState: { errors },
  } = form;

  const [preview, setPreview] = React.useState('');

  function getImageData(event: ChangeEvent<HTMLInputElement>) {
    // FileList is immutable, so we need to create a new one
    const dataTransfer = new DataTransfer();

    // Add newly uploaded images
    Array.from(event.target.files!).forEach((image) =>
      dataTransfer.items.add(image)
    );

    const files = dataTransfer.files;
    const displayUrl = URL.createObjectURL(event.target.files![0]);

    return { files, displayUrl };
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Info</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <FormField
            name="imgUrl"
            control={control}
            render={({ field: { onChange, value, ...rest } }) => (
              <FormItem className="justify-center lg:justify-unset flex lg:block text-center select-none">
                <FormLabel htmlFor="picture" className="w-[30%] flex">
                  <Avatar
                    className={`w-32 h-32 overflow-visible relative border border-dashed border-2 border-${
                      errors.imgUrl ? 'red-500' : 'primary'
                    } p-2`}
                  >
                    <AvatarImage
                      src={preview}
                      alt="user_image"
                      className="rounded-full"
                    />
                    <AvatarFallback>KI</AvatarFallback>
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#34343478] flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 cursor-pointer rounded-full">
                      <Iconify
                        icon="tabler:camera"
                        className="inset-0 text-white"
                      />
                    </div>
                    <Badge className="p-2 absolute right-0 bottom-0 text-white bg-primary border border-2 border-primary cursor-pointer">
                      <Iconify icon="tabler:camera" />
                    </Badge>
                  </Avatar>
                </FormLabel>
                <FormControl>
                  <Input
                    {...rest}
                    type="file"
                    id="picture"
                    className="hidden"
                    onChange={(event) => {
                      const { files, displayUrl } = getImageData(event);
                      setPreview(displayUrl);
                      onChange(files);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
                    disabled={true}
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
                    disabled={true}
                    type="password"
                    placeholder="Enter Your Password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* role */}
          <FormField
            name="role"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  disabled={true}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="Select a role"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {/* @ts-ignore  */}
                    {['user', 'manager'].map((label) => (
                      <SelectItem key={label} value={label}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* position */}
          <FormField
            name="position"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position</FormLabel>
                <Select
                  disabled={true}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="Select a position"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {/* @ts-ignore  */}
                    {['Developer', 'Tester', 'Comtor', 'HR', 'BrSE'].map(
                      (label) => (
                        <SelectItem key={label} value={label}>
                          {label}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default AccountInfo;
