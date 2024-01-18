import { writable } from 'svelte/store';

export type Anchor = {
	id: string;
	level: number;
	content: string;
};

export const anchors = writable([] as Anchor[]);
