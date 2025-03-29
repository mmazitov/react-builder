export interface ButtonProps {
	children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
	return (
		<button className="bg-[#4368E0] hover:bg-[#4368e0c0] mx-auto p-[10px] rounded-[4px] w-auto min-w-[145px] font-medium text-[#fff] text-[14px] text-center transition-colors ease-in-out delay-300 cursor-pointer">
			{children}
		</button>
	);
};

export default Button;
