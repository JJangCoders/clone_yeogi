import React, { useRef } from 'react';
import Image from 'next/image';
import SearchForm from './Search/SearchForm';

export default function SearchSection() {
	return (
		<section className="relative flex w-full h-256pxr md:h-528pxr">
			<div className="z-10 flex flex-col justify-end w-full h-full px-5 mx-auto pb-14 md:px-10 md:pb-16 max-w-7xl">
				<h1 className="mb-6 text-2xl font-bold leading-10 text-white md:text-32pxr">
					<span>국내부터 해외까지</span>
					<br />
					<span>여행할때 여기어때</span>
				</h1>
				<SearchForm />
			</div>
			<Image
				src="https://www.yeogi.com/_next/image?url=https%3A%2F%2Fstatic.yeogi.com%2F_next%2Fstatic%2Fmedia%2F04_Kv_PC_Light.5cb5d4db.png&w=1080&q=100"
				fill
				alt=""
				className="z-0 object-cover object-center"
			/>
		</section>
	);
}
