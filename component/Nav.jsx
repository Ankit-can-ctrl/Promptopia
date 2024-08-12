"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SignIn, SignOut, useSession, getProviders } from "next-auth/react";
function Nav() {
  return (
    <nav className="  w-full">
      <Link href="/">
        <Image
          src="/utils/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </Link>
    </nav>
  );
}

export default Nav;
