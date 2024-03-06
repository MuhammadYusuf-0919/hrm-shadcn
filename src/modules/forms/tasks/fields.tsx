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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { categoryTask } from '@/data';
import { workType } from '@/data/types';
import Iconify from '@/components/iconify';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import CustomCombobox from '@/components/custom-command';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function TasksFields({ data }: { data: any }) {
  const { form, loading } = data;
  const { control } = form;
  return (
    <CardContent className="grid grid-cols-1 sm:grid-cols-2 items-start gap-8 md:gap-10 lg:gap-16">
      <div className="grid gap-y-4">
        {/* task name */}
        <FormField
          name="taskName"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Name</FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  placeholder="Enter task name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
      <Card className="border">
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-y-4 border-t pt-4">
          {/* assignee */}
          <FormField
            control={control}
            name="assignee"
            render={({ field }) => (
              <FormItem>
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Assignee</FormLabel>
                  <FormControl>
                    <CustomCombobox field={field} label="Assigne" />
                  </FormControl>
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          {/* assignor */}
          <FormField
            control={control}
            name="assignor"
            render={({ field }) => (
              <FormItem>
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Assignor</FormLabel>
                  <FormControl>
                    <CustomCombobox field={field} label="Assignor" />
                  </FormControl>
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          {/* work type */}
          <FormField
            name="workType"
            control={control}
            render={({ field }) => (
              <FormItem>
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Work Type</FormLabel>
                  <Select
                    disabled={loading}
                    value={field.value}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full lg:w-4/5">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a type"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {workType.map(({ label, value }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          {/* start date */}
          <FormField
            name="startDate"
            control={control}
            render={({ field }) => (
              <FormItem className="block flex-col">
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Start date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full lg:w-4/5 pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a start date</span>
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
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          {/* due date */}
          <FormField
            name="dueDate"
            control={control}
            render={({ field }) => (
              <FormItem className="block flex-col">
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Due date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full lg:w-4/5 pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a due date</span>
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
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          {/* effort */}
          <FormField
            name="effort"
            control={control}
            render={({ field }) => (
              <FormItem>
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Effort</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={loading}
                      className="w-full lg:w-4/5"
                      placeholder="Enter effort"
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          {/* category */}
          <FormField
            name="category"
            control={control}
            render={({ field }) => (
              <FormItem>
                <div className="w-full block lg:flex gap-y-2 items-center justify-between text-center">
                  <FormLabel>Category</FormLabel>
                  <Select
                    disabled={loading}
                    value={field.value}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full lg:w-4/5">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a category"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {categoryTask.map(({ label, value }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          {/* actual start date */}
          <FormField
            name="actualStartDate"
            control={control}
            render={({ field }) => (
              <FormItem className="block flex-col">
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Actual Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full lg:w-3/5 pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a actual start date</span>
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
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          {/* actual end date */}
          <FormField
            name="actualEndDate"
            control={control}
            render={({ field }) => (
              <FormItem className="block flex-col">
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Actual End Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full lg:w-3/5 pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a actual end date</span>
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
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </CardContent>
  );
}

export default TasksFields;
