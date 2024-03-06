import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function BankingInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Banking Info</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}

export default BankingInfo;
