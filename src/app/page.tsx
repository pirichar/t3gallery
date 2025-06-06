import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // This is required to ensure the page is not cached

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">

        {[...images,...images,...images].map((image, index) =>(
          <div key={image.id + "-" + index} className="w-48 flex-col">
            <img src={image.url} />
            <div>
              <p className="text-sm">{image.name}</p>
              </div>
          </div>
        ))}
      </div>
    </main>
  );
}
