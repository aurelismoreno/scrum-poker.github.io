const botonRevelar = (nroSala) => {
	const template = `
    <div class="botonRevelar-interno">
		<button class="botonRevelar-button" id="botonRevelarButton">Revelar</button>
    </div>`;
	const wrapperElement = document.createElement('section');
	wrapperElement.classList.add('botonRevelar');
	wrapperElement.innerHTML = template;

	//    COMPORTAMIENTO BOTON REVELAR
	const revelarElementOnclick = (evt) => {
		evt.preventDefault();

		const db = firebase.firestore();

		db.collection('sala')
			.doc(nroSala)
			.set({ revelar: true }, { merge: true })
			.then(() => {
				console.log('Document successfully written!');
			})
			.catch((error) => {
				console.error('Error writing document: ', error);
			});
	};

	const revelarElement = wrapperElement.querySelector('.botonRevelar-button');

	revelarElement.addEventListener('click', revelarElementOnclick);

	return wrapperElement;
};

export default botonRevelar;
