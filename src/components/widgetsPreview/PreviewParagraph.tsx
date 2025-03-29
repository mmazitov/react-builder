import React from 'react';

export interface PreviewParagraphProps {
	key: string;
	children: string;
}

const PreviewParagraph = React.memo(
	({ key, children }: PreviewParagraphProps) => {
		return (
			<p
				key={key}
				className="text-[#97AACD] text-[14px] text-center leading-[150%]"
			>
				{children}
			</p>
		);
	},
);

export default PreviewParagraph;
