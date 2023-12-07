import Header from '@/components/main/Header';
import SearchSection from '@/components/main/SearchSection';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				{/** 검색 section */}
				<SearchSection />
			</main>
		</>
	);
}
