function aplicarMascaraTelefone(input) {
  let valor = input.value.replace(/\D/g, "");
  
  if (valor.length > 11) valor = valor.substring(0, 11);
  
  if (valor.length > 7) {
    input.value = `(${valor.substring(0,2)}) ${valor.substring(2,7)}-${valor.substring(7)}`;
  } else if (valor.length > 2) {
    input.value = `(${valor.substring(0,2)}) ${valor.substring(2)}`;
  } else if (valor.length > 0) {
    input.value = `(${valor}`;
  } else {
    input.value = "";
  }
}

function calcularForcaSenha(senha) {
  let pontos = 0;
  if (senha.length >= 8) pontos++;
  if (/[A-Z]/.test(senha)) pontos++;
  if (/[0-9]/.test(senha)) pontos++;
  if (/[^A-Za-z0-9]/.test(senha)) pontos++; 
  return pontos;
}

function atualizarBarraForca(senha, barraElement) {
  const pontos = calcularForcaSenha(senha);
  let largura = "0%";
  let cor = "#cbd5e1";

  if (senha.length > 0) {
    if (pontos <= 1) { largura = "25%"; cor = "#dc2626"; } 
    else if (pontos === 2) { largura = "50%"; cor = "#eab308"; }
    else if (pontos === 3) { largura = "75%"; cor = "#2563eb"; }
    else { largura = "100%"; cor = "#16a34a"; } 
  }

  barraElement.style.width = largura;
  barraElement.style.backgroundColor = cor;
}