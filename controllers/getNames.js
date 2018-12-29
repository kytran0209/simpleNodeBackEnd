var getNamesList = () => {
	return new Promise((resolve, reject) => {
		//Resolve the promise and return names list
		resolve([
			'David',
			'Jack',
			'Jeff',
			'Leslie',
			'Amy',
			'Kenny',
			'Tony',
			'Alexandra'
		]);
		//Reject the promise - for testing
		//reject({error: 'Error - cannot return the names list'});
	});
}

exports.getNames = (req, res, next) => {
	getNamesList().then(documents => {
			res.status(200).json({
				message: 'Names fetched successfully!',
				names: documents
			})
		})
		.catch(error => {
			res.status(500).json({
				message: error
			})
		})
}