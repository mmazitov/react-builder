import { BsFillTrashFill } from 'react-icons/bs';
import { IoMdArrowDown, IoMdArrowUp } from 'react-icons/io';
import { VscMultipleWindows } from 'react-icons/vsc';

interface ActionBarProps {
	onRemove: () => void;
	onMoveUp: () => void;
	onMoveDown: () => void;
	onClone: () => void;
}

const ActionBar = ({
	onRemove,
	onMoveUp,
	onMoveDown,
	onClone,
}: ActionBarProps) => {
	const btnClasses =
		'bg-inherit hover:bg-[#4B97B8] w-[21px] aspect-[1] flex items-center justify-center rounded-[2px] transition-colors duration-300 ease-in-out text-[#fff] cursor-pointer';
	return (
		<div className="flex gap-[5px]">
			<ul className="flex gap-[5px] bg-[#449CF4] p-[3px] rounded-[6px_6px_0_0]">
				<li>
					<button
						type="button"
						className={`${btnClasses} hover:bg-[#68C2E9]`}
						onClick={onMoveUp}
					>
						<IoMdArrowUp size={12} />
					</button>
				</li>
				<li>
					<button
						type="button"
						className={`${btnClasses} hover:bg-[#68C2E9]`}
						onClick={onMoveDown}
					>
						<IoMdArrowDown size={12} />
					</button>
				</li>
			</ul>
			<ul className="flex gap-[5px] bg-[#68C2E9] p-[3px] rounded-[6px_6px_0_0]">
				<li>
					<button type="button" className={`${btnClasses}`} onClick={onClone}>
						<VscMultipleWindows size={12} />
					</button>
				</li>
				<li>
					<button type="button" className={`${btnClasses}`} onClick={onRemove}>
						<BsFillTrashFill size={12} />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default ActionBar;
