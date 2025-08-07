import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import produtoReducer from '../reducers/produtoReducer';
import carrinhoReducer from '../reducers/carrinhoReducer';
import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({
    produto: produtoReducer,
    carrinho: carrinhoReducer,
    auth: authReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['carrinho', 'auth']
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