
//La fonction qui se lance au moment de valider, écouter l'évenment sur submit, le click
  document.getElementById("submit").addEventListener("click", function(){

  //Déclaration de 4 variables
  var lastname = document.getElementById("lastname").value;
  var firstname = document.getElementById("firstname").value;
  var city = document.getElementById("city").value;
  var regex = /^[a-zA-ZÂ-ÿ- ]+$/;
  if (regex.test(lastname)){
      alert("Nom : " + lastname  + "\nPrénom : " + firstname + "\nVille : " + city);
      } else {
        alert("Saisie incorrecte");
        }
  });
