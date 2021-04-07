var nome;
var cognome;
var colorePreferito;
nome = prompt("Qual'è il tuo nome?");
cognome = prompt("Qual'è il tuo cognome?");
colorePreferito= prompt("Qual'è il tuo colore preferito?");
document.getElementById("pw-suggested").innerHTML= nome + cognome + colorePreferito + "21";