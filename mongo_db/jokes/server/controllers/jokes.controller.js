const Joke = require('../models/jokes.model');

module.exports.getAllJokes = (req, res) => {
	Joke.find()
		.then(allJokes => res.json({ joke: allJokes }))
		.catch(err => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.getOneJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneJoke => res.json({ joke: oneJoke }))
		.catch(err => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.createNewJoke = (req, res) => {
	Joke.create(req.body)
		.then(newJoke => res.json({ joke: newJoke }))
		.catch(err => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.updateJoke = (req, res) => {
	Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then(updatedJoke => res.json({ joke: updatedJoke }))
		.catch(err => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.deleteJoke = (req, res) => {
	Joke.deleteOne({ _id: req.params.id })
		.then(result => res.json({ result: result }))
		.catch(err => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.randomJoke = (req, res) => {
	Joke.count()
		.then(count => {
			let rand = Math.floor(Math.random() * count);
			Joke.findOneJoke()
				.skip(rand)
				.then(randJoke => res.json({ joke: randJoke }));
		})
		.catch(err => res.json({ message: 'Something went wrong', error: err }));
};
