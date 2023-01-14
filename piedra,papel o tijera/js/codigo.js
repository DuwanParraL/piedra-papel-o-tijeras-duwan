    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function eleccion (jugada){
        if(jugada == 1) {
            resultado = "piedra🥌"
        } else if(jugada == 2) {
            resultado = "papel 🧻"
        } else if(jugada == 3) {
            resultado = "tigeras ✂"
        } else {
            resultado = "elegiste perder"
        }
        return resultado 
    } 
    // 1 es piedra, 2 es papel, 3 es tijeras
    let jugador = 0  
    let pc = 0
    let triunfos = 0
    let derrotas = 0

    while (triunfos < 3 && derrotas < 3) {
            pc = aleatorio (1,3)
            jugador = prompt("elige: 1 para piedra, 2 para papel, 3 para tijeras")
            //alert("elegiste " + jugador)
            alert("pc elige: " + eleccion (pc))
            alert("tu eliges: "+ eleccion (jugador))
            //combate 
            if(pc == jugador)
            {
                alert("Empate")
            } else if(jugador ==1 && pc==3) {
            alert("GANASTE")
            triunfos = triunfos + 1
            } else if(jugador == 2 && pc==1){
                alert("GANASTE")
            triunfos = triunfos + 1
            } else if(jugador == 3 && pc==2){
                alert("GANASTE")
            triunfos = triunfos + 1
            }else {
                alert("Perdiste")
            derrotas = derrotas + 1
            }
    }


    alert("ganaste " + triunfos + " veces. Perdiste " + derrotas+ " veces." )

