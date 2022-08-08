import Footer from '@components/Footer';
import Grid from '@components/Grid';
import Header from '@components/Header';
import React, {useEffect} from 'react';

interface PageProps {
	children: React.ReactNode;
	title?: string;
}

const Page: React.FC<PageProps> = ({children, title}) => {
	useEffect(() => {
		if (title !== undefined) document.title = title;
	}, [title]);

	return (
		<Grid container flexDirection="column">
			<Grid item>
				<Header />
			</Grid>
			<Grid item minHeight="calc(100vh - 80px - 40px)">
				{children}
			</Grid>
			<Grid item>
				<Footer />
			</Grid>
		</Grid>
	);
};

export default Page;
