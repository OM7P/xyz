import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../components/ui/table"
import { PaginationP } from "./pagination"
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
      status:"pending"
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
      status:"Success"

    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
      status:"Rejected"

    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
      status:"pending"

    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
      status:"Success"

    }
  ]
  
  export function TableDemo() {
    return (
        <div  className="ml-[300px] relative w-[900px] !top-[170px] h-[300px]  bg-slate-100">
                <p className="ml-5 p-2 text-[20px]">
            Approval
            </p>
            <Table className="!h-[10px]">
              {/* <TableCaption className="absolute h-[100px]">A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow className="font-bold text-[15px]">
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right ">{invoice.status}</TableCell>
                    <TableCell className="text-right ">{invoice.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  {/* <PaginationP className="flex justify-center items-center absolute"/> */}
                </TableRow>
              </TableFooter>
            </Table>
        </div>
          )
  }
  