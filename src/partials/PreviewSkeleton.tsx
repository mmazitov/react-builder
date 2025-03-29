import { useSelector } from 'react-redux';
import WidgetSkeleton from '../components/WidgetSkeleton';
import { RootState } from '../lib/redux/store';

const PreviewSkeleton = () => {
	const widgets = useSelector(
		(state: RootState) => state.widgetActions.widgets || [],
	);
	return (
		<section className="flex flex-col gap-[15px] bg-[#f6f3fd] px-[25px] py-[30px]">
			{widgets.length === 0 ? (
				<p className="font-bold text-[#252A32] text-[22px] text-center">
					No widgets added yet
				</p>
			) : (
				widgets.map((widget, index) => (
					<WidgetSkeleton key={index} widget={widget} />
				))
			)}
		</section>
	);
};

export default PreviewSkeleton;
