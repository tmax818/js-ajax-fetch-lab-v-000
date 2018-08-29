function getIssues() {
}

function showIssues('test body') {
  document.getElementById('body').innerHTML = json;
}

function createIssue() {
    const repo = '/javascript-fetch-lab/issues/';
  //use fetch to fork it!
    fetch(repo, { 
    method: 'post',
    headers: { 
      Authorization: `token ${getToken}` }}).then(res => showIssues(res))
}

function showResults(json) {
  
}

function forkRepo() {
  const repo = 'api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/';
  //use fetch to fork it!
    fetch(repo, { 
    method: 'post',
    headers: { 
      Authorization: `token ${getToken}` }})
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "fd9cd420b859827bc273fb5e31e240eb8566e57c";
   //return "";
}
