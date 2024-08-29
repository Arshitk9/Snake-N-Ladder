let tog=1;
let rollSound = new Audio('dice-142528.mp3')
let player1sum=0;
let player2sum=0;
 
 
 
const play = (player,psum,correction,num) => {
    let sum
    if(psum == 'p1sum'){
        player1sum = player1sum + num
        if(player1sum > 100){
            player1sum = player1sum - num
            // sum = player1sum
        }
        if(player1sum == 1){
            player1sum = 38
        }
        if(player1sum == 4){
            player1sum = 14
        }
        if(player1sum == 8){
            player1sum = 30
        }
        if(player1sum == 21){
            player1sum = 42
        }
        if(player1sum == 28){
            player1sum = 76
        }   
        if(player1sum == 32){
            player1sum = 10
        }
        if(player1sum == 36){   
            player1sum = 6
        }
        if(player1sum == 48){
            player1sum = 26
        }
        if(player1sum == 50){
            player1sum = 67
        }
        if(player1sum == 71){
            player1sum = 92
        }
        if(player1sum == 80){
            player1sum = 99
        }
        if(player1sum == 88){
            player1sum = 24
        }
        if(player1sum == 95){
            player1sum = 56
        }
        if(player1sum == 97){
            player1sum = 78
        }
        sum = player1sum
        
    }
    if (psum == 'p2sum') {
 
        player2sum = player2sum + num
 
        if (player2sum > 100) {
            player2sum = player2sum - num
        }
        
        if (player2sum == 1) {
            player2sum = 38
        }
        if (player2sum == 4) {
            player2sum = 14
        }
        if (player2sum == 8) {
            player2sum = 30
        }
        if (player2sum == 21) {
            player2sum = 42
        }
        if (player2sum == 28) {
            player2sum = 76
        }
        if (player2sum == 32) {
            player2sum = 10
        }
        if (player2sum == 36) {
            player2sum = 6
        }
        if (player2sum == 48) {
            player2sum = 26
        }
        if (player2sum == 50) {
            player2sum = 67
        }
        if (player2sum == 62) {
            player2sum = 18
        }
        if (player2sum == 71) {
            player2sum = 92
        }
        if (player2sum == 80) {
            player2sum = 99
        }
        if (player2sum == 88) {
            player2sum = 24
        }
        if (player2sum == 95) {
            player2sum = 56
        }
        if (player2sum == 97) {
            player2sum = 78
        }
 
        sum = player2sum
    }
 
    document.getElementById(`${player}`).style.transition = "all 0.5s ease";
    if(sum<10){
        document.getElementById(`${player}`).style.left = `${(sum-1)*62}px`;
        document.getElementById(`${player}`).style.top = `${-0*62-correction}px`;
    }
    else if(sum==100){
        // document.getElementById("gameBox").style.display = "none";
        if(player==="p1"){
            document.getElementById("tog").innerHTML = "Player Red won the game";
        }
        else
        document.getElementById("tog").innerHTML = "Player Yellow won the game";
        document.getElementById("dicebtn").style.display = "none";
        return;
        // location.reload();
        
    }
    else {
 
        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)
 
        if (n1 % 2 != 0) {
 
            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
 
            }
 
        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {
 
                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
 
                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }
 
        }
 
    }
 
}
const rollDice = () => {
    rollSound.play();
    const dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerHTML = dice
 
    if(tog % 2 !=0){
        document.getElementById('tog').innerHTML = "Yellow's Turn : "
        play('p1', 'p1sum', 0, dice);
    }
    else if(tog % 2 == 0){
        document.getElementById('tog').innerHTML = "Red's Turn : "
        play('p2', 'p2sum', 55, dice);
    }
    tog = tog + 1;
}