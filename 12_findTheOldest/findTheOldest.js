const findTheOldest = function(people) {
/* given array of people with name, DOB and
date of death (DOD) findTheOldest person*/

// initialise variables
const peopleLength = people.length;
let age = [];

/* iterate through people array and calc
difference between DOB and DOD */
for (let i = 0; i < peopleLength; i++) {
    // if not dead, set year of death to this year
    if (typeof people[i].yearOfDeath === undefined) {
        people[i].yearOfDeath = new Date().getFullYear();
    };
    age.push(people[i].yearOfDeath - people[i].yearOfBirth);
};

// find largest age
const oldestAge = Math.max(age);

// find index of age
const oldestAgeIndex = age.indexOf(oldestAge);

// return persons name using index
return people[oldestAgeIndex].name;
};

// Do not edit below this line
module.exports = findTheOldest;
