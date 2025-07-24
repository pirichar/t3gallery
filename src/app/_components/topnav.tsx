// app/_components/topnav.tsx
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";
import Link from "next/link";

export function TopNav() {

  return (
    <nav className="flex items-center justify-between w-full p-4 text-xl 
                  font-semibold border-b h-fit">
      <Link href="/">
        <div>Gallery</div>
      </Link>
      <div className="flex flex-row gap-4 items-center pr-5 pl-5">
        <SignedOut>
          <SignInButton mode="modal">
            <span className="cursor-pointer pr-6">
              Sign In
            </span>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}