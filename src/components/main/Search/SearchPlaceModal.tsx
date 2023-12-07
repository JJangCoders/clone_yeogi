export default function SearchPlaceModal() {
	const places = [
		'경주',
		'여수',
		'강릉',
		'부산',
		'속초',
		'제주도',
		'서울',
		'전주',
		'해운대',
		'포항',
	];

	return (
		<div>
			<div className="absolute left-0 flex flex-col px-3 pt-3 pb-5 overflow-y-scroll bg-white rounded-lg shadow-box h-361pxr w-400pxr top-60pxr">
				<div className="p-12pxr">
					<h2>여기어때 검색 순위</h2>
				</div>
				<ul>
					{places.map((place, index) => (
						<li
							key={index}
							className="flex cursor-pointer gap-10pxr p-12pxr hover:bg-zinc-50"
						>
							<span className="min-w-[24px]">{index + 1}</span>
							<span>{place}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
