import React from 'react';
import {
  FormItem,
  FormLabel,
  FormField,
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import Iconify from '@/components/iconify';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function UserFields({ data }: { data: any }) {
  const { form, loading } = data;
  const {
    control,
    formState: { errors },
  } = form;

  const [imageSrc, setImageSrc] = React.useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageSrc(event.target.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  React.useEffect(() => {
    if (control?._fields.imgUrl.mount) {
      handleFileChange(control?._fields?.imgUrl?._f.value);
    }
  }, [control?._fields.imgUrl]);

  return (
    <CardContent className="relative p-2 sm:p-4 md:p-6 mt-0">
      <div className="grid md:flex sm:justify-center">
        <div className="w-full md:w-[30%] mx-auto flex justify-center pt-6 md:pt-8">
          <FormField
            name="imgUrl"
            control={control}
            render={({ field }) => (
              <FormItem className="text-center">
                <FormLabel htmlFor="picture">
                  <Avatar
                    className={`w-32 h-32 overflow-visible relative border border-dashed border-2 border-${
                      errors.imgUrl ? 'red-500' : 'primary'
                    } p-2`}
                  >
                    <AvatarImage
                      src={imageSrc}
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
                    {...field}
                    type="file"
                    id="picture"
                    className="hidden"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-4">
          <div className="grid gap-y-4 item">
            {/* name */}
            <FormField
              name="name"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Enter user name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* email */}
            <FormField
              name="email"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      disabled={loading}
                      placeholder="Enter user email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* phone number */}
            <FormField
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      disabled={loading}
                      placeholder="Enter your phone number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* username */}
            <FormField
              name="username"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Enter user username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-y-4 item">
            {/* role */}
            <FormField
              name="role"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    disabled={loading}
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
                    disabled={loading}
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
            {/* gender */}
            <FormField
              name="gender"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a gender"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {['Male', 'Female'].map((label) => (
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
            {/* birthday */}
            <FormField
              name="brithday"
              control={control}
              render={({ field }) => (
                <FormItem className="block flex-col">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <Iconify
                            icon="radix-icons:calendar"
                            className="ml-auto h-4 w-4 opacity-50"
                          />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="sm:col-span-2">
            {/* address */}
            <FormField
              name="address"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      disabled={loading}
                      {...field}
                      placeholder="Enter user address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    </CardContent>
  );
}

export default UserFields;
