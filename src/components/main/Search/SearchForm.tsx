'use client';
import React from 'react';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import SearchDate from '@/components/common/SearchDate';
import SearchPerson from '@/components/common/SearchPerson';
import SearchPlace from '@/components/common/SearchPlace';
import SearchPlaceModal from './SearchPlaceModal';
export default function SearchForm() {
	const [selectedCategory, setSelectedCategory] = useState('domestic');
	const placeModalRef = useRef<HTMLDivElement | null>(null);

	const getLeftValue = () => {
		return selectedCategory === 'domestic' ? '0' : '115px';
	};
	const [openedModal, setOpenedModal] = useState('');
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				placeModalRef.current &&
				!placeModalRef.current.contains(e.target as Node)
			) {
				setOpenedModal('');
			}
		};

		// 컴포넌트가 마운트될 때 window에 이벤트 리스너 추가
		window.addEventListener('click', handleClickOutside);

		// 컴포넌트가 언마운트될 때 이벤트 리스너 제거
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);
	return (
		<div>
			{/* 큰 화면 */}
			<div className="z-10 flex-col hidden w-full mx-auto bg-white gap-16pxr px-20pxr pt-8pxr pb-20pxr rounded-2xl md:flex">
				<div className="w-full border-b border-neutral-100">
					<div className="relative flex items-center w-full gap-6 h-52pxr">
						<p
							className={`text-base cursor-pointer px-16pxr ${
								selectedCategory === 'domestic'
									? 'text-blue-500'
									: 'text-color-112'
							}`}
							onClick={() => setSelectedCategory('domestic')}
						>
							국내 숙소
						</p>
						<p
							className={`text-base cursor-pointer px-16pxr ${
								selectedCategory === 'global'
									? 'text-blue-500'
									: 'text-color-112'
							}`}
							onClick={() => setSelectedCategory('global')}
						>
							해외 숙소
						</p>
						<div
							className="absolute bottom-0 bg-color-light-blue h-2pxr w-91pxr"
							style={{
								left: getLeftValue(),
								transition: 'left 0.3s ease',
							}}
						/>
					</div>
				</div>
				<div className="w-full">
					<div className="flex w-full h-full gap-2">
						<div
							onClick={(e) => {
								e.stopPropagation();
								setOpenedModal('place');
							}}
							className="relative basis-1/2"
						>
							<SearchPlace />
							{openedModal === 'place' && (
								<div ref={placeModalRef}>
									<SearchPlaceModal />
								</div>
							)}
						</div>
						<div className="basis-1/4">
							<SearchDate />
						</div>
						<div className="basis-1/4">
							<SearchPerson />
						</div>
						<div className="flex items-center justify-center text-white rounded-lg bg-color-light-blue h-48pxr text-16pxr min-w-[120px]">
							검색
						</div>
					</div>
				</div>
			</div>
			{/* 작은 화면 */}
			<div className="relative flex items-center w-full h-12 gap-2 pl-4 pr-5 bg-white rounded-lg cursor-pointer md:hidden">
				<div>
					<Image src="/search.svg" alt={''} width={20} height={20} />
				</div>
				<span className="text-color-194">여행지나 숙소를 검색해보세요</span>
			</div>
		</div>
	);
}
