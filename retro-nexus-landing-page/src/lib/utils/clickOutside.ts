import type { Action } from "svelte/action";

const clickOutside: Action<HTMLElement, () => void
> = (node, dispatcher) => {

	function onClick(event: MouseEvent) {
		if (!node.contains(event.currentTarget as Node)   ) {
			dispatcher()
		}
	}

	document.body.addEventListener('click', onClick);

	return {
		destroy() {
			document.body.removeEventListener('click', onClick);
		}
	}
}


export default clickOutside
