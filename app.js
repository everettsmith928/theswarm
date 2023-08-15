const locations = [
  '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
  name: 'Jimbo',
  picture: '🤵',
  location: '🏤'
},
{
  name: 'Sammy',
  picture: '🙆‍♀️',
  location: '🏤'
},
{
  name: 'Michael',
  picture: '👷',
  location: '🏤'
},
{
  name: 'Robert',
  picture: '👷',
  location: '🏥'
},
{
  name: 'Terry',
  picture: '🤴',
  location: '🏥',
},
{
  name: 'Bill',
  picture: '🕵️',
  location: '🏥',
},
{
  name: 'Marie',
  picture: '👩‍🍳',
  location: '🏭',
},
{
  name: 'Mykeal',
  picture: '💂',
  location: '🏭',
},
{
  name: 'Phil',
  picture: '🧜‍♂️',
  location: '🏭',
},
{
  name: 'Wilson',
  picture: '🏐',
  location: '🏢',
},
{
  name: 'Wendy',
  picture: '👩‍⚕️',
  location: '🏢',
},
{
  name: 'Jeremy',
  picture: '🦹',
  location: '🏢',
}
]

let sunrise = 10;
let hunter;

drawLocations();
createHunter();

function drawLocations() {
  locations.forEach((location) => {
    let filteredPeople = people.filter((person) => person.location == location);
    let peoplePictures = filteredPeople.map((person => person.picture + person.name))
    console.log(peoplePictures);
    console.log(location);
    document.getElementById(location).innerText = peoplePictures;
  })
}

function attackLocation(location) {
  console.log(location)
  sunrise--;

  people.forEach((person) => {
    if (person.location == location) {
      person.picture = '🦇'
    }
  })

  people.forEach((person) => {
    let bats = people.filter((person) => person.picture == '🦇')
    if (person.name == hunter && person.location == location) {
      window.alert('You Attacked the Hunter..')
    }
  })

  movePeople()
  drawLocations()
  win()
  lose()
}

function movePeople() {
  people.forEach((person => {
    let randomLocation = Math.floor(Math.random() * locations.length)
    console.log(randomLocation);
    let newLocation = locations[randomLocation];
    person.location = newLocation;
  }))
  drawLocations();
}

function createHunter() {
  let randomPerson = Math.floor(Math.random() * people.length)
  console.log(randomPerson);
  hunter = people[randomPerson].name;
}

function win() {
  let bats = people.filter((person) => person.picture == '🦇')
  console.log(bats);
  if (bats.length == people.length) {
    window.alert('You Turned Everyone to Bats!')
  }
}

function lose() {
  if (sunrise == 0) {
    window.alert('The Sun Rises..')
  }
}



