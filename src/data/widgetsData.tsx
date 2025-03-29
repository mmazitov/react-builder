import ButtonIco from '../assets/icons/button.svg';
import HeadlineIco from '../assets/icons/headline.svg';
import ImageIco from '../assets/icons/image.svg';
import ParagraphIco from '../assets/icons/paragraph.svg';

export interface WidgetDataProps {
	id: string;
	icon: string;
	title: string;
	value?: string;
}

const WIDGETS_DATA: WidgetDataProps[] = [
	{
		id: 'headline',
		icon: HeadlineIco,
		title: 'Headline',
	},
	{
		id: 'paragraph',
		icon: ParagraphIco,
		title: 'Paragraph',
	},
	{
		id: 'image',
		icon: ImageIco,
		title: 'Image',
	},
	{
		id: 'button',
		icon: ButtonIco,
		title: 'Button',
	},
];

export default WIDGETS_DATA;
