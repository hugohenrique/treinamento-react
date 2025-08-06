import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from '../features/authSlice';
import counterSlice from '../features/counterSlice';
import carrinhoSlice from '../features/carrinhoSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['carrinho', 'auth']
};

const carinhoSlicePersistido = persistReducer(persistConfig, carrinhoSlice);
const authSlicePersistido = persistReducer(persistConfig, authSlice);

export const store = configureStore({
    reducer: {
        auth: authSlicePersistido,
        carrinho: carinhoSlicePersistido,
        counter: counterSlice,
    }
});

export const persistor = persistStore(store);