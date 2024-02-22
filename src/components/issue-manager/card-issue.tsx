import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import { ComboboxDemoIssue } from './combox-issue';
import { DatePickeIssue } from './date-issue';

export function CardIssue() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-semibold">Details</CardTitle>
        <CardDescription className="sm:pb-2 sm:inline-block md:mb-0">
          Card Description
        </CardDescription>
      </CardHeader>
      <CardContent className="grid sm:grid-cols-1  md:grid-cols-3 items-center">
        <CardDescription className="sm:pb-2 sm:inline-block md:mb-0">
          Project Id
        </CardDescription>
        <div className="col-span-2 ">
          <ComboboxDemoIssue />
        </div>
      </CardContent>
      <CardContent className="grid sm:grid-cols-1  md:grid-cols-3 items-center">
        <CardDescription className="sm:pb-2 sm:inline-block md:mb-0">
          Task Id
        </CardDescription>
        <div className="col-span-2 ">
          <ComboboxDemoIssue />
        </div>
      </CardContent>
      <CardContent className="grid sm:grid-cols-1  md:grid-cols-3 items-center">
        <CardDescription className="sm:pb-2 sm:inline-block md:mb-0">
          Rewiever
        </CardDescription>
        <div className="col-span-2 ">
          <ComboboxDemoIssue />
        </div>
      </CardContent>
      <CardContent className="grid sm:grid-cols-1  md:grid-cols-3 items-center">
        <CardDescription className="sm:pb-2 sm:inline-block md:mb-0">
          Asigne
        </CardDescription>
        <div className="col-span-2 ">
          <ComboboxDemoIssue />
        </div>
      </CardContent>
      <CardContent className="grid sm:grid-cols-1  md:grid-cols-3 items-center">
        <CardDescription></CardDescription>
        <div className="col-span-2 ">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Notification to assigne
            </label>
          </div>
        </div>
      </CardContent>
      <CardContent className="grid mt-10 sm:grid-cols-1  md:grid-cols-3 items-center">
        <CardDescription>Rewiev Date</CardDescription>
        <div className="col-span-2 ">
          <div className="flex items-center space-x-2">
            <DatePickeIssue />
          </div>
        </div>
      </CardContent>

      <CardContent className="grid sm:grid-cols-1  md:grid-cols-3 items-center">
        <CardDescription>Reason</CardDescription>

        <div className="col-span-2 ">
          <div className="flex items-center space-x-2">
            <ComboboxDemoIssue />
          </div>
        </div>
      </CardContent>
      <CardContent className="grid sm:grid-cols-1  md:grid-cols-3 items-center">
        <CardDescription>Bug repeat</CardDescription>

        <div className="col-span-2 ">
          <div className="flex items-center space-x-2">
            <Input value={0} className=" text-center w-[65px] bg-gray-200" />
            <p className="text-[]18px">Bug Code</p>
            <Input value={0} className=" w-[115px] text-center bg-gray-200" />
          </div>
        </div>
      </CardContent>
      <CardContent className="grid  grid-cols-3 items-center">
        <CardDescription>Rewiev Date</CardDescription>
        <div className="col-span-2 ">
          <div className="flex items-center space-x-2">
            <DatePickeIssue />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}