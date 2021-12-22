/**
 *  Problema visto en al web.
 */

const buscador(arr, item) => {

	let cont = 0;
	if (arr.filter(item)) {
		if (arr.filter(item) == 3) {
			cont= 2;
			break;
		}
		cont++;
	};
	return cont;
}

export {buscador};


