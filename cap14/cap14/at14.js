const fotoPerfil = document.getElementById('fotoPerfil');
const nomePerfil = document.getElementById('nomePerfil');
const cursoPerfil = document.getElementById('cursoPerfil');
const biografiaPerfil = document.getElementById('biografiaPerfil');
const cardPerfil = document.getElementById('perfil');

const temaSelect = document.getElementById('temaSelect');
const fonteRange = document.getElementById('fonteRange');
const valorFonte = document.getElementById('valorFonte');
const mostrarBio = document.getElementById('mostrarBio');

const emailInput = document.getElementById('emailInput');
const telefoneInput = document.getElementById('telefoneInput');
const emailExibido = document.getElementById('emailExibido');
const telefoneExibido = document.getElementById('telefoneExibido');
const btnAtualizarContato = document.getElementById('btnAtualizarContato');

const contadorAcoes = document.getElementById('contadorAcoes');
const ultimaAcao = document.getElementById('ultimaAcao');

const btnAlterarNome = document.getElementById('btnAlterarNome');
const btnAlterarCurso = document.getElementById('btnAlterarCurso');
const btnAlterarFoto = document.getElementById('btnAlterarFoto');
const btnDestacarPerfil = document.getElementById('btnDestacarPerfil');
const btnRestaurar = document.getElementById('btnRestaurar');

let totalAcoes = 0;

const estadoOriginal = {
  nome: "João Silva",
  curso: "Técnico em Informática",
  foto: "imagens/perfil1.jpg",
  bioExibida: true,
  tamanhoFonte: "16px",
  tema: "claro"
};

function registrarAcao(nomeDaAcao) {
  totalAcoes++;
  contadorAcoes.textContent = totalAcoes;
  ultimaAcao.textContent = nomeDaAcao;
}

btnAlterarNome.addEventListener('click', () => {
  nomePerfil.textContent = "Gabriela Alves Ferreira";
  registrarAcao("Alteração de Nome");
});

btnAlterarCurso.addEventListener('click', () => {
  cursoPerfil.textContent = "Bacharelado em Sistemas de Informação";
  registrarAcao("Alteração de Curso");
});

btnAlterarFoto.addEventListener('click', () => {
  fotoPerfil.src = "imagens/perfil2.jpg";
  registrarAcao("Alteração de Foto");
});

fotoPerfil.addEventListener('error', () => {
  fotoPerfil.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop";
});

btnDestacarPerfil.addEventListener('click', () => {
  cardPerfil.classList.add('perfil-destacado');
  registrarAcao("Destaque de Perfil");
});

btnRestaurar.addEventListener('click', () => {
  nomePerfil.textContent = estadoOriginal.nome;
  cursoPerfil.textContent = estadoOriginal.curso;
  fotoPerfil.src = estadoOriginal.foto;
  cardPerfil.classList.remove('perfil-destacado');
  
  biografiaPerfil.style.display = "block";
  mostrarBio.checked = true;
  biografiaPerfil.style.fontSize = estadoOriginal.tamanhoFonte;
  fonteRange.value = 16;
  valorFonte.textContent = estadoOriginal.tamanhoFonte;
  
  document.body.className = "";
  temaSelect.value = estadoOriginal.tema;
  
  registrarAcao("Restauração do Perfil");
});

temaSelect.addEventListener('change', (e) => {
  const temaEscolhido = e.target.value;
  
  document.body.classList.remove('tema-escuro', 'tema-azul');
  
  if (temaEscolhido === 'escuro') {
    document.body.classList.add('tema-escuro');
  } else if (temaEscolhido === 'azul') {
    document.body.classList.add('tema-azul');
  }
  
  registrarAcao(`Mudança de tema para ${temaEscolhido}`);
});

fonteRange.addEventListener('input', (e) => {
  const tamanho = e.target.value;
  valorFonte.textContent = `${tamanho}px`;
  biografiaPerfil.style.fontSize = `${tamanho}px`;
  registrarAcao("Ajuste da fonte da biografia");
});

mostrarBio.addEventListener('change', (e) => {
  if (e.target.checked) {
    biografiaPerfil.style.display = "block";
    registrarAcao("Exibir Biografia");
  } else {
    biografiaPerfil.style.display = "none";
    registrarAcao("Ocultar Biografia");
  }
});

btnAtualizarContato.addEventListener('click', () => {
  const emailValue = emailInput.value.trim();
  const telefoneValue = telefoneInput.value.trim();
  
  emailExibido.textContent = emailValue ? `E-mail: ${emailValue}` : "E-mail: não informado";
  telefoneExibido.textContent = telefoneValue ? `Telefone: ${telefoneValue}` : "Telefone: não informado";
  
  registrarAcao("Atualização de Contatos");
});