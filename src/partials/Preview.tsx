import { useSelector } from 'react-redux';
import RenderWidgets from '../components/widgetsPreview/RenderWidgets';
import { RootState } from '../lib/redux/store';

const Preview = () => {
	const widgets = useSelector(
		(state: RootState) => state.widgetActions.widgets,
	);

	return (
		<section className="flex flex-col gap-[30px] px-[25px] py-[30px]">
			{widgets.map(RenderWidgets)}
		</section>
	);
};

export default Preview;
