import labyrinthReducer from '@features/labyrinth-game/model/labyrinthSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		labyrinth: labyrinthReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
