export interface InputProps {
	value: string;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (e: React.MouseEvent) => void;
}

const Input = ({ value, onChange, onClick, placeholder }: InputProps) => {
	return (
		<div className="bg-[#fff] p-[5px] rounded-[2px] w-full">
			<input
				type="text"
				placeholder={placeholder}
				className="bg-[#fff] p-[5px] border-[#E4E6F1] border-[1px] rounded-[2px] focus:outline-none w-full text-[#252A32] placeholder:text-[#252A32]"
				value={value}
				onChange={onChange}
				onClick={onClick}
			/>
		</div>
	);
};

export default Input;
