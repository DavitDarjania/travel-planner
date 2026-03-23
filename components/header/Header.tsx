"use client";
import React from "react";
// import Button from '../button/page'
// import HeaderLogo from './header_logo/page'

import Button from "../button/Button";
import HeaderLogo from "./headerLogo/HeaderLogo";
// import Card from '../card/page'
import Card from "../card/Card";
// import { usePathname } from 'next/navigation'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
interface IHeader {
  isMain: boolean;
  onOpen?: () => void;
}

const Header: React.FC<IHeader> = ({ isMain = false, onOpen }) => {
  // const path = usePathname()
  const pathname = usePathname();
  const router = useRouter();

  const handleSideBarAndRoute = () => {
    if (pathname === "/plan-page" && !!onOpen) {
      onOpen();
    } else {
      router.push("/plan-page");
    }
  };

  return (
    // there is two types of headers, landing page header and sticky header which is available for main page
    // we can conditionally have classes for each header

    // sticky top-0 z-40
    <header
      className={`${isMain ? "bg-white shadow-sm ticky top-0 z-40" : "bg-white shadow-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <HeaderLogo />

          {/* <Link href={`${isMain ? '/plan_page' : ''}`}> */}
          <Button
            variant="primary"
            content="Plan a trip"
            onClick={handleSideBarAndRoute}
          />
          {/* </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
