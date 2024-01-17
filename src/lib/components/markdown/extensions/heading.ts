import Heading from '@tiptap/extension-heading';

const heading = Heading.extend({
	addAttributes() {
		return {
			id: {
				default: null,
				parseHTML: (element) => {
					const ramdomId = Math.random().toString(36).substring(2, 15);
					return {
						level: parseInt(element.tagName.slice(1), 10),
						content: element.innerHTML,
						id: ramdomId
					};
				},
				renderHTML: (attributes) => {
					return {
						level: attributes.level,
						id: attributes.id.id
					};
				}
			}
		};
	}
}).extend({
	renderHTML({ HTMLAttributes }) {
		return [
			'a',
			{ href: '#' + HTMLAttributes.id },
			['h' + HTMLAttributes.level, HTMLAttributes, 0]
		];
	}
});

export default heading;
