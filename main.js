function annoy(){
    var answer = prompt("Are we there yet?","answer");
    if(answer == 'yes' || answer == 'yeah'){
        alert('Yay, we finally made it!')
    }else{
        annoy()
    }
}