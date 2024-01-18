import { persisted } from 'svelte-persisted-store';

export type Component = {
	title: string;
	component: {
		name: string;
		title: string;
		color: string;
	};
	description: string;
	name: string;
	required?: boolean;
};

export type Meta = {
	project: {
		name: string;
		package: string;
	};
	plugin?: {
		description?: string;
		authors?: string[];
	};
};

export const quickstart = persisted('quickstart', {
	components: [] as Component[],
	meta: {} as Meta
});

export const addComponent = (component: Component) => {
	quickstart.update((state) => {
		state.components.push(component);
		return state;
	});
};

export const removeComponent = (component: Component) => {
	if (component.required === true) return;
	quickstart.update((state) => {
		state.components = state.components.filter((c) => c.name !== component.name);
		return state;
	});
};

export const clearComponents = () => {
	quickstart.update((state) => {
		state.components = [];
		return state;
	});
};

export const setMeta = (meta: Meta) => {
	quickstart.update((state) => {
		state.meta = meta;
		return state;
	});
};

export const clearMeta = () => {
	quickstart.update((state) => {
		state.meta = {} as Meta;
		return state;
	});
};
