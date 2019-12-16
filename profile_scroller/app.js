const towns = ['Питер', 'Москва', 'Казань', 'Омск', 'Вологда', 'Красноярск', 'Краснодар', 'Чернобыль'];
const mnames = ['Киря', 'Данил', 'Стасик', 'Петя', 'Владик', 'Филипп'];
const gnames = ['Даша', 'Маша', 'Света', 'Петя', 'Лариса', 'Филипп'];
const whom = ['мужчину', 'женщину', 'оленя', 'осла', 'мармышку'];

const data = [
  
  {
    name: `${mnames[Math.ceil(Math.random()* 6 - 1)]} Киркоров`,
    age: Math.ceil(Math.random()*30 + 18),
    gender: 'мужчина',
    lookingfor: `${whom[Math.ceil(Math.random()* 5 - 1)]}`,
    location: `${towns[Math.ceil(Math.random()* 8 - 1)]}`,
    image: `https://randomuser.me/api/portraits/men/${Math.ceil(Math.random()*100)}.jpg`
  },

  {
    name: `${gnames[Math.ceil(Math.random()* 6 - 1)]} Долина`,
    age: Math.ceil(Math.random()*30 + 18),
    gender: 'женщина',
    lookingfor: `${whom[Math.ceil(Math.random()* 5 - 1)]}`,
    location: `${towns[Math.ceil(Math.random()* 8 - 1)]}`,
    image: `https://randomuser.me/api/portraits/women/${Math.ceil(Math.random()*100)}.jpg`
  }
];

const profiles = profileIterator(data);

function profileIterator(profile) {
  let i = 0;

  return {
    next: function() {
      return i < profile.length ?
      { value: profile[i++], done: false } :
      { done: true };
    }
  };
}

function createProf() {
  let currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML =  
        `<ul class="list-group">
            <li class="list-group-item">Имя: ${currentProfile.name}</li>
            <li class="list-group-item">Возраст: ${currentProfile.age}</li>
            <li class="list-group-item">Город: ${currentProfile.location}</li>
            <li class="list-group-item">Предпочтения: ${currentProfile.gender} ищу ${currentProfile.lookingfor}</li>
        </ul>`;
        
    document.getElementById('imageDisplay').innerHTML =  
        `<img src='${currentProfile.image}'></img>`;
  } else {
    window.location.reload(true);
  }
}

createProf();

document.getElementById('next').addEventListener('click', () => {
  createProf();
});




