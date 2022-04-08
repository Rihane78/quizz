function checkCheckbox () {
    var formateurAnswer = "";
    var capitalAnswer = "";
    var score=0;

    // première question
    if (document.getElementById("capital1").checked)
        {
        score++;
        capitalAnswer=`<p class="goodAnswer">${"Bonne reponse ! "}</p>`
        }else{
        capitalAnswer = `<p class='badAnswer'>${"Mauvaise reponse !"}</p>`
        }
    // deuxième question
    if ((!document.getElementById("formateur1").checked)&&(document.getElementById("formateur2").checked)&&(document.getElementById("formateur3").checked))
        {
        score++;
        formateurAnswer=`<p class="goodAnswer">${"Bonne reponse !"}</p>` 
        }else{
        formateurAnswer=`<p class='badAnswer'>${"Mauvaise reponse !"}</p>`
        }
    //calcul score
    if (score === 0) 
        { 
        totalAnswer = "Votre score est de 0 ! Vous êtes nul !";
        } 
        else if (score === 1) 
        {
        totalAnswer = "Votre score est de 1 ! Vous avez des progès à faire !";
        } 
        else if (score === 2) 
        {
        totalAnswer = "Votre score est de 2 ! Excellent !";
        }        
    document.getElementById("formateurAnswer").innerHTML=formateurAnswer
    document.getElementById("capitalAnswer").innerHTML=capitalAnswer
    document.getElementById("totalAnswer").innerHTML=totalAnswer
}

