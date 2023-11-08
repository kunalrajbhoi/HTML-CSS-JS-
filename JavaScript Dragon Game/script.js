
score = 0;
cross = true;

document.onkeydown = function(e){
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox + 112 + "px";
       
    }

    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinox - 112) + "px";
       
    }
   
}


setInterval(() => {

    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle =  document.querySelector('.obstacle')

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));

    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));

    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetx = Math.abs(dx-ox);

    offsety = Math.abs(dy-oy);

    if(offsetx < 93 && offsety < 52){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
    }
    else if(offsetx < 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }

}, 100);


function updateScore(score){
    scoreCont.innerHTML = "your Score: " + score
}