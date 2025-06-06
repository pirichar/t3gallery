import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // This is required to ensure the page is not cached

const mockUrls = [
  "https://mtt6p0kz3e.ufs.sh/f/ZU5aSpcmz7HhWAvuwvnHoOh7b6lxKXJYrzwBfjNcvLu0s3Zy",
  "https://mtt6p0kz3e.ufs.sh/f/ZU5aSpcmz7HhLAZS4TxOhx97yIMVnYZ8p60ocEvL5i3ktA4J",
  "https://mtt6p0kz3e.ufs.sh/f/ZU5aSpcmz7HhUIcNh0YfRBu2HFg13cfaqwlY8SLthVyexZ5X",
  "https://mtt6p0kz3e.ufs.sh/f/ZU5aSpcmz7HhlGNOuQLzKEI6xDjkZ5NXcHouA1TShq8VLapY",
  "https://mtt6p0kz3e.ufs.sh/f/ZU5aSpcmz7HhRkjbn46jyLSOF2s3Ad4plcx5abgtQ0MwNPkV",
  "https://mtt6p0kz3e.ufs.sh/f/ZU5aSpcmz7HhVJq9z8l3tjk4sH0FVnZhc15BdJ2Cf6eXYEiz",
  "https://mtt6p0kz3e.ufs.sh/f/ZU5aSpcmz7HhZlKOlwmz7Hh2B6OQitPlL4gfFYybqk18w5KN",
  "https://mtt6p0kz3e.ufs.sh/f/ZU5aSpcmz7Hh8NO1WWVqhI4w8YjzSWnOkVTi1BmRltcQ3MF5",
 ]

 const mockImages = mockUrls.map((url, index) => ({
    id : index + 1,
    url,
 }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>)
          )}
        {[...mockImages,...mockImages,...mockImages].map((image, index) =>(
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
