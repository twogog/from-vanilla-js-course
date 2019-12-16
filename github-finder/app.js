const git= new Github();
const ui= new UI();

document.querySelector('.form-control').addEventListener('keyup', e => {
  
  git.getData(e.target.value).then(function(data) {
    if (data.userss.message !== 'Not Found') {
      ui.createUI(data);
    } else {
      ui.errorUI();
    }

  });
  
  ui.clearUI(e.target.value, '#profile');

});