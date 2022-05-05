
/* first create user and chatbot
let user = [
    ['hello', 'salut', 'bonjour', 'salam', 'hi'], // index 0
    ['communication', 'manager', 'dev ops'], // index 1
    ["je m'appelle "] // index 2
];
let chatbot = [
    ['hello, veuillez selectionner un post : manager, dev ops, communication ?', 'salut, veuillez selectionner un post : manager, dev ops, communication ?', 'bonjour, veuillez selectionner un post : manager, dev ops, communication ?', 'salam, veuillez selectionner un post : manager, dev ops, communication ?', 'hi, veuillez selectionner un post : manager, dev ops, communication ?'], // index 0
    ['parlez-moi de vous'], // index 1
    ['quel est votre job de rêve ?'], // index 2
    ['Pourquoi avez-vous quitté votre poste précédent ?'] // index 3
];
*/


let questions = [
    "Bonjour je me présente, je suis LéaBot, directrice bot marketing de l'agence. Quel est votre Prénom ?",
    " Enchantée, quel est votre dernier diplôme ?",
    " Parlez-moi de votre parcours professionel ?",
    " Quel a été votre dernier job ?",
    " Avez-vous des hobbies ?",
    " Avez-vous voyagé ?",
    " Très bien votre parcours est interressant, nous allons étudier votre candidature. Nous vous donnerons une réponse dans les jours à venir. A bientot !"
]

/*
let reponseBotRamdom = [
    "Super", 'interressant', "Top Top", "Excellent"
]
*/

let bloc_leaBot = document.querySelector(".leabot .message"); // il va récuperer l'element classe dans le doc html
bloc_leaBot.innerHTML = questions[0]; // change moi le texte dans le doc html du 1er élément du tableau questions
//console.log(bloc_leaBot);

let bloc_moi = document.querySelector(".me .message");;
// bloc_moi.innerHTML += '';

let input = document.getElementById("input"); // permet de selectionner l'élément avec l'id input 
let totalQuestions = questions.length;

/*
console.log(totalQuestions);
input.value = questions[totalQuestions - 1]; // dernier element tableau 
*/

let index = 1; // variable qui commence à la 2eme string du tableau question car la 1ere est déjà affichée

document.getElementById('input').addEventListener('keydown', function(event) {
   // console.log(event.code); // permet d'écouter l'événement de type pression du clavier

    if (event.code === "Enter"){ 
    // si l'événement écouter est Enter alors je rempli le bloc Moi 

        document.querySelector('.me').classList.remove('hide');

        let question = questions[index++]; // incrémente l'index pour afficher les questions suivantes
        bloc_moi.innerHTML = event.currentTarget.value; // va dans le bloc Moi et affiche moi la valeur
        bloc_leaBot.innerHTML = question // ajoute moi dans le bloc leaBot question
        input.value = ' '; // reset le input

       if (question === questions[totalQuestions -1]){
           input.hidden = true; // quand le dernier string du tableau est affiché hide le input
       }
    }
});











/*
input.addEventListener("keydown", function(event) { // permet d'écouter l'événement de type pression du clavier
    if (event.code === "Enter") { // si l'événement écouter est Enter alors je rempli l'élément user et je lance la réponse du chatbot
        let response = event.currentTarget.value; // récupère la valeur de l'input #input
        console.log(response)

        let user = document.getElementById('user') // variable pour selectionner l'élément user 
        user.innerHTML = response; // ajoute la reponse dans l'élément user

        responseBot(response); // fonction qui renvoit la réponse du chatBot
        input.value = ''; // pour reset le input automatiquement quand je rentre la valeur
    }
});

console.log(user.length) // compte élément d'un tableau


//fonction qui répond à la question du user
function responseBot (response) {

    for (let i = 0; i < user.length; i++) {
        const element = user[i];
    
        for (let j = 0; j < element.length; j++) {
            const responseUser = element[j];

                if (responseUser === response) {
                //console.log(chatbot[i][0]);
                let responseChatBot = chatbot[i][Math.floor(Math.random()*chatbot[i].length)];
                //console.log(responseChatBot);
                document.getElementById('chatbot').innerHTML = responseChatBot;
                //console.log(responseChatBot)
                //console.log(responseUser)
                
            }
        }
        //console.log(element) 
    }

}

*/


