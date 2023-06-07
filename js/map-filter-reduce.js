"use strict";

(()=>{
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    /**
     * use .filter to create an array of users where each user
     * has at least 3 languages.
     */
    const usersWThreeLanguages= users.filter(user => user.languages.length >= 3);
    console.log(usersWThreeLanguages);

    /**
     * user .map to create an array of each user's email as
     * a string.
     */
    const userEmails = users.map(user => user.email);
    console.log(userEmails);

    /**
     * user reduce to get the total years of experience and
     * then use the total years to get the average years.
     */
    const totalYearsExp = users.reduce((total, {yearsOfExperience})=>{
        return total + yearsOfExperience;
    },0)
    const avgYearsExp = totalYearsExp/users.length;

    console.log(`Total Years Exp: ${totalYearsExp}\nAvg Years Exp: ${avgYearsExp}`);

    /**
     * use .reduce to get the longest email from the list
     * of users
     */
    const longestEmail = users.reduce((lEmail,{email})=>{
        if(lEmail.length < email.length){
            lEmail = email;
        }
        return lEmail;
    },"");

    console.log(longestEmail);

    /**
     * use .reduce to get the users names in a single string
     * ex. Your Instructors are: name, name, name,..., name
     */
    const userNameStr = users.reduce((nameStr,{name})=> {
        return nameStr += ` ${name},`;
    }, "Your Instructors are: ")

    console.log(userNameStr);


})();