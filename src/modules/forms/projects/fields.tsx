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
import { priorities } from '@/data';
import Iconify from '@/components/iconify';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { projectStatus } from '@/data/status';
import { projectType } from '@/data/types';
import Label from '@/components/custom-label';
import { statusColors } from '@/utils/statusColors';

function ProjectFields({ data }: { data: any }) {
  const { form, loading } = data;
  const { control } = form;
  return (
    <CardContent className="grid grid-cols-1 sm:grid-cols-2 items-start gap-8 md:gap-10 lg:gap-16">
      <div className="grid items-center gap-4">
        {/* project name */}
        <FormField
          name="projectName"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  placeholder="Enter project name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-baseline gap-4">
          {/* project type */}
          <FormField
            name="projectType"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Type</FormLabel>
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
                        placeholder="Select a project type"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {/* @ts-ignore  */}
                    {projectType.map(({ label, value }) => (
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
          {/* customer */}
          <FormField
            name="customer"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter customer"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* description */}
        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="resize-none"
                  placeholder="Description of the project"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid items-center gap-4">
        {/* key */}
        <FormField
          name="key"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key</FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  placeholder="Enter project key"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-baseline gap-4">
          {/* priority */}
          <FormField
            name="priority"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
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
                    {priorities.map(({ label, value }) => (
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
          {/* status */}
          <FormField
            name="status"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
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
                        placeholder="Select a status"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {/* @ts-ignore  */}
                    {projectStatus.map(({ label, value, icon }) => (
                      <SelectItem key={value} value={value}>
                        <Label
                          startIcon={
                            <Iconify
                              width={20}
                              icon={`radix-icons:${icon}`}
                              className="mr-2 h-4 w-4 text-muted-foreground"
                            />
                          }
                          color={statusColors(value)}
                        >
                          {label}
                        </Label>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-baseline gap-4">
          {/* period start */}
          <FormField
            name="periodStart"
            control={control}
            render={({ field }) => (
              <FormItem className="block flex-col">
                <FormLabel>Period start</FormLabel>
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
          {/* period end */}
          <FormField
            name="periodEnd"
            control={control}
            render={({ field }) => (
              <FormItem className="block flex-col">
                <FormLabel>Period end</FormLabel>
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
        </div>
      </div>
    </CardContent>
  );
}

export default ProjectFields;
