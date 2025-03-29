import React from 'react';

export interface PreviewHeadlineProps {
	key: string;
	children: string;
}

const PreviewHeadline = React.memo(
	({ key, children }: PreviewHeadlineProps) => {
		return (
			<h2
				key={key}
				className="font-bold text-[#252A32] text-[22px] text-center"
			>
				{children}
			</h2>
		);
	},
);

export default PreviewHeadline;
