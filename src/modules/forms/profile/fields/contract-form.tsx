import React from 'react';
import {
  Form,
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
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
} from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { FormData } from '@/types';
import { useForm } from 'react-hook-form';
import Iconify from '@/components/iconify';
import { Input } from '@/components/ui/input';
import { contractSchema, ContractsFormTypes } from '@/lib/schema';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { zodResolver } from '@hookform/resolvers/zod';
import { contractPeriod, paymentMethod } from '@/data';
import { contractType, staffType } from '@/data/types';

const initialState: Partial<ContractsFormTypes> = {
  note: '',
  salary: '',
  signDay: '',
  staffType: '',
  contractType: '',
  contractName: '',
  paymentMethod: '',
  contractPeriod: '',
  contractNumber: '',
};

function ContractForm() {
  const form = useForm<ContractsFormTypes>({
    resolver: zodResolver(contractSchema),
    defaultValues: initialState,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { isDirty },
  } = form;
  const [loading, setLoading] = React.useState<boolean>(false);

  const onSubmit = (formData: ContractsFormTypes) => {
    setLoading(true);
    try {
      console.log(formData);
      reset(initialState);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Contract</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* contract name */}
              <FormField
                name="contractName"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contract Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Enter contract name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* contract number */}
              <FormField
                control={control}
                name="contractNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contract Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        disabled={loading}
                        placeholder="Enter your contract number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* contract type */}
              <FormField
                name="contractType"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contract Type</FormLabel>
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
                            placeholder="Select a contract type"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* @ts-ignore  */}
                        {contractType.map(({ label, value }) => (
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
              {/* salary */}
              <FormField
                control={control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        disabled={loading}
                        placeholder="Enter your salary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* staff type */}
              <FormField
                name="staffType"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Staff Type</FormLabel>
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
                            placeholder="Select a staff type"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* @ts-ignore  */}
                        {staffType.map(({ label, value }) => (
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
              {/* payment method */}
              <FormField
                name="paymentMethod"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
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
                            placeholder="Bank tansfer"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* @ts-ignore  */}
                        {paymentMethod.map(({ label, value }) => (
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
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="resize-none h-[60%] lg:h-[80%]"
                        placeholder="Note of the contract"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-4">
                {/* sign day */}
                <FormField
                  name="signDay"
                  control={control}
                  render={({ field }) => (
                    <FormItem className="block flex-col">
                      <FormLabel>Sign Day</FormLabel>
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
                {/* contract period */}
                <FormField
                  name="contractPeriod"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contract Period</FormLabel>
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
                              placeholder="Enter contract period"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* @ts-ignore  */}
                          {contractPeriod.map(({ label, value }) => (
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
              </div>
            </div>
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
              {loading ? 'Saving' : 'Save'}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}

export default ContractForm;
