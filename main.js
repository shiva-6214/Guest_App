name_of_people = [];

function submit() {
    var guestName = document.getElementById("txtGuestName").value;
    name_of_people.push(guestName);

    console.log(name_of_people);
    document.getElementById("guestsDiv1").innerHTML = name_of_people;
    document.getElementById("txtGuestName").value = "";
}

function show() {
    var remove_commas = name_of_people.join("<br>");
    document.getElementById("orderDiv2").innerHTML = remove_commas;
    console.log(remove_commas);
}

function sorting() {
    name_of_people.sort();

    var remove_commas = name_of_people.join("<br>");

    document.getElementById("sortList").innerHTML = remove_commas;
}

function searching() {
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;

    for (j = 0; j < name_of_people.length; j++) {
        if (s == name_of_people[j]) {
            found = found + 1;
        }
    }

    console.log(found);

    console.log("found name " + found + " time/s");
    document.getElementById("searchP").innerHTML = "found name " + found + " time/s";
}