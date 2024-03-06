import {
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
  FormControl,
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
import { dayOffType } from '@/data/types';
import Iconify from '@/components/iconify';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { approver, requester, sessionOff } from '@/data';

function AbsenceFields({ data }: { data: any }) {
  const { form, loading } = data;
  const { control } = form;
  return (
    <CardContent className="grid grid-cols-1 sm:grid-cols-2 items-start gap-4 md:gap-y-10 lg:gap-x-16 lg:gap-y-4">
      {/* requester */}
      <FormField
        name="requester"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Requester</FormLabel>
            <Select
              disabled={loading}
              value={field.value}
              defaultValue={field.value}
              onValueChange={field.onChange}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue
                    defaultValue={field.value}
                    placeholder="Select a type"
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {/* @ts-ignore  */}
                {requester.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* session off */}
      <FormField
        name="sessionOff"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Session Off</FormLabel>
            <Select
              disabled={loading}
              value={field.value}
              defaultValue={field.value}
              onValueChange={field.onChange}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue
                    defaultValue={field.value}
                    placeholder="Select a type"
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {/* @ts-ignore  */}
                {sessionOff.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* approver */}
      <FormField
        name="approver"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Approver</FormLabel>
            <Select
              disabled={loading}
              value={field.value}
              defaultValue={field.value}
              onValueChange={field.onChange}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue
                    defaultValue={field.value}
                    placeholder="Select a priority"
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {/* @ts-ignore  */}
                {approver.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* off day */}
      <FormField
        name="offDay"
        control={control}
        render={({ field }) => (
          <FormItem className="block flex-col">
            <FormLabel>Off Day</FormLabel>
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
                  initialFocus
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* inform */}
      <FormField
        name="inForm"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Inform</FormLabel>
            <FormControl>
              <Input
                disabled={loading}
                placeholder="Enter absence inform"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* reason */}
      <FormField
        control={control}
        name="reason"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Reason</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                className="resize-none"
                placeholder="Reason of the project"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* day off type */}
      <FormField
        name="dayOffType"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Day Off Type</FormLabel>
            <Select
              disabled={loading}
              value={field.value}
              defaultValue={field.value}
              onValueChange={field.onChange}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue
                    defaultValue={field.value}
                    placeholder="Select a type"
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {/* @ts-ignore  */}
                {dayOffType.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* note */}
      <FormField
        control={control}
        name="note"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Note</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                className="resize-none"
                placeholder="Note of the project"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </CardContent>
  );
}

export default AbsenceFields;
