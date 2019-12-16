document.querySelector('.get-jokes').addEventListener('click', function(e) {
  
  const input = document.getElementById('number');

  if (input.value !== '') {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${input.value}`, true);

    xhr.onload = function() {
      if(this.status === 200) {

        const jokes = JSON.parse(this.responseText);
        
        let output = '';

        jokes.value.forEach(joke => {
          if (jokes.type === "success") {
            output += `<li>${joke.joke}</li>`;
          } else {
            output = `<li>что-то пошло не так</li>`;
          }
        });
        document.querySelector('.jokes').innerHTML = output;
      }

    };

    xhr.send();
  } else {
    input.setAttribute('placeholder', 'Введите число');
  }

  e.preventDefault();
});