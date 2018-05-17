const main = document.createElement("main");
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

const mainHeader = ()=>{
    const header = document.createElement("h1");
    header.textContent = "Javascript Kata 4";
    main.insertBefore(header,main.childNodes[0]);
    document.body.appendChild(main);
}

const kataHeaderAndAnswer = (header,answer) => {
    kataProblemHeader(header);
    kataProblemAnswer(answer);
}

const kataProblemHeader = (headerText) => {
    const header = document.createElement("article");
    header.textContent = headerText;
    header.className = "problemHeading";
    main.appendChild(header);
}

const kataProblemAnswer = (answer) => {
    const ans = document.createElement("div");
    ans.textContent = answer;
    main.appendChild(ans);
}

const kataProblemOne = () => JSON.stringify(gotCitiesCSV.split(","));

const kataProblemTwo = () => JSON.stringify(bestThing.split(" "));

const kataProblemThree = () => gotCitiesCSV.split(",").join(";");

const kataProblemFour = () => lotrCitiesArray.join();

const kataProblemFive = () => JSON.stringify(lotrCitiesArray.slice(0,5));

const kataProblemSix = () => JSON.stringify(lotrCitiesArray.slice(-5));

const kataProblemSeven = () => JSON.stringify(lotrCitiesArray.slice(3,6));

const kataProblemEight = () => {
    lotrCitiesArray.splice(2,1);
    return JSON.stringify(lotrCitiesArray);
}

const kataProblemNine = () => {
    lotrCitiesArray.splice(5);
    return JSON.stringify(lotrCitiesArray);
}

const kataProblemTen = () => {
    lotrCitiesArray.splice(2,0,"Rohan");
    return JSON.stringify(lotrCitiesArray);
}

const kataProblemEleven = () => {
    lotrCitiesArray.splice(5,1,"Deadest Marshes");
    return JSON.stringify(lotrCitiesArray);
}

const kataProblemTwelve = () => bestThing.slice(0,14);

const kataProblemThirteen = () => bestThing.slice(-12);

const kataProblemFourteen = () => bestThing.slice(23,39);

const kataProblemFifteen = () => bestThing.substring(bestThing.length-12);

const kataProblemSixteen = () => bestThing.substr(23,15);

const kataProblemSeventeen = () => bestThing.indexOf("only");

const kataProblemEighteen = () => bestThing.lastIndexOf(" ")+1;

const kataProblemNineteen = () => {
    let arr = gotCitiesCSV.split(",");
    return arr.filter(match => /aa|ee|ii|oo|uu/i.test(match));
}
const kataProblemTwenty = () => JSON.stringify(lotrCitiesArray.filter(match => match.endsWith("or")));

const kataProblemTwentyOne = () => {
    let arr = bestThing.split(" ");
    return arr.filter(match => match.startsWith("b")).join(", ");
}

const kataProblemTwentyTwo = () => lotrCitiesArray.includes("Mirkwood") ? "Yes" : "No";

const kataProblemTwentyThree = () => lotrCitiesArray.includes("Hollywood") ? "Yes" : "No";

const kataProblemTwentyFour = () => lotrCitiesArray.findIndex(index => index === "Mirkwood");

const kataProblemTwentyFive = () => {
    let arr = lotrCitiesArray.filter(first => first.includes(" "));
    return arr[0];
}

const kataProblemTwentySix = () => lotrCitiesArray.reverse();

const kataProblemTwentySeven = () => lotrCitiesArray.sort();

const kataProblemTwentyEight = () => lotrCitiesArray.sort((a,b) => a.length - b.length);

const kataProblemTwentyNine = () => {
    lotrCitiesArray.pop();
    return lotrCitiesArray;
}

const kataProblemThirty = () => {
    lotrCitiesArray.push("Deadest Marshes");
    return lotrCitiesArray;
}

const kataProblemThirtyOne = () => {
    lotrCitiesArray.shift();
    return lotrCitiesArray;
}

const kataProblemThirtyTwo = () => {
    lotrCitiesArray.unshift("Rohan");
    return lotrCitiesArray;
}

kataHeaderAndAnswer("1. Display an array from the cities in gotCitiesCSV" , kataProblemOne());
kataHeaderAndAnswer("2. Display an array of words from the sentence in bestThings" , kataProblemTwo());
kataHeaderAndAnswer("3. Display a string separated by semi-colons instead of commas from gotCitiesCSV" , kataProblemThree());
kataHeaderAndAnswer("4. Display a CSV (comma-separated) string from the lotrCitiesArray" , kataProblemFour());
kataHeaderAndAnswer("5. Display the first 5 cities in lotrCitiesArray" , kataProblemFive());
kataHeaderAndAnswer("6. Display the last 5 cities in lotrCitiesArray" , kataProblemSix());
kataHeaderAndAnswer("7. Display the 3rd to 5th city in lotrCitiesArray" , kataProblemSeven());
kataHeaderAndAnswer("8. Using splice, remove 'Rohan' from lotrCitiesArray" , kataProblemEight());
kataHeaderAndAnswer('9. Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray' , kataProblemNine());
kataHeaderAndAnswer('10. Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"' , kataProblemTen());
kataHeaderAndAnswer('11. Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray' , kataProblemEleven());
kataHeaderAndAnswer('12. Using slice, display the first 14 characters from bestThing' , kataProblemTwelve());
kataHeaderAndAnswer('13. Using slice, display the last 12 characters from bestThing' , kataProblemThirteen());
kataHeaderAndAnswer('14. Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even"' , kataProblemFourteen());
kataHeaderAndAnswer('15. Repeat #13 using substring instead of slice.' , kataProblemFifteen());
kataHeaderAndAnswer('16. Repeat #14 using substr instead of slice.' , kataProblemSixteen());
kataHeaderAndAnswer('17. Find and display the index of "only" in bestThing' , kataProblemSeventeen());
kataHeaderAndAnswer('18. Find and display the index of the last word in bestThing' , kataProblemEighteen());
kataHeaderAndAnswer('19. Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)' , kataProblemNineteen());
kataHeaderAndAnswer('20. Find and display all cities from lotrCitiesArray that end with "or"' , kataProblemTwenty());
kataHeaderAndAnswer('21. Find and display all the words in bestThing that start with a "b"' , kataProblemTwentyOne());
kataHeaderAndAnswer('22. Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"' , kataProblemTwentyTwo());
kataHeaderAndAnswer('23. Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"' , kataProblemTwentyThree());
kataHeaderAndAnswer('24. Display the index of "Mirkwood" in lotrCitiesArray' , kataProblemTwentyFour());
kataHeaderAndAnswer('25. Find and display the first city in lotrCitiesArray that has more than one word' , kataProblemTwentyFive());
kataHeaderAndAnswer('26. Reverse the order in lotrCitiesArray' , kataProblemTwentySix());
kataHeaderAndAnswer('27. Sort lotrCitiesArray alphabetically' , kataProblemTwentySeven());
kataHeaderAndAnswer('28. Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)' , kataProblemTwentyEight());
kataHeaderAndAnswer('29. Using pop, remove the last city from lotrCitiesArray' , kataProblemTwentyNine());
kataHeaderAndAnswer('30. Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array' , kataProblemThirty());
kataHeaderAndAnswer('31. Using shift, remove the first city from lotrCitiesArray' , kataProblemThirtyOne());
kataHeaderAndAnswer('32. Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array' , kataProblemThirtyTwo());

mainHeader();

