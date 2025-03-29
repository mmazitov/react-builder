import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { AddState, Widget } from '../../../types/index';

const initialState: AddState = {
	widgets: [],
	activeWidgetId: null,
};

const widgetActionsSlice = createSlice({
	name: 'widgetActions',
	initialState,
	reducers: {
		addWidget(state, action: PayloadAction<Widget>) {
			state.widgets.unshift(action.payload);
		},
		removeWidget(state, action: PayloadAction<string>) {
			state.widgets = state.widgets.filter(
				(widget) => widget.id !== action.payload,
			);
		},
		updateWidgetValue(
			state,
			action: PayloadAction<{ widgetId: string; value: string }>,
		) {
			const widget = state.widgets.find(
				(w) => w.id === action.payload.widgetId,
			);
			if (widget) {
				widget.value = action.payload.value;
			}
		},
		moveWidget(
			state,
			action: PayloadAction<{ widgetId: string; direction: 'up' | 'down' }>,
		) {
			const { widgetId, direction } = action.payload;
			const index = state.widgets.findIndex((widget) => widget.id === widgetId);

			if (index !== -1) {
				const targetIndex = direction === 'up' ? index - 1 : index + 1;

				if (targetIndex >= 0 && targetIndex < state.widgets.length) {
					const [movedWidget] = state.widgets.splice(index, 1);
					state.widgets.splice(targetIndex, 0, movedWidget);
				}
			}
		},
		cloneWidget(state, action: PayloadAction<string>) {
			const widgetToClone = state.widgets.find(
				(widget) => widget.id === action.payload,
			);
			if (widgetToClone) {
				const clonedWidget = {
					...widgetToClone,
					id: `${widgetToClone.id}-${uuidv4()}`,
				};
				const index = state.widgets.findIndex(
					(widget) => widget.id === action.payload,
				);
				state.widgets.splice(index + 1, 0, clonedWidget);
			}
		},
		setActiveWidget(state, action: PayloadAction<string | null>) {
			state.activeWidgetId = action.payload;
		},
	},
});

export default widgetActionsSlice.reducer;
export const {
	addWidget,
	removeWidget,
	updateWidgetValue,
	moveWidget,
	cloneWidget,
	setActiveWidget,
} = widgetActionsSlice.actions;
