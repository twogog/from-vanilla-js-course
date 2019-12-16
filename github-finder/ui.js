class UI {
  constructor() {

  }

  createUI(user) {

    const div = document.querySelector('#profile');

    div.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.userss.avatar_url}">
            <a href="${user.userss.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.userss.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.userss.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.userss.followers}</span>
            <span class="badge badge-info">Following: ${user.userss.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.userss.company}</li>
              <li class="list-group-item">Website/Blog: ${user.userss.blog}</li>
              <li class="list-group-item">Location: ${user.userss.location}</li>
              <li class="list-group-item">Member Since: ${user.userss.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      `;
    
     
    div.innerHTML += 
                        `<h3 class="page-heading mb-3">Latest Repos</h3>
                        <div id="repos">`;
                     
    user.repo.forEach(repo => { 
        div.innerHTML +=
        `<div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
      </div> 
          `
    });
  }

  errorUI() {
    const error = document.createElement('div');
    const paren = document.querySelector('.search.card');
    const chil = document.querySelector('h1');
    error.className = 'alert alert-danger';
    error.textContent = 'Такого никнейма не существует';
    paren.insertBefore(error, chil);

    if (document.querySelectorAll('.alert').length > 1) {
      error.remove();
    }
    setTimeout(() => {
      error.remove();
    }, 3000);
  }

  clearUI(targ, clas) {
    if (targ === '') {
      document.querySelector(`${clas}`).innerHTML = '';
    }
  }
}