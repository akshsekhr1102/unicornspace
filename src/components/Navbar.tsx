// import { CornerDownRight } from "lucide-react";
import React from "react";
import StyledButton from "./StyledButton";
import { ArrowDownIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between max-w-screen-xl px-4 py-5 mx-auto border-b border-zinc-700 bg-background">
        <Link
          href={"/"}
          className="text-[1rem] tracking-tight selection:bg-red-800 leading-none group hover:select-text group flex items-center"
        >
          <Image
            src={"/logo-white-256x256.png"}
            className="mb-1"
            alt="logo"
            width={30}
            height={30}
          />
          <span className="">U</span>nicorn
          <span className="outlineText">
            <span className="ease-in ">S</span>pace
          </span>
        </Link>
        <nav className="items-center hidden gap-5 text-sm md:flex font-satori-300">
          <Link
            className="hover:scale-105 hover:underline-offset-auto hover:underline"
            href="/"
          >
            <Button  variant={"link"}>Home</Button>
          </Link>
          {/* <Separator orientation="vertical" className="bg-primary"></Separator> */}
          <Link
            className="hover:scale-105 hover:underline-offset-auto hover:underline"
            href="/pricing"
          >
            <Button className="-ml-5" variant={"link"}>Pricing</Button>
          </Link>
        </nav>
        <StyledButton className="flex items-center gap-1 btn-primary group">
          GetStarted <ArrowTopRightIcon className="group-hover:translate-x-px" />
        </StyledButton>
      </header>
      {/* <hr className="h-px max-w-screen-xl mx-auto my-2 border-0 bg-zinc-700 " /> */}
    </>
  );
};

export default Navbar;