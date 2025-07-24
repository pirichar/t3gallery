import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {

	const image = await getImage(props.id);

	const clerk = await clerkClient();
	const uploaderInfo = await clerk.users.getUser(image.userId);

	
	return (
		<div className="flex w-full h-full min-w-0">
			<div className="flex-shrink flex justify-center items-center">
				<img src={image.url} className="object-contain" />
			</div>

			<div className="w-48 flex flex-col flex-shrink-0 border-l">
				<div className="text-lg border-b text-center p-2 truncate">{image.name}</div>

				<div className="p-2 flex flex-col">
					<span>Uploaded by</span>
					<span>{uploaderInfo.fullName}</span>
				</div>

				<div className="p-2 flex flex-col">
					<span>Created on</span>
					<span>{new Date(image.createdAt).toLocaleDateString()}</span>
				</div>

			</div>
		</div>
	);
}