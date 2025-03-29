import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import widgetActionsSlice from './slices/widgetActionsSlice';
import widgetsSlice from './slices/widgetsSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['widgets', 'widgetActions'],
};

const rootReducer = combineReducers({
	widgets: widgetsSlice,
	widgetActions: widgetActionsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
