const playHuman = (humanChoice) => {
    
    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    
    console.log("Humano " + human + "Maquina " + machine)
}