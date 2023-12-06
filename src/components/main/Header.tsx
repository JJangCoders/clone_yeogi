import Image from 'next/image';
export default function Header() {
	return (
		<div className="flex justify-between h-14 md:h-[75px] items-center px-5 md:px-10">
			<div className="w-20 md:w-[105px] h-[14px] md:h-[18px] relative cursor-pointer">
				<Image src="/logo.svg" alt={''} fill />
			</div>
			<div className="hidden md:flex gap-4 items-center">
				<p className="px-3 h-10 flex items-center cursor-pointer hover:text-color-112">
					이벤트
				</p>
				<p className="px-3 h-10 flex items-center cursor-pointer hover:text-color-112">
					고객센터
				</p>
				<div className="flex gap-2 rou px-3 rounded-full border h-10 items-center cursor-pointer">
					<Image src="/hamburger.svg" alt={''} width={20} height={20} />
					<div className="bg-color-214 rounded-full w-6 h-6 flex items-center justify-center">
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
