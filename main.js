let countInput = document.querySelector('#word-input');
let wordCount = document.querySelector('#word-count');
let charCount = document.querySelector('#char-count');

let count = () => {
	let chars = countInput.value;
	let charsLen = chars.length;

	let words = chars.split(/[nrs]+/g).filter((word) => word.length > 0);
	wordCount.innerHTML = words.length;
	charCount.innerHTML = charsLen;
};
count();
window.addEventListener(
	'input',
	(e) => {
		if (e.target.matches('#word-input')) {
			count();
		}
	},
	false
);
