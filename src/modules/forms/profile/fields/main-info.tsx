import {
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import Iconify from '@/components/iconify';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function MainInfo({ data }: { data: any }) {
  const { form, loading } = data;
  const { control } = form;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Main Info</CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {/* fullName */}
        <FormField
          name="fullName"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  placeholder="Enter user Full Name"
                  {...field}
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
          name="birthday"
          control={control}
          render={({ field }) => (
            <FormItem className="block flex-col">
              <FormLabel>Date of birthd</FormLabel>
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
        {/* address */}
        <FormField
          name="address"
          control={control}
          render={({ field }) => (
            <FormItem className='lg:col-span-2'>
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
      </CardContent>
    </Card>
  );
}

export default MainInfo;
