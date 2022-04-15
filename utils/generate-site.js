const fs = require('fs');

// writing files
const writeFile = (fileContent) => {
	fs.writeFile('./dist/index.html', fileContent, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Your page has been generated!');
		}
	});
};



module.exports = writeFile;