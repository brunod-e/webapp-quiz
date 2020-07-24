const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['A', 'E', 'A', 'B']

let score = 0

const getUserAnswers = () => correctAnswers.map((_, index) => 
    form[`inputQuestion${index+1}`].value)

const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index) => {
        const isUserAnswerCorrect = userAnswer === correctAnswers[index]
        
        if (isUserAnswerCorrect){
            score += 25
        }
    })
}

const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
    let counter = 0
    
    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }
        
        let scoreMessage = `Parabéns você acertou ${counter++}% do questionário!`
        finalScoreContainer.querySelector('p').textContent = scoreMessage
        }, 10)
}

const resetScore = () => {
    score = 0
}

const checkUserAnswers = event => {
    event.preventDefault()
    
    const userAnswers = getUserAnswers()
    
    resetScore()
    calculateUserScore(userAnswers) 
    showFinalScore()
    animateFinalScore()
}

form.addEventListener('submit', checkUserAnswers)

