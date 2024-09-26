"use client";

import React from "react";
import Link from "next/link";
import { Typography } from "@/components/lib/Typography";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex border-t-[1px] items-center px-5 border-t-stone-200 w-full pt-4">
      <Link href="/" className="inline-flex items-center gap-2 mr-auto ">
        <Image
          src="/images/healthdonals.png"
          alt="healthdonald"
          width={32}
          height={32}
        />
        <Typography variant="h1">Burger App</Typography>
      </Link>
      <div className="ml-auto ">
        <p className="text-[5px]">© 2024 Burger App. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
