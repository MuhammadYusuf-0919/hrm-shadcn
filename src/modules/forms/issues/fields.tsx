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
import { reasonIssue } from '@/data';
import Iconify from '@/components/iconify';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import CustomCombobox from '@/components/custom-command';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ImageUpload from '@/components/attachmant';

const IssueFields = ({ data }: { data: any }) => {
  const { form, loading } = data;
  const { control } = form;
  return (
    <CardContent className="grid grid-cols-1 sm:grid-cols-2 items-start gap-8 md:gap-10 lg:gap-16">
      <div className="grid gap-y-4">
        {/* issue name */}
        <FormField
          name="issueName"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Name</FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  placeholder="Enter issue name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* content bug */}
        <FormField
          control={control}
          name="contentBug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content Bug</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="resize-none"
                  placeholder="Content Bug of the Issue"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ImageUpload />
        {/* content fix */}
        <FormField
          control={control}
          name="contentFix"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content Fix</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="resize-none"
                  placeholder="Content Fix of the issue"
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
          {/* project id */}
          <FormField
            control={control}
            name="projectId"
            render={({ field }) => (
              <FormItem>
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Project ID</FormLabel>
                  <FormControl>
                    <CustomCombobox
                      type="id"
                      field={field}
                      label="Project ID"
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          {/* task id */}
          <FormField
            control={control}
            name="taskId"
            render={({ field }) => (
              <FormItem>
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Task ID</FormLabel>
                  <FormControl>
                    <CustomCombobox type="id" field={field} label="Task ID" />
                  </FormControl>
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          {/* reviewer */}
          <FormField
            control={control}
            name="reviewer"
            render={({ field }) => (
              <FormItem>
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Reviewer</FormLabel>
                  <FormControl>
                    <CustomCombobox field={field} label="Reviewer" />
                  </FormControl>
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
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
          {/* review date */}
          <FormField
            name="reviewDate"
            control={control}
            render={({ field }) => (
              <FormItem className="block flex-col">
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Review date</FormLabel>
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
                            <span>Pick a review date</span>
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
          {/* reason */}
          <FormField
            name="reason"
            control={control}
            render={({ field }) => (
              <FormItem>
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Reason</FormLabel>
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
                          placeholder="Select a reason"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {reasonIssue.map(({ label, value }) => (
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
          {/* fixer */}
          <FormField
            control={control}
            name="fixer"
            render={({ field }) => (
              <FormItem>
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Fixer</FormLabel>
                  <FormControl>
                    <CustomCombobox field={field} label="Assigne" />
                  </FormControl>
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          {/* fix date */}
          <FormField
            name="fixDate"
            control={control}
            render={({ field }) => (
              <FormItem className="block flex-col">
                <div className="w-full block lg:flex gap-y-2 items-center justify-between">
                  <FormLabel>Fix date</FormLabel>
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
                            <span>Pick a fix date</span>
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
};

export default IssueFields;
