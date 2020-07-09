'use strict'

fetch("https://randomuser.me/api?results=10")
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        let users = json.results;
        processUsers(users)
    });

let processUsers = (users) => {
    users.forEach(function(user) {
        let ul = document.getElementById("people");
        let li = document.createElement("li");
        let img = document.createElement("img");
        let divName = document.createElement("div");
        let divLocation = document.createElement("div");
        let fullName = user.name.first + " " + user.name.last;
        let loc = user.location;
        let locName = `${loc.street.number} ${loc.street.name} ${loc.city}  ${loc.state}`
        img.src = user.picture.thumbnail;
        divName.appendChild(document.createTextNode(fullName));
        divName.addEventListener('click', function() { toggleVisbility(this, user.name.first, user.name.last) })
        divLocation.appendChild(document.createTextNode(locName));
        li.appendChild(img)
        li.appendChild(divName)
        li.appendChild(divLocation)
        divName.style.color = "blue"
        divLocation.style.display = 'none';
        divLocation.style.textDecoration = "underline";
        divLocation.style.paddingLeft = "13px";
        divName.style.display = "inline"
        ul.appendChild(li)
    });
};

let toggleVisbility = (e, firstName, lastName) => {
    let display = window.getComputedStyle(e.nextSibling).display;
    if (display == 'block') {
        e.nextSibling.style.display = 'none'
        e.style.color = "blue"
        e.innerText = firstName + " " + lastName;
    };
    if (display == 'none') {
        e.nextSibling.style.display = 'block'
        e.style.color = "red"
        e.innerText = lastName + ", " + firstName;
    };
};