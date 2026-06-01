'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ROUTES } from '@/constants/route';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import NavLinks from './NavLinks';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="invert-colors sm:hidden cursor-pointer">
          <Image
            src={'/icons/hamburger.svg'}
            width={36}
            height={36}
            alt="Menu"
          />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="px-4 background-light900_dark200 border-none"
      >
        <SheetTitle>
          <VisuallyHidden.Root>Navigation</VisuallyHidden.Root>
        </SheetTitle>
        <SheetDescription>
          <VisuallyHidden.Root>Mobile navigation menu</VisuallyHidden.Root>
        </SheetDescription>
        <Link className=" flex items-center gap-1" href={ROUTES.HOME}>
          <Image
            src={'/images/site-logo.svg'}
            width={23}
            height={23}
            alt="logo"
          />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 ">
            Dev <span className="text-primary-500">Flow</span>
          </p>
        </Link>
        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto ">
          <SheetClose>
            <section className="flex h-full flex-col gap-4 pt-16">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>
          <div className="flex flex-col gap-3 pb-4">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light500 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  Sign up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
