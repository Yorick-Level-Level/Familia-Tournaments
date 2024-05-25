import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className="font-nexa text-4xl text-custom-dark-green font-bold text-center">
          Familia Toernooien
        </h1>
        <p className="font-sweetBold text-custom-dark-green text-lg text-center">
          De website voor het organiseren van toernooien binnen de familia.
        </p>
        <h2 className="font-sweetBold text-2xl text-custom-brown font-bold text-center mt-8">
          Toernooien Archief
        </h2>
        <div className="w-1/2">
          <Table isStriped aria-label="Toernooien Archief">
            <TableHeader className="bg-red-500">
              <TableColumn>TOERNOOI</TableColumn>
              <TableColumn>JAAR </TableColumn>
              <TableColumn>WINNAAR</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Padel</TableCell>
                <TableCell>2023</TableCell>
                <TableCell>Yorick</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>?</TableCell>
                <TableCell>2024</TableCell>
                <TableCell>?</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <Button size="md" color="success" variant="solid">
            Test
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
