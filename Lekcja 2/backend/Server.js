const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())


const PORT = 3000;
let users = [
	{id: 0, name: 'Bartosz', password: 'bartosz123', colorNumber: 0, date: '21:37 21-03-2137'},
	{id: 1, name: 'Oskar', password: 'oskar123', colorNumber: 1, date: '19:15 11-02-2002'},
	{id: 2, name: 'Kapala', password: 'kapala123', colorNumber: 2, date: '04:35 1-09-1939'},
	{id: 3, name: 'Mario', password: 'mario123', colorNumber: 3, date: '23:22 22-10-1997'},
	{id: 4, name: 'Luidżi', password: 'luidżi123', colorNumber: 4, date: '11:23 28-10-2021'},
]


let id = (users[users.length - 1].id) + 1;
let colorNumber = (users[users.length - 1].colorNumber) + 1;


app.post('/addUser', (req, res) => {
	let date = new Date();
	let now = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
	let inputName = req.body.name;
	res.header('Access-Control-Allow-Origin: *')
	const index = users.findIndex(element => element.name == inputName)
	if(index == -1) {
		let userObject = req.body;
		if(colorNumber == 5) colorNumber = 0;
		userObject.id = id;
		userObject.colorNumber = colorNumber
		userObject.date = now;
		id++;
		colorNumber++;

		users.push(userObject)
		res.send({
			alert: 'Zalogowano',
			status: true,
		})
	} else {
		res.send({
			alert: 'Już jest taki użytkownik',
			status: false,
		})
	}
})

app.get('/getUsers', (req, res) => {
	res.send(users);
})

app.post('/deleteUser', (req, res) => {
	let userID = req.body.userID;
	let filteredUsers = users.filter(item => { 
		if(item.id != userID) 
			return item;
	});
	users = filteredUsers
	res.send(filteredUsers);
})

app.listen(PORT, () => {console.log(`Start serwera na porcie: ${PORT}`)});