'use client';
import { SIDEBAR_LINKS } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SheetClose } from '../ui/sheet';
import React from 'react';

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {SIDEBAR_LINKS.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;

        const LinkComponent = (
          <Link
            key={link.label}
            href={link.route}
            className={cn(
              isActive
                ? 'primary-gradient rounded-lg text-light-900'
                : 'text-dark300_light900',
              'flex items-center justify-start gap-4 bg-transparent p-4'
            )}
          >
            <Image
              src={link.imageURL}
              alt={link.label}
              width={20}
              height={20}
            />
            <p
              className={cn(
                isActive ? 'base-bold' : 'base-medium',
                !isMobileNav && 'max-lg:hidden'
              )}
            >
              {link.label}
            </p>
          </Link>
        );
        return isMobileNav ? (
          <SheetClose asChild key={link.route}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={link.route}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
