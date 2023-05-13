import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './Reducers';

// Configure the Redux store
const store = configureStore({
  reducer: {
    contacts: contactReducer, // Set the contacts reducer
  },
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Export the configured store
export default store;
