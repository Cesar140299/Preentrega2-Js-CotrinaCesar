let solicitud_de_turno = prompt("Desea solicitar un turno? Coloque si o no")
const turnos = []

function subir_turnos() {
    if (solicitud_de_turno == "si") {
        let nombre = prompt ("Coloque su nombre")
        let DNI = prompt ("Coloque su DNI")
        let dia = prompt ("Coloque un dia de la semana")
        let hora = prompt("Coloque un horario")
        turnos.push(`Los turnos registrados son: 
        Nombre del paciente: ${nombre}
        DNI: ${DNI} 
        el ${dia} a las ${hora}`)
    } else {
        alert("Entendido, hasta luego")
    }
}

subir_turnos()

console.log (turnos)







