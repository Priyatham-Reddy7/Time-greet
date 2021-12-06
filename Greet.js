import React from 'react'

function Greet() {

    const hour = new Date().getHours();
    let msg = ''
    if(hour >= 5 && hour <12){
        msg ='Good Morning'
    } else if(hour >=12 && hour <16){
        msg="Good Afternoon"
    } else if(hour >=16 && hour <21){
        msg="Good Evening"
    } else{
        msg="Good Night"
    }
    return (
        
        <div>
            <h2>{msg}</h2>
        </div>
    )
}

export default Greet
