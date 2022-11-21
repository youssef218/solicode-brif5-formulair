

/////////////////////////////  nom  //////////////////////////

document.forms[0].onsubmit = function (e) {

    document.querySelector('.nom2').style.display = 'block'; 
    document.querySelector('.nom').style.display = 'none';

  let result = /^[a-zA-Z]{3,30}$/;
  let teet = result.test(document.getElementById("Nom").value);
  if (teet === false) {
     document.getElementById('messagnom').innerHTML="-- le nom incorrect"
     document.querySelector('#Nom').style.border="2px solid red";
      e.preventDefault();
    }
    else{
        document.getElementById('messagnom').innerHTML="-- nom etre valide"
        document.querySelector('#Nom').style.border="2px solid green";
    }
    

/////////////////////////////////     prenom	  ////////////////////


  let testpr = result.test(document.getElementById("Prénom").value);
  if (testpr === false) {
     document.getElementById('messagpre').innerHTML="-- le prenom incorrect"
     document.querySelector('#Prénom').style.border="2px solid red";
      e.preventDefault();
    }
    else{
        document.getElementById('messagpre').innerHTML="-- prenom etre valide"
        document.querySelector('#Prénom').style.border="2px solid green";
    }

/////////////////////////////////     numero	////////////////////
    let numero = document.getElementById('Télephone').value;
    const tgt=/^[0]{1}[5-7]{1}[0-9]{8}$/.test(numero);
    if(tgt=== true){
        document.getElementById('numiro').innerHTML="-- Numéro etre valide"
        document.querySelector('#Télephone').style.border="2px solid green";
    }
    else{
        document.getElementById('numiro').innerHTML="-- Numéro etre non valide"
        document.querySelector('#Télephone').style.border="2px solid red";
    }


/////////////////////////////////     genre 	////////////////////

  if(document.getElementById("mal").checked===false && document.getElementById("fam").checked===false){
    document.getElementById('messaggenre').innerHTML="-- genre incorrect"
    document.querySelector('#mall').style.color="red";
    document.querySelector('#faml').style.color="red";
    e.preventDefault();
  }
  else{
    document.getElementById('messaggenre').innerHTML="-- genre valide"
    document.querySelector('#mall').style.color="green";
    document.querySelector('#faml').style.color="green";
  }


  /////////////////////////////////    group 	////////////////////
  let op=document.getElementById('group').value;
  if(op==0){
    document.getElementById('messaggrp').innerHTML="-- choisez un groupe..."
    document.querySelector('#group').style.border="2px solid red";
    e.preventDefault();
  }
  else{
    document.getElementById('messaggrp').innerHTML="-- votr goupe et : "+op;
    document.querySelector('#group').style.border="2px solid green";
  }
  /////////////////////////////////   clubs 	////////////////////

  let puch=[];
  for (var option of document.getElementById("cluds").options){
    if (option.selected) {
    puch.push(option);
    }
  }

  if (puch.length==0 ) {
    document.getElementById("messagclub").innerHTML = "-- choisez clubs...";
    document.querySelector("#cluds").style.border = "2px solid red";
    e.preventDefault();
  }
  else if(puch.length>3){
    document.getElementById("messagclub").innerHTML = "-- choisez just 3 clubs";
    document.querySelector("#cluds").style.border = "2px solid red";
  }
  else {
    document.querySelector("#cluds").style.border = "2px solid green";
  }
  // "-- choisez clubs..."


  /////////////////////////////////     email 	////////////////////

  let email=document.getElementById('Email').value;
  const teste=/^[a-zA-Z-.]+[@]{1}[o]{1}[f]{1}[p]{2}[t]{1}[.]{1}[m]{1}[a]{1}$/.test(email)
  if(teste=== false){
    document.getElementById('messagmail').innerHTML="-- email incorrect"
    document.querySelector('#Email').style.border="2px solid red";
    e.preventDefault();
  }
  else{
    document.getElementById('messagmail').innerHTML="-- email valide"
    document.querySelector('#Email').style.border="2px solid green";

  }
  if(teet === true&&testpr === true&&tgt=== true&&document.getElementById("mal").checked===true || document.getElementById("fam").checked===true&&clb!=0&& op==0&&teste=== true){
    window.open("/", "page d'acceille");
  }
};
