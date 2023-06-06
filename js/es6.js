"use strict";

(() => {

    /*
     * Complete the TODO items below
     */
    const users = [
        {
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash']
        },
        {
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript']
        },
        {
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php']
        },
        {
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql']
        },
        {
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php']
        }
    ];

    console.log(users);

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
    const name = 'johann';
    const email = 'johann.williams01@gmail.com';
    const languages = ["python", "html", "js", "c++", "c", "java", "c#"];

// TODO: rewrite the object literal using object property shorthand
    users.push({
        name,
        email,
        languages
    });

    console.log(users);

// TODO: replace `var` with `let` in the following variable declarations
    let emails = [];
    let names = [];

// TODO: rewrite the following using arrow functions
    users.forEach(user => emails.push(user.email));
    users.forEach(user => names.push(user.name));

    console.log(emails);
    console.log(names);

// TODO: replace `var` with `let` in the following declaration
    let developers = [];
    users.forEach(function ({name, email, languages}) {
        // TODO: rewrite the code below to use object destructuring assignment
        //       note that you can also use destructuring assignment in the function
        //       parameter definition

        // TODO: rewrite the assignment below to use template strings
        developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}`);
    });

    console.log(developers);

// TODO: Use `let` for the following variable
    let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
    for(let devs of developers){

        // TODO: rewrite the assignment below to use template strings
        list += `<li>${devs}</li>`;
    };
    list += '</ul>';

    document.getElementById("developers-div").innerHTML = list;
})();