import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CardIssue } from '@/components/issue-manager/card-issue';
import { ComboboxDemo } from '@/components/custom-command';

const IssueFields = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-8 gap-20">
        <h2 className="sm:col-span-1 md:col-span-5 text-3xl">Title Bug</h2>
      </div>
      <div className="grid sm:grid-cols-1  md:grid-cols-8 gap-20 p-4">
        <section className="sm:col-span-1 md:col-span-5">
          {/* input string */}

          <Input
            placeholder="string"
            className="outline-none focus:outline-none"
          />

          {/* Content Bug  */}

          <div className="grid pt-8  w-full gap-1.5">
            <Label htmlFor="contentBug" className="my-2 text-xl">
              Content Bug
            </Label>
            <Textarea style={{ height: '120px' }} id="contentBug" />
          </div>

          {/* upload File */}

          <div className="flex justify-center w-full mt-5 p-[5px_20px] border-dashed border-2 rounded-xl  h-[150px] bg-[#fafafa]  items-center gap-1.5">
            <div className="max-w-sm">
              <Input id="picture" type="file" />
            </div>
          </div>

          {/* Content Fix */}

          <div className="grid pt-8  w-full gap-1.5">
            <Label htmlFor="contentBug" className="my-2 text-xl">
              Content Fix
            </Label>
            <Textarea
              placeholder="string"
              style={{ height: '120px' }}
              id="contentBug"
            />
          </div>
          <div></div>
        </section>
        <div className="sm:col-span-1 md:col-span-3">
          <ComboboxDemo />
          <CardIssue />
        </div>
      </div>
    </>
  );
};

export default IssueFields;