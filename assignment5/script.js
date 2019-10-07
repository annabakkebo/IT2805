/* Part 2 */
console.log('PART 2')
var i;
for (i = 1; i<21; i++){
    console.log(i)
}
/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for(i of numbers){
    if (i % 3==0){
        if (i%5==0){
            console.log("eplekake")
        }
        else{
            console.log("eple")
        }
    }
    else if (i % 5 ==0){
        console.log("kake")
    }
    else {
        console.log(i)
    }
}

/* Part 4 */
document.getElementById('title').innerText = 'Hello, JavaScript';

/* Part 5 */
function changeDisplay () {
    document.getElementById('magic').style.display ="none";
}

function changeVisibility () {
    document.getElementById('magic').style.visibility="hidden";
    document.getElementById('magic').style.display="block";
}

function reset () {
    document.getElementById('magic').style.visibility="visible";
    document.getElementById('magic').style.display="block";
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];
for(i of technologies){
    var node = document.createElement("LI");
    /*var textnode = document.createTextNode(i);
    * node.appendChild(textnode);
    * This can also be used, but I found it easier with the one stated below.*/
    node.innerHTML = i;
    document.getElementById('tech').appendChild(node);
}
