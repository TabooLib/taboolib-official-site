<script lang="ts">
	let className = '';
	export { className as class };
</script>

<svg class={`${className} animate`} viewBox="0 0 6048 6048" version="1.1">
	<g transform="matrix(6.30366,0,0,5.14765,-9227.4,1732.25)">
		<g transform="matrix(-4.16667,0,0,-4.16667,2472.92,647.29)">
			<path
				d="M123.529,24.199L123.529,6.534L61.665,12.413L61.665,192.658L61.93,192.961L68.155,194.177L123.529,188.547L123.529,170.411L76.116,173.945L77.652,32.44L123.529,24.199Z"
				style="fill:rgb(84,144,214);fill-rule:nonzero;"
			/>
		</g>
		<g transform="matrix(8.65821,0,0,4.16667,557.625,-175.502)">
			<path
				d="M131.286,2.345L125.812,4.588L125.812,182.456L188.866,197.328L194.312,194.333L194.312,18.376L188.866,14.776L131.286,2.345ZM182.353,177.647L141.176,168.235L141.176,22.353L182.353,31.765L182.353,177.647Z"
				style="fill:rgb(163,204,250);fill-rule:nonzero;"
			/>
		</g>
		<g transform="matrix(4.16667,0,0,4.16667,1443.51,-163.584)">
			<path
				d="M123.529,24.199L123.513,6.063L66.033,11.946L58.824,14.151L58.824,198.834L64.056,199.452L123.514,188.074L123.529,170.081L76.471,178.235L77.042,30.365L123.529,24.199Z"
				style="fill:rgb(84,144,214);fill-rule:nonzero;"
			/>
		</g>
	</g>
</svg>

<style>
	.animate {
		animation:
			fade 2s ease-in-out infinite alternate,
			rotate 10s linear infinite alternate;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.6;
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
