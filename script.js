document.getElementById("imcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  const imc = peso / (altura * altura);

  let categoria;
  if (imc < 18.5) {
    categoria = "Magreza";
  } else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Normal";
  } else if (imc >= 24.9 && imc < 30) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidade";
  }

  document.getElementById("resultado").innerHTML = `
        <h2>Resultado:</h2>
        <p>Seu IMC é: ${imc.toFixed(2)}</p>
        <p>Categoria: ${categoria}</p>
    `;
});
