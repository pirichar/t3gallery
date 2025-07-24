"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "~/utils/uploadthing";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
	const $ut = useUploadThing(...args);

	const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;

		const selectedFiles = Array.from(e.target.files);
		const result = await $ut.startUpload(selectedFiles);

		console.log("uploaded files", result);
		// TODO: persist result in state maybe?
	};

	return {
		inputProps: {
			onChange,
			multiple: ($ut.routeConfig?.image?.maxFileCount ?? 1) > 1,
			accept: "image/*",
		},
		isUploading: $ut.isUploading,
	};
};

function UploadSvg() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
		</svg>
	);
}
export function SimpleUploadButton() {
	const router = useRouter();
	const { inputProps } = useUploadThingInputProps("imageUploader", {
		onClientUploadComplete: () => {
			router.refresh();
		},
		onUploadError: (error) => {
			console.error("Upload failed:", error);
			alert("Upload failed. Please try again.");
		},
	});

	return (
		<div>
			<label htmlFor="upload-button" className="cursor-pointer">
				<UploadSvg />
			</label>
			<input
				id="upload-button"
				type="file"
				className="sr-only"
				{...inputProps}
			/>
		</div>
	);

}

