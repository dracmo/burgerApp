"use client";

import React from "react";
import Link from "next/link";
import { Typography } from "@/components/lib/Typography";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";

const Header = () => {
  return (
    <header className="flex border-b-[1px] items-center px-5 border-b-stone-200 w-full pb-4">
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
        <Button variant="outline" className="inline-flex items-center gap-2">
          <p className="text-xs font-semibold">0</p>
          <ShoppingBasket size={12} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
