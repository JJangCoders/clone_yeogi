import React from 'react';

import Image from 'next/image';
export default function SearchPlace() {
	return (
		<div className="flex items-center h-12 gap-2 pl-4 pr-5 rounded-lg bg-neutral-100 active:bg-white">
			<div>
				<Image src="/search.svg" alt={''} width={20} height={20} />
			</div>
			<input
				type="text"
				placeholder="여행지나 숙소를 검색해보세요"
				className="w-full bg-transparent text-color-194"
			/>
		</div>
	);
}
