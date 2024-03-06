import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Iconify from '../iconify';
import { useFetchEntityQuery } from '@/redux/crud';

// Define the interface for props passed to the CustomCombobox component
interface Props {
  field: any;
  type?: string;
  label: string;
}

// CustomCombobox component definition
function CustomCombobox({ label, type = 'user', field }: Props): JSX.Element {
  // State to manage the open/close state of the popover
  const [open, setOpen] = React.useState<boolean>(false);
  // State to manage the selected value
  const [value, setValue] = React.useState<string>('');
  const entity =
    field.name === 'projectId'
      ? 'projects'
      : field.name === 'taskId'
      ? 'tasks'
      : 'users';
  const { data, isLoading } = useFetchEntityQuery(entity);
  console.log('entity: ', data);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id="combobox"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full lg:w-4/5 justify-between"
        >
          {/* {value && data
            ? (data.find((option) => option.id === value) || {}).fullName ||
              (data.find((option) => option.id === value) || {}).projectName ||
              (data.find((option) => option.id === value) || {}).taskName
            : `Select ${label}...`} */}
          {value && data
            ? data.find((option) => option.id === value)?.id
            : `Select ${label}...`}
          <Iconify
            icon={`radix-icons:${type === 'id' ? 'id-card' : 'avatar'}`}
            className="text-xxl text-gray-500"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Command>
          <CommandInput {...field} placeholder={`Search for ${label} ...`} />
          <CommandEmpty>{`No ${label} found.`}</CommandEmpty>
          <CommandGroup>
            {data ? (
              data.map((option) => (
                <CommandItem
                  key={option.id}
                  value={option.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Iconify
                    icon="radix-icons:check"
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === option.id ? 'opacity-100' : 'opacity-0'
                    )}
                  />

                  {option?.projectName || option?.taskName || option?.fullName}
                </CommandItem>
              ))
            ) : isLoading ? (
              <div>Loading...</div>
            ) : (
              <div className="w-full text-center py-4">
                No data {field.name}
              </div>
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default CustomCombobox;
