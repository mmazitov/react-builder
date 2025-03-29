import { useDispatch, useSelector } from 'react-redux';
import {
	cloneWidget,
	moveWidget,
	removeWidget,
	setActiveWidget,
	updateWidgetValue,
} from '../lib/redux/slices/widgetActionsSlice';
import { RootState } from '../lib/redux/store';
import ActionBar from './ActionBar';
import Input from './UI/Input';

interface WidgetSkeletonProps {
	widget: {
		id: string;
		icon: string;
		title: string;
		value: string;
	};
}

const WidgetSkeleton = ({ widget }: WidgetSkeletonProps) => {
	const dispatch = useDispatch();
	const activeWidgetId = useSelector(
		(state: RootState) => state.widgetActions.activeWidgetId,
	);

	const isActive = activeWidgetId === widget.id;

	const handleActive = () => {
		dispatch(setActiveWidget(isActive ? null : widget.id));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateWidgetValue({ widgetId: widget.id, value: e.target.value }));
	};

	const handleRemove = () => {
		dispatch(removeWidget(widget.id));
	};

	const handleMoveUp = () => {
		dispatch(moveWidget({ widgetId: widget.id, direction: 'up' }));
	};

	const handleMoveDown = () => {
		dispatch(moveWidget({ widgetId: widget.id, direction: 'down' }));
	};

	const handleClone = () => {
		dispatch(cloneWidget(widget.id));
	};

	const handleInputClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<div className="relative">
			<article
				className={`widget widget-skeleton ${isActive ? 'active' : ''}`}
				onClick={handleActive}
			>
				<div className="widget-icon">
					<img src={widget.icon} alt={`${widget.title} icon`} />
				</div>
				<h3 className="widget-title">{widget.title}</h3>
				{isActive && (
					<Input
						value={widget.value || ''}
						onChange={handleChange}
						onClick={handleInputClick}
						placeholder={`Enter ${widget.title.toLowerCase()}`}
					/>
				)}
			</article>
			{isActive && (
				<div className="top-[-27px] right-[10px] absolute">
					<ActionBar
						onRemove={handleRemove}
						onMoveUp={handleMoveUp}
						onMoveDown={handleMoveDown}
						onClone={handleClone}
					/>
				</div>
			)}
		</div>
	);
};

export default WidgetSkeleton;
