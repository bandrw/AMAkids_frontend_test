import './styles/index.scss';

import MainPage from '@pages/MainPage';
import StoreProvider from '@shared/store/StoreProvider';
import React from 'react';

const App: React.FC = () => (
	<StoreProvider>
		<MainPage />
	</StoreProvider>
);

export default App;
