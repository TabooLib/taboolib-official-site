import Heading from '@tiptap/extension-heading';

const heading = Heading.extend({
	addAttributes() {
		return {
			id: {
				default: null,
				parseHTML: (element) => {
					return {
						level: parseInt(element.tagName.slice(1), 10),
						content: element.innerHTML
					};
				},
				renderHTML: (attributes) => {
					return {
						level: attributes.level,
						id: attributes.id.content
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
