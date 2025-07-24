//app/page.tsx

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"; // This is required to ensure the page is not cached

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48 h-48 flex-col pb-2">
          <Link href={`/img/${image.id}`} passHref>
            <Image 
            src={image.url}
            style={{objectFit: "contain"}}
            width={192}
            height={192}
            alt="{image.name}
            "/>
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {

  return (
    <main className="">

      <SignedOut>
        <div className="h-full w-full text-2xl text-center">
          Please sign in above
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
      
    </main>
  );
}
