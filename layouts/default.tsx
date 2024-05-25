import { Link } from "@nextui-org/react";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="font-sweetRegular w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://github.com/YorickVdVenne"
          title="Yorick's GitHub profile"
        >
          <span className="text-custom-dark-green">Made by</span>
          <p className="text-custom-dark-green">Yorick</p>
        </Link>
      </footer>
    </div>
  );
}
