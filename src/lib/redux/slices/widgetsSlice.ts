import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WidgetState {
	[key: string]: string;
}

const initialState: WidgetState = {
	headline: 'Your headline text',
	paragraph: 'Your paragraph text',
	image: 'Your image',
	button: 'Button',
};

const widgetsSlice = createSlice({
	name: 'widgets',
	initialState,
	reducers: {
		setWidgetValue(
			state,
			action: PayloadAction<{ widgetId: string; value: string }>,
		) {
			const { widgetId, value } = action.payload;
			state[widgetId] = value;
		},
	},
});

export default widgetsSlice.reducer;
export const { setWidgetValue } = widgetsSlice.actions;
