/** Command-line tool to generate Markov text. */
const fs = require('fs');
const markov = require('./markov');
const axios = require('axios');

function generateText(text) {
	let mm = new markov.MarkovMachine(text);
	console.log(mm.makeText());
}

function makeText(path) {
	fs.readFile(path, 'utf-8', (err, data) => {
		if (err) {
			console.log('Error!!', err);
			process.exit(1);
		}
		generateText(data);
	});
}

async function makeHtml(url) {
	let response;

	try {
		response = await axios.get(url);
		console.log(url);
	} catch (err) {
		console.log(`Cannot read URL: ${url}`, err);
		process.exit(1);
	}
	generateText(response.data);
}

let [ method, path ] = process.argv.slice(2);

if (method === 'file') {
	let url = makeText(path);
	console.log(path);
} else if (method === 'url') {
	makeHtml(path);
	console.log(path);
} else {
	return console.log('Please enter a valid command', path);
}
