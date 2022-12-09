var sum =
 fetch('info.json')
 .then((response) => response.json())
 .then((data) => datahalen(data));
function datahalen(data){

    let ages = data.map((item) => item.age);
    let names = data.map((item) => item.name);
    let addresses = data.map((item) => item.address);
    
    console.log(ages[0]);
    console.log(names[0]);
    console.log(addresses[0]);

    data.forEach(element => console.log(element.name, element.balance));

    document.getElementById('name0').innerHTML = document.write = "Name: " + names[0];
    document.getElementById('age0').innerHTML = document.write = "Age: " + ages[0];
    document.getElementById('place0').innerHTML = document.write = "Place: " + addresses[0];

    document.getElementById('name1').innerHTML = document.write = "Name: " + names[1];
    document.getElementById('age1').innerHTML = document.write = "Age: " + ages[1];
    document.getElementById('place1').innerHTML = document.write = "Place: " + addresses[1];
    
    document.getElementById('name2').innerHTML = document.write = "Name: " + names[2];
    document.getElementById('age2').innerHTML = document.write = "Age: " + ages[2];
    document.getElementById('place2').innerHTML = document.write = "Place: " + addresses[2];
}
