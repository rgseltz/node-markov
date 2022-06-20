/** Textual markov chain generator */

class MarkovMachine {
	/** build markov machine; read in text.*/

	constructor(text) {
		let words = text.split(/[ \r\n]+/);
		this.words = words.filter((c) => c !== '');
		this.makeChains();
	}

	/** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

	makeChains() {
		let obj = {};
		for (let i = 0; i < this.words.length; i++) {
			if (!obj.hasOwnProperty(this.words[i])) {
				obj[this.words[i]] = [ this.words[i + 1] ];
			} else {
				obj[this.words[i]].push(this.words[i + 1]);
			}
		}
		this.obj = obj;
	}

	// static random(arr) {
	// 	return arr[Math.floor(Math.random() * arr)];
	// }
	/** return random text from chains */

	makeText(numWords = 20) {
		let values = Object.values(this.obj).flat().filter(Boolean);
		console.log(values);
		let out = [];
		while (values.length < numWords) {
			let randIndx = [ Math.floor(Math.random() * numWords) ];
			out.push(values[randIndx]);
			// values.splice(randIndx, 1);
			numWords--;
		}
		// out = out.join(' ');
		return out;
	}
}

let m = new MarkovMachine('I am a big boy a very big boy');
console.log(m.makeChains());
console.log(m.makeText());

let text = new MarkovMachine('This cannot be the only way to solve the problem of the world');
console.log(text.makeText());
console.log(text.makeChains());

module.exports = { MarkovMachine };
