document.getElementById("knop").addEventListener("click", draw);

//function fun() {
   // document.getElementById("textElement").innerHTML = "Lol!";
//}

var up = document.getElementById('up');
var down = document.getElementById('down');

function draw() {



            let randomnumber1 = Math.floor(Math.random() * 200) +100;
            console.log(randomnumber1);
            let randomnumber2 = Math.floor(Math.random() * 200) +100;
            console.log(randomnumber2);



         var img = document.createElement('img');
         img.src =
            'http://placekitten.com/'+ randomnumber1 + "/" + randomnumber2;
         document.getElementById('body').appendChild(img);

}

