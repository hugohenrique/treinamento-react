import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from '../features/authSlice';
import counterSlice from '../features/counterSlice';
import carrinhoSlice from '../features/carrinhoSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authSlice,
    carrinho: carrinhoSlice,
    counter: counterSlice,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'carrinho']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

export const persistor = persistStore(store);