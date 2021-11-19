let rand0=Math.floor(Math.random()*5);
let rand1=Math.floor(Math.random()*5);
let rand2=Math.floor(Math.random()*5);
//let rand3=Math.floor(Math.random()*5);
function run(rand0,rand1,rand2){
    if (rand0==0) {
        console.log('Jupiter is telling me')
    } else if (rand0==1) {
        console.log('Mars is telling me')
    } else if (rand0==2) {
        console.log('Venus influence')
    } else if (rand0==3) {
        console.log('Pluto talkin bout')
    } else if (rand0==4) {
        console.log('Neptune said')
    } else {console.log('error contact your technological astrologer department')}
    //console.log(`you got ${rand0}`)
    
    if (rand1==0) {
        console.log('You gotta answer if for yourself')
    } else if (rand1==1) {
        console.log('yes, deffinetly')
    } else if (rand1==2) {
        console.log('nah brah')
    } else if (rand1==3) {
        console.log('outlook not so good')
    } else if (rand1==4) {
        console.log('outlook good')
    } else {console.log('error contact your technological astrologer department')}
    //console.log(`you got ${rand1}`)

    if (rand2==0) {
        console.log("I'm quite confident")
    } else if (rand2==1) {
        console.log("I'm pretty sure")
    } else if (rand2==2) {
        console.log("I don't really know though")
    } else if (rand2==3) {
        console.log("but I'm wrong, do the opposite")
    } else if (rand2==4) {
        console.log("I'm confident in that")
    } else {console.log('error contact your technological astrologer department')}
    //console.log(`you got ${rand2}`)
}
run(rand0,rand1,rand2);