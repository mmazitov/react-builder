import DefaultImage from '../../assets/image-preview.jpg';
import { Widget } from '../../types/index';
import PreviewButton from './PreviewButton';
import PreviewHeadline from './PreviewHeadline';
import PreviewImage from './PreviewImage';
import PreviewParagraph from './PreviewParagraph';

const RenderWidgets = (widget: Widget) => {
	switch (widget.id.split('-')[0]) {
		case 'headline':
			return (
				<PreviewHeadline key={widget.id}>
					{widget.value || 'Default Headline'}
				</PreviewHeadline>
			);
		case 'paragraph':
			return (
				<PreviewParagraph key={widget.id}>
					{widget.value || 'Default Paragraph'}
				</PreviewParagraph>
			);
		case 'image':
			return (
				<PreviewImage
					key={widget.id}
					src={widget.value || DefaultImage}
					alt="Image preview"
				/>
			);
		case 'button':
			return (
				<PreviewButton key={widget.id}>
					{widget.value || 'Default Button'}
				</PreviewButton>
			);
		default:
			return null;
	}
};

export default RenderWidgets;
