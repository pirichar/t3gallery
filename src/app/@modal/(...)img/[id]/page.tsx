import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const idAsNumber = Number((await params).id);
  if (isNaN(idAsNumber)) {
    throw new Error("Invalid photo ID");
  }
  const image = await getImage(idAsNumber);
  return <div><img src={image.url} className="w-96"/></div>;
}