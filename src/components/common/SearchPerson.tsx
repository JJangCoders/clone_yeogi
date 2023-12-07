import React from 'react';
import Image from 'next/image';
export default function SearchPerson() {
	return (
		<div className="flex items-center h-12 gap-2 pl-4 pr-5 rounded-lg cursor-pointer bg-neutral-100">
			<div>
				<Image src="/search.svg" alt={''} width={20} height={20} />
			</div>
			<span className="text-color-194">인원 2</span>
		</div>
	);
}
