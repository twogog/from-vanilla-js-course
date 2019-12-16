// Client ID
// 1be0f3b0a515360eed5b
// Client Secret
// cf494bda2d8eace44544e28de75537a7b96fc846

class Github {
  constructor() {
    this.id = '1be0f3b0a515360eed5b';
    this.secret = 'cf494bda2d8eace44544e28de75537a7b96fc846';
    this.pages = 5;
    this.sort = 'created: asc';
  }

  async getData(user) {

    const users = await fetch(`https://api.github.com/users/${user}?client_id=${this.id}&client_secret=${this.secret}`);

    const  userss = await users.json();

    const repos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.pages}&sort=${this.sort}&client_id=${this.id}&client_secret=${this.secret}`);
    
    const repo = await repos.json();

    const data = {
      repo,
      userss
    };

    return data;
  }
}