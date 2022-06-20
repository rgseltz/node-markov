const { MarkovMachine } = require('./markov');
// const fs = require('fs');
// const eggs = './eggs.txt';
// const eggsText = fs.readFile(eggs, 'utf-8', (err, data) => {
// 	if (err) {
// 		console.log('Error', err);
// 	}
// 	console.log(data);
// });

let m = new MarkovMachine('please find my friend Anne sitting by the sea reading a can of beans');

describe('MarkovMachine tests', () => {
	test('MarkovMachine method makeChains()', () => {
		expect(m.makeChains()).not.toBeNull();
		expect(m.makeChains()).not.toBeNaN();
		expect(m).toBeInstanceOf(MarkovMachine);
	});
	test('MarkovMachine method makeText()', () => {});
});
