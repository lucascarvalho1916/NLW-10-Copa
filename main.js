function createGame (player1,hour,player2) {
    return `
    <li>
    <img src="./assets/icon-${player1}.svg" 
    alt="Bandeira ${player1}"/>
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" 
    alt="Bandeira ${player2}"/>    
</li>
 `
}

let delay = -0.3;
function createCard (date,day,games) {
    delay = delay + 0.3 ;
    return `
    <div class="card" style ="animation-delay: ${delay}s ">
    <h2>${date}<span>${day}</span></h2>
     <ul>
       ${games}
    </ul>
</div>
    `
}

document.querySelector("#cards").innerHTML = 


createCard("21/11", "Segunda",
   createGame ("england","10:00","iran") +
   createGame ("senegal","13:00","netherlands") +
   createGame ("united-states","16:00","wales")
   ) +

createCard("22/11", "Terça",
   createGame ("argentina","07:00","saudi-arabia")+
   createGame ("denmark","10:00","tunisia") +
   createGame ("mexico","13:00","poland") +
   createGame ("france","16:00","australia")
   ) +

   createCard("23/11", "Quarta",
   createGame ("morocco","07:00","croatia")+
   createGame ("germany","10:00","japan") +
   createGame ("spain","13:00","costa-rica") +
   createGame ("belgium","16:00","canada")
   ) +

   createCard("24/11", "Quinta",
   createGame ("switzerland","07:00","cameroon")+
   createGame ("uruguay","10:00","south-korea") +
   createGame ("portugal","13:00","ghana") +
   createGame ("brazil","16:00","serbia")
   ) +

   createCard("25/11", "Sexta",
   createGame ("wales","07:00","iran")+
   createGame ("qatar","10:00","senegal") +
   createGame ("netherlands","13:00","ecuador") +
   createGame ("england","16:00","united-states")
   ) +

   createCard("26/11", "Sábado",
   createGame ("tunisia","07:00","australia")+
   createGame ("poland","10:00","saudi-arabia") +
   createGame ("france","13:00","denmark") +
   createGame ("argentina","16:00","mexico")
   ) 
