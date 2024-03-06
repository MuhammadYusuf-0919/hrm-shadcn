import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state
interface ConfigState {
  entity: string;
  create?: boolean;
  formSchema?: any;
  formFields?: any;
  update?: boolean;
  UPDATE_ENTITY: string;
  initialState?: any;
  captions?: string[];
  ADD_NEW_ENTITY?: string;
}

const initialState: ConfigState = {
  UPDATE_ENTITY: '',
  entity: '',
  captions: [],
  create: false,
  update: false,
};

// Create a slice
export const config = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setConfig: (state, action: PayloadAction<ConfigState>) => {
      return { ...state, ...action.payload };
    },
  },
});

// Extract the action creator
export const { setConfig } = config.actions;


