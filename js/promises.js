"use strict";

(()=>{
    /**
     * Create Your Own Promise
     * Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
     */

    function wait(num){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`You'll see this after ${num/1000} second.`);
            }, num);
        });
    }

    for(let i = 0; i < 10; i++){
        console.log(wait(Math.floor(Math.random() * 5000) + 1000).then((message) => console.log(`Promise call ${i + 1}. ${message}`)));
    }


    /**
     * Handle An API Promise
     * Create a file named promises.js inside your js directory and link it to an HTML file of your choice.
     *
     * Generate a Personal Access Token for the GitHub API.
     *
     * We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:
     * fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
     *
     * Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
     */

    const url = 'https://api.github.com/users';
    function getLastCommit(userName){
        return new Promise((resolve, reject) => {
            fetch(`${url}/${userName}/events/public`,{
                headers: {'Authorization': `token ${GITHUB_KEY}`}
            })
                .then(response => response.json())
                .then(response => {
                    for(let resp of response){
                        if(resp.type === "PushEvent"){
                            const type = resp.type;
                            const commits = resp.payload.commits;
                            const created_at = new Date(resp.created_at);
                            return {type, commits, created_at};
                        }
                    }

                })
                .then(response => {
                    let message = `Last ${response.type} occurred on ${response.created_at}.\n\nThis ${response.type} contains the following commits from ${response.commits[0].author.name}:\n\nCommits:\n`;
                    for(const commit of response.commits){
                        message += `${commit.message}\n`;
                    }
                    resolve(message);
                })
                .catch(error => {
                    reject(error);
                });
        })
    }

    const request = getLastCommit("JohannWilliams");
    request.then(response => console.log(response));
    request.catch(error => console.error(error));

})();