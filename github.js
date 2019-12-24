class GitHub {
  constructor(){
    this.client_id = '40fa734d51ee2871bbb2';
    this.client_secret = '3697dfb785acfd7948a778482f4544c50bd5f4b2';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }
  

  async getUser(user){
    //initilize UI class
    const ui = new UI;

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    if (profileResponse.ok){
      const profile = await profileResponse.json()
      .then(profile=>{
        // show profile
        ui.showProfile(profile);
      });
    } else {
      ui.showAlert(`User: "${user}" ${profileResponse.statusText}`, 'alert alert-danger');
    }

    if(repoResponse.ok){
      const repos = await repoResponse.json()
      .then(repos=>{
        // show profile
        ui.showRepos(repos);
      })
    } else {

    }

    return {
      profile: profile,
      repos: repos
      // in ES6 you can leave it as only profile. it automatically understands which one is which
    }
  }
}