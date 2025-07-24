import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const idAsNumber = Number((await params).id);
  if (isNaN(idAsNumber)) {
    throw new Error("Invalid image ID");
  } 
  return (
      <FullPageImageView id={idAsNumber} />
  );
}