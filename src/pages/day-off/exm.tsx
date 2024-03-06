import {
    Table,
    TableRow,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
  } from '@/components/ui/table';
  import { Card, CardContent, CardHeader } from '@/components/ui/card';
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
  import { AlertDialogDemo } from './components/dialog';
  
  function DayOff() {
    return (
      <Card>
        <Tabs defaultValue="abence-request">
          <CardHeader className="block">
            <TabsList>
              <TabsTrigger value="abence-request">Absence Request</TabsTrigger>
              <TabsTrigger value="approved-or-rejected-leave">
                Approved or Rejected Leave
              </TabsTrigger>
            </TabsList>
          </CardHeader>
          <CardContent>
            <TabsContent value="abence-request" className="grid gap-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Banking Name</TableHead>
                    <TableHead>Account Name</TableHead>
                    <TableHead>Account Number</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Note</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Vietcombank</TableCell>
                    <TableCell>Vu Van Dat</TableCell>
                    <TableCell>1012876779</TableCell>
                    <TableCell>On</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="approved-or-rejected-leave">
              <AlertDialogDemo />
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    );
  }
  
  export default DayOff;
  

