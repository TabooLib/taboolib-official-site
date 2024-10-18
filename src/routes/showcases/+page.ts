export async function load({ fetch }) {
	const response = await fetch('/showcases.json');
	const showcases = await response.json();
	return { showcases };
}
