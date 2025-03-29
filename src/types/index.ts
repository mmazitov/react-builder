export interface Widget {
	id: string;
	icon: string;
	title: string;
	value: string;
}

export interface AddState {
	widgets: Widget[];
	activeWidgetId: string | null;
}
