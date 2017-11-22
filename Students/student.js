//JASON  = objects and arrays

//******************
// Java Script Object Notation
//******************
// accssing throw JASON below;
// thePats[1].favFood
//******************
// AJAX stands for Asynchronouse(in the background or not need to reload) JavaScript And xml
// Ajax help not to reload page and access data throw another source.
var pageCounter = 1;
var studentContainer = document.getElementById("student-info");
var btn = document.getElementById('btn');

btn.addEventListener("click", function() {

var ourRequest = new XMLHttpRequest(); //set connnection with another URL
ourRequest.open('GET', 'https://obed123456.github.io/api/students.json');//this is GET request from another URL
ourRequest.onload = function(){ // this function will tell u what todo when data will be load.
    var ourData = JSON.parse(ourRequest.responseText); //if you know data is JSON then add JSON.parse
    renderHTML(ourData);
    //console.log(ourData[0]); // write text on console when you recieve it.
    if(pageCounter > 3){
    	btn.classList.add("hide-me");
    }
}
ourRequest.send();//final step to send request.
// pageCounter++;
});

function renderHTML(data) {
	//var htmlString = "this is a test";
	var htmlString = "";
	for( i= 0; i < data.length; i++){
		htmlString += "<p>" + data[i].name + " age is  " + data[i].age + ". " + "<br>" + "Skills: " + data[i].skills + ". " + "<br>" + "Loves: " + data[i].loves + ". " + "<br>" + "Hates: " + data[i].hates + ". " + "<br>" + "Grupps: " + data[i].grupp + ". " + "<br>" + "Known for: " + data[i].known + ". " + "<br>" + "Favroit Music Artist: " + data[i].music + ". " + "<br>" + "Likes: " + data[i].food.likes[0] + ". " + "<br>" + "</p>";
		htmlString += "<img class='col-md-4' src='" + data[i].name + "'>";
	}
   studentContainer.insertAdjacentHTML("beforeend", htmlString);

}

