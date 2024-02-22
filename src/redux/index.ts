import { crudApi } from './crud';
import { config } from './config';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// Redux Toolkit bilan store ni yaratish
export const store = configureStore({
  reducer: {
    // Generatsiya qilingan reducerlarni ma'lum bir yuqori darajadagi slice sifatida qo'shing
    [crudApi.reducerPath]: crudApi.reducer,
    config: config.reducer, // configSlice reducer'ini qo'shing
  },
  // RTK middleware ni qo'shish caching, invalidation, polling, va boshqa foydali xususiyatlarini yoqish uchun
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(crudApi.middleware),
});

// refetchOnFocus/refetchOnReconnect xususiyatlarini sozlash uchun tanlangan ro'yhatni sozlash (configuring)
// qo'llanmani sozlash haqida ma'lumotlar uchun 'setupListeners' hujjatlariga o'ting
// mukammal yaxshi ishlash uchun, xohlagan o'zgartirishlarni qo'llash uchun ikkinchi argument sifatida tanlang
setupListeners(store.dispatch);

// Root state ni olish uchun store ning `RootState` turini tanlab olamiz
export type RootState = ReturnType<typeof store.getState>;
