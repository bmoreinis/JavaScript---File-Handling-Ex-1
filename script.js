//Solution to part 1 
//var bikes = ["Perseid","Lomond","Retford","Timbuktu"];
//var output = [];
//for (bike of bikes){
//  output.push(bike+'\n');
//} 

//Solution to part 2
var tempsByDay = [["Monday",11.2,15.6],["Tuesday",12.4,16.5],["Wednesday",13.9,19.6]]

var output=[];
for (day of tempsByDay){
  output.push(day+'\n')
}

var data = new Blob(output, {type: 'text/plain'});
 
var url = window.URL.createObjectURL(data);
document.getElementById('download_link').href = url;