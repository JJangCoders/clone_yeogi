import Image from 'next/image';
export default function Header() {
	return (
		<div className="flex justify-between h-14 md:h-[75px] items-center px-5 md:px-10">
			<div className="w-20 md:w-[105px] h-[14px] md:h-[18px] relative cursor-pointer">
				<Image src="/logo.svg" alt={''} fill />
			</div>
			<div className="items-center hidden gap-4 md:flex">
				<p className="flex items-center h-10 px-3 cursor-pointer hover:text-color-112">
					이벤트
				</p>
				<p className="flex items-center h-10 px-3 cursor-pointer hover:text-color-112">
					고객센터
				</p>
				<div className="flex items-center h-10 gap-2 px-3 border rounded-full cursor-pointer rou">
					<Image src="/hamburger.svg" alt={''} width={20} height={20} />
					<div className="flex items-center justify-center w-6 h-6 rounded-full bg-color-214">
						<Image src="/person.svg" alt={''} width={18} height={18} />
					</div>
				</div>
			</div>
			<div className="md:hidden">
				<Image src="/hamburger.svg" alt={''} width={20} height={20} />
			</div>
		</div>
	);
}
