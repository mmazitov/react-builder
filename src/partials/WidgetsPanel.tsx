import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; // Импортируем библиотеку для генерации уникальных ID
import WIDGETS_DATA, { WidgetDataProps } from '../data/widgetsData';
import { addWidget } from '../lib/redux/slices/widgetActionsSlice';

const WidgetsPanel = () => {
	const dispatch = useDispatch();

	const handleAdd = (widget: WidgetDataProps) => {
		const widgetWithUniqueId = {
			...widget,
			id: `${widget.id}-${uuidv4()}`,
			value: '',
		};
		dispatch(addWidget(widgetWithUniqueId));
	};

	return (
		<aside className="p-[30px] w-[270px]" role="complementary">
			<ul className="flex flex-wrap gap-[10px]">
				{WIDGETS_DATA.map((widget) => (
					<li
						key={widget.id}
						className="widget"
						onClick={() => handleAdd(widget)}
					>
						<div className="widget-icon">
							<img src={widget.icon} />
						</div>
						<h3 className="widget-title">{widget.title}</h3>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default WidgetsPanel;
