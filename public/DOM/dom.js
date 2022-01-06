function markSquare(square) {
    square.innerHTML="X";
};

function updateRoomGrid(roomGrid, last) {
    console.log(last);
    console.log(roomGrid);
    if(last=="grid1") {
        grid1.classList.add('animate__animated', 'animate__flip');
    } else if(last=="grid2"){
        grid2.classList.add('animate__animated', 'animate__flip');
    } else if(last=="grid3"){
        grid3.classList.add('animate__animated', 'animate__flip');
    } else if(last=="grid4"){
        grid4.classList.add('animate__animated', 'animate__flip');
    } else if(last=="grid5"){
        grid5.classList.add('animate__animated', 'animate__flip');
    } else if(last=="grid4"){
        grid6.classList.add('animate__animated', 'animate__flip');
    } else if(last=="grid7"){
        grid7.classList.add('animate__animated', 'animate__flip');
    } else if(last=="grid8"){
        grid8.classList.add('animate__animated', 'animate__flip');
    } else if(last=="grid9"){
        grid9.classList.add('animate__animated', 'animate__flip');
    }
    
    grid1.innerHTML=roomGrid[0];
    grid2.innerHTML=roomGrid[1];
    grid3.innerHTML=roomGrid[2];
    grid4.innerHTML=roomGrid[3];
    grid5.innerHTML=roomGrid[4];
    grid6.innerHTML=roomGrid[5];
    grid7.innerHTML=roomGrid[6];
    grid8.innerHTML=roomGrid[7];
    grid9.innerHTML=roomGrid[8];

};
