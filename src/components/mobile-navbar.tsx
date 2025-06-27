'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export default function MobileNavbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <nav className="flex md:hidden justify-between items-center w-full px-5 font-bold">
      <Link href="/">
        <Image
          src="/PocketTracerWhite.png"
          width={200}
          height={200}
          alt="Pocket Tracer Logo"
        />
      </Link>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger>
          <Menu color="#fff" />
        </SheetTrigger>

        <SheetContent className="bg-custom-gradient">
          <SheetHeader className="flex flex-col justify-between h-full">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <div>
              <ul className="justify-center flex flex-col gap-6 mt-6">
                <li>
                  <Link href="/" onClick={closeSheet}>
                    <SheetDescription>Home</SheetDescription>
                  </Link>
                </li>
                <li>
                  <Link href="/#about" onClick={closeSheet}>
                    <SheetDescription>About</SheetDescription>
                  </Link>
                </li>
                <li>
                  <Link href="/#features" onClick={closeSheet}>
                    <SheetDescription>Features</SheetDescription>
                  </Link>
                </li>
                <li>
                  <Link href="/#faqs" onClick={closeSheet}>
                    <SheetDescription>FAQs</SheetDescription>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 mb-6">
              <button>
                <Link href="/auth/login" onClick={closeSheet}>
                  <SheetDescription>Login</SheetDescription>
                </Link>
              </button>
              <button>
                <Link href="/auth/sign-up" onClick={closeSheet}>
                  <SheetDescription>SignUp</SheetDescription>
                </Link>
              </button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
