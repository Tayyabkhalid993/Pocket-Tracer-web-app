'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type ScrollLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  closeSheet?: () => void;
};

const ScrollLink = ({ href, children, className, closeSheet }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.history.pushState(null, '', href);
      if (closeSheet) {
        closeSheet();
      }
    }
  };

  return (
    <Link href={href} onClick={href.startsWith('#') ? handleClick : closeSheet} className={className}>
      {children}
    </Link>
  );
};

export const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  // Debug pathname
  console.log('Current pathname:', pathname);

  // Normalize pathname to handle trailing slashes or query params
  const normalizedPathname = pathname.split('?')[0].replace(/\/$/, '');
  const isWhiteBackgroundPage = ['/auth/login', '/auth/sign-up'].includes(normalizedPathname);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  // Conditional text color
  const textClass = isWhiteBackgroundPage ? 'text-gray-900' : 'text-white';
  const hoverClass = isWhiteBackgroundPage ? 'hover:text-gray-600' : 'hover:text-gray-300';

  // Conditional logo
  const logoSrc = isWhiteBackgroundPage ? '/PocketTracerDark.png' : '/PocketTracerWhite.png';

  // Conditional menu icon color
  const menuColor = isWhiteBackgroundPage ? '#000' : '#fff';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} backdrop-blur-lg bg-white/10 border-b border-white/10 shadow-sm`}>
      {/* Desktop Navigation */}
      <nav className="justify-between items-center w-full px-5 font-bold hidden md:flex">
        <Link href="/">
          <Image src={logoSrc} width={200} height={200} alt="Pocket Tracer Logo" />
        </Link>
        <div>
          <ul className="flex justify-center items-center gap-3">
            <li>
              <ScrollLink href="/" className={`underline-text ${textClass} ${hoverClass}`}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink href="/#about" className={`underline-text ${textClass} ${hoverClass}`}>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink href="/#features" className={`underline-text ${textClass} ${hoverClass}`}>
                Features
              </ScrollLink>
            </li>
            <li>
              <ScrollLink href="/#faqs" className={`underline-text ${textClass} ${hoverClass}`}>
                FAQs
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-3">
          <Link className={`underline-text ${textClass} ${hoverClass}`} href="/auth/login">
            LogIn
          </Link>
          <Link className={`underline-text ${textClass} ${hoverClass}`} href="/auth/sign-up">
            SignUp
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="justify-between flex items-center w-full px-5 font-bold md:hidden">
        <Link href="/">
          <Image src={logoSrc} width={200} height={200} alt="Pocket Tracer Logo" />
        </Link>
        
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button aria-label="Open menu">
              <Menu color={menuColor} />
            </button>
          </SheetTrigger>
          <SheetContent className={`bg-custom-gradient ${textClass}`}>
            <SheetHeader className="flex flex-col justify-between h-full">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div>
                <ul className="justify-center flex flex-col gap-6 mt-6">
                  <li>
                    <ScrollLink href="/" className={`underline-text ${hoverClass}`} closeSheet={closeSheet}>
                      <SheetDescription className={textClass}>Home</SheetDescription>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink href="/#about" className={`underline-text ${hoverClass}`} closeSheet={closeSheet}>
                      <SheetDescription className={textClass}>About</SheetDescription>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink href="/#features" className={`underline-text ${hoverClass}`} closeSheet={closeSheet}>
                      <SheetDescription className={textClass}>Features</SheetDescription>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink href="/#faqs" className={`underline-text ${hoverClass}`} closeSheet={closeSheet}>
                      <SheetDescription className={textClass}>FAQs</SheetDescription>
                        </ScrollLink >
                    </li>
                  </ul>
              </div>
              <div className="flex flex-col gap-6 mb-6">
                <Link className={`underline-text ${hoverClass}`} href="/auth/login" onClick={closeSheet}>
                  <SheetDescription className={textClass}>Login</SheetDescription>
                </Link>
                <Link className={`underline-text ${hoverClass}`} href="/auth/sign-up" onClick={closeSheet}>
                  <SheetDescription className={textClass}>SignUp</SheetDescription>
                </Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};