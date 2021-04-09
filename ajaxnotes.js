// var data = {
//     greeting : "Hello",
//     name: "there"
// }

// var html = function() {
//     return '<p>' + data.greeting + ", " + data.name + "!</p>";
// }

// var greeting = document.querySelector('#greeting');
// greeting.innerHTML = html();

let allPeople = []
let swapi = 'https://swapi.dev/api/people';
// function get(url) {
//     return new Promise(function(resolve, reject) {
//         let req = new XMLHttpRequest();
//         req.open('get', url, true);

//         req.onload = function() {
//             if (req.status == 200) {
//                 resolve(req.response)
//             } else {
//                 reject(Error(req.statusText))
//             }
//         };

//         req.onerror = function() {
//             reject(Error("Network Error"))
//         };
//         req.send();
//     })
// }

// get(swapi)
//     .then(function(response) {
//         allMovies = JSON.parse(response);
//         console.log(allMovies)
//     })
//     .catch(function(err) {
//         console.log(err)
//     });


(async() => {
    let resp = await fetch(swapi)
    allPeople = await resp.json()
    document.querySelector('#greeting').innerHTML = PeopleListDiv(allPeople.results)
})();

function PeopleDiv(peopledata) {
    return `<div>
                <h2>${peopledata.name}</h2>
                <h3>Gender: ${peopledata.gender}</h3>
                <h3>Mass: ${peopledata.mass}</h3>
            </div>`
}

function PeopleListDiv(peoplejson) {
    return `<div>
                ${peoplejson.map(PeopleDiv).join('')}
            </div>`
}

