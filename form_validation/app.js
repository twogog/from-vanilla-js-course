document.getElementById('name').addEventListener('input', (e) => {
  const name = document.getElementById('name');
  const re = /^[а-яА-я]{2,10}$/;
  if (re.test(name.value)) {
    name.classList.remove('is-invalid');
  } else {
    name.classList.add('is-invalid');
  }
}); 

document.getElementById('date').addEventListener('input', (e) => {
  const date = document.getElementById('date');
  const re = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;

  if (re.test(date.value)) {
    if (date.value[0] + date.value[1] < 32 && date.value[0] + date.value[1] != '00'
    && date.value[3] + date.value[4] < 13 && date.value[3] + date.value[4] != '00') {

      date.classList.remove('is-invalid');
    }
  } else {
    date.classList.add('is-invalid');
  }
}); 

document.getElementById('email').addEventListener('input', (e) => {
  const email = document.getElementById('email');
  const re = /^[a-zA-z0-9_-]{1,30}@[a-zA-Z]{1,10}\.[a-zA-z]{1,10}$/;

  if (re.test(email.value)) {
    email.classList.remove('is-invalid');
  } else {
    email.classList.add('is-invalid');
  }
}); 

document.getElementById('phone').addEventListener('keydown', (e) => {
  // e.preventDefault();
  const phone = document.getElementById('phone');
  const re = /\d/;

  if (e.key.match(re)) {
    if (phone.value.indexOf('*') !== -1) {
      phone.value = phone.value.replace('*', e.key);
    }
  }
}); 

document.getElementById('phone').addEventListener('focus', (e) => {

  const phone = document.getElementById('phone');
  phone.value = '+7-(***)-(***)-(**)-(**)';
  
}); 

