const baseUrl = "https://riddle-api-delta.vercel.app/";
const random = "riddles";
let riddleAnswer = '';

async function getRiddle() {
    try {
        const riddle = await fetch(baseUrl + random);
        console.log(riddle);

        const riddleJson = await riddle.json();
        console.log(riddleJson);

        document.getElementById("riddleQuestion").innerText = riddleJson.question;

        riddleAnswer = riddleJson.answer;
        console.log(riddleJson.answer);

        // Limpar a resposta anterior
        document.getElementById("answerResult").innerHTML = "";

    } catch (error) {
        console.log("Error when calling API: " + error);
    }
}

getRiddle();

function answerSee() {
    let userAnswer = document.getElementById('answerSubmit').value;
    let answerResultDiv = document.getElementById('answerResult');

    // Converter para minúsculas, remover espaços extras e pontuação
    let normalizedUserAnswer = userAnswer.toLowerCase().replace(/[^\w\s]|_/g, "").trim();
    let normalizedRiddleAnswer = riddleAnswer.toLowerCase().replace(/[^\w\s]|_/g, "").trim();

    if (normalizedUserAnswer === normalizedRiddleAnswer) {
        answerResultDiv.innerHTML = `<p style="color: green;">Correct! The answer is: ${riddleAnswer}</p>`;
    } else {
        answerResultDiv.innerHTML = `<p style="color: red;">Wrong, try again. The correct answer is: ${riddleAnswer}</p>`;
    }
}