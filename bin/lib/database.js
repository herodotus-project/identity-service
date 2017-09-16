const debug = require('debug')('bin:lib:database');

function putAnItemIntoTheDatabase(data){

	debug('Adding data to database:', data);
	return Promise.resolve();

}

function getAnItemFromTheDatabase(key){

	debug('Getting an item from database with key:', key);
	return Promise.resolve();

}

function deleteAnItemFromTheDatabase(key){

	debug('Getting an item from database with key:', key);
	return Promise.resolve();

}

module.exports = {
	put : putAnItemIntoTheDatabase,
	get : getAnItemFromTheDatabase,
	delete : deleteAnItemFromTheDatabase
}