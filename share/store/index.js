import { configureStore } from '@reduxjs/toolkit'
import drawerSlice from './slices/drawer/drawerSlices'


export const store = configureStore({

    reducer: {
        drawer: drawerSlice,
        // products: productSlice,
        // category: categorySlice,
        // offers: offersSlice,
        // orders: orderSlice,
    },
})