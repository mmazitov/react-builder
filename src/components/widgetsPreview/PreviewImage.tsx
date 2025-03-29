import React from 'react';

export interface PreviewImageProps {
	src: string;
	key: string;
	alt: string;
}
const PreviewImage = React.memo(({ key, src, alt }: PreviewImageProps) => {
	return (
		<div>
			<img
				key={key}
				src={src}
				alt={alt}
				className="rounded-[4px] w-full h-[230px] object-cover"
			/>
		</div>
	);
});

export default PreviewImage;
