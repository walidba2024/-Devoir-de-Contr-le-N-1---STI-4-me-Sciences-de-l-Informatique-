// --- Fonction initialisation() ---
// Permet de charger la date système dans le champ date au format AAAA-MM-JJ
function initialisation() {
  // Ciblage du champ date par son ID exact dans votre HTML
  const dateInput = document.getElementById("date_sondage");

  if (dateInput) {
    const aujourdhui = new Date();
    const annee = aujourdhui.getFullYear();

    // Calcul procédural du mois (avec ajout du zéro si < 10)
    let moisInt = aujourdhui.getMonth() + 1;
    let mois = "";
    if (moisInt < 10) {
      mois = "0" + moisInt;
    } else {
      mois = "" + moisInt;
    }

    // Calcul procédural du jour (avec ajout du zéro si < 10)
    let jourInt = aujourdhui.getDate();
    let jour = "";
    if (jourInt < 10) {
      jour = "0" + jourInt;
    } else {
      jour = "" + jourInt;
    }

    // Affectation de la date reconstruite au format textuel AAAA-MM-JJ
    dateInput.value = annee + "-" + mois + "-" + jour;
  }
}

// --- Fonction valider() ---
// Vérifie la liste déroulante du genre et les trois groupes de boutons radio
function valider() {
  const genreSelect = document.getElementById("genre");

  // 1. Validation de la liste déroulante "Genre"
  // Vérifie si la valeur est vide ou si l'index sélectionné est le premier (l'invite)
  if (genreSelect.value === "" || genreSelect.selectedIndex === 0) {
    alert("Veuillez sélectionner votre genre.");
    return false;
  }

  // 2. Validation de la Question 1 (boutons radio 'q1')
  const radiosQ1 = document.getElementsByName("q1");
  let q1Cochee = false;
  for (let i = 0; i < radiosQ1.length; i++) {
    if (radiosQ1[i].checked) {
      q1Cochee = true;
      break; // Option trouvée, on sort de la boucle
    }
  }
  if (!q1Cochee) {
    alert("Veuillez répondre à la question 1.");
    return false;
  }

  // 3. Validation de la Question 2 (boutons radio 'q2')
  const radiosQ2 = document.getElementsByName("q2");
  let q2Cochee = false;
  for (let i = 0; i < radiosQ2.length; i++) {
    if (radiosQ2[i].checked) {
      q2Cochee = true;
      break;
    }
  }
  if (!q2Cochee) {
    alert("Veuillez répondre à la question 2.");
    return false;
  }

  // 4. Validation de la Question 3 (boutons radio 'q3')
  const radiosQ3 = document.getElementsByName("q3");
  let q3Cochee = false;
  for (let i = 0; i < radiosQ3.length; i++) {
    if (radiosQ3[i].checked) {
      q3Cochee = true;
      break;
    }
  }
  if (!q3Cochee) {
    alert("Veuillez répondre à la question 3.");
    return false;
  }

  // Si toutes les conditions sont validées, le formulaire est envoyé
  return true;
}
