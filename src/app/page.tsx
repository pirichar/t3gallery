import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) =>(
          <div key={image.url} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
