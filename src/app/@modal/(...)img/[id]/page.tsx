import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const idAsNumber = Number((await params).id);
  if (isNaN(idAsNumber)) {
    throw new Error("Invalid image ID");
  } 
  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}