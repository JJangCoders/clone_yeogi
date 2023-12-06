import type { Metadata } from 'next';
import '@/style/globals.css';
import Header from '@/components/main/Header';

export const metadata: Metadata = {
	title: '저기어때',
	description: 'How about there?',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
