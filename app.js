const form = document.querySelector('.quiz-form')
const scoreMessage = document.querySelector('.scoreMessage')

const correctAnswers = ['A', 'E', 'A', 'B']

const checkUserAnswers = event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]){
            score += 25
        }
    })

    scoreMessage.textContent = `Parabéns você acertou ${score}% do questionário!`
}

form.addEventListener('submit', checkUserAnswers)