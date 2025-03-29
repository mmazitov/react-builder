import React from 'react';
import Button from '../UI/Button';

export interface PreviewButtonProps {
	key: string;
	children: string;
}

const PreviewButton = React.memo(({ key, children }: PreviewButtonProps) => {
	return <Button key={key}>{children}</Button>;
});

export default PreviewButton;
