document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCadastro");
  
  const fields = {
    nome: document.getElementById("nome"),
    email: document.getElementById("email"),
    telefone: document.getElementById("telefone"),
    nascimento: document.getElementById("nascimento"),
    curso: document.getElementById("curso"),
    senha: document.getElementById("senha"),
    confirmarSenha: document.getElementById("confirmarSenha"),
    mensagem: document.getElementById("mensagem"),
    foto: document.getElementById("foto"),
    termos: document.getElementById("termos")
  };

  const barraForca = document.getElementById("forcaSenhaBarra");
  const contadorCaracteres = document.getElementById("contadorCaracteres");
  const imagePreview = document.getElementById("imagePreview");
  const btnVerSenha = document.getElementById("btnVerSenha");

  const modal = document.getElementById("modalConfirmacao");
  const modalCancelar = document.getElementById("modalCancelar");
  const modalConfirmar = document.getElementById("modalConfirmar");
  const alertaSucesso = document.getElementById("alertaSucesso");

  function restaurarDadosSalvos() {
    const salvos = localStorage.getItem("inscricao_rascunho");
    if (salvos) {
      const dados = JSON.parse(salvos);
      if (dados.nome) fields.nome.value = dados.nome;
      if (dados.email) fields.email.value = dados.email;
      if (dados.telefone) fields.telefone.value = dados.telefone;
      if (dados.nascimento) fields.nascimento.value = dados.nascimento;
      if (dados.curso) fields.curso.value = dados.curso;
      if (dados.mensagem) {
        fields.mensagem.value = dados.mensagem;
        contadorCaracteres.textContent = dados.mensagem.length;
      }
    }
  }
  restaurarDadosSalvos();

  function aplicarFeedback(field, erroMsg, erroId) {
    const spanErro = document.getElementById(erroId);
    if (erroMsg) {
      spanErro.textContent = erroMsg;
      field.classList.add("invalido");
      field.classList.remove("valido");
      return false;
    } else {
      spanErro.textContent = "";
      field.classList.add("valido");
      field.classList.remove("invalido");
      return true;
    }
  }

  fields.nome.addEventListener("input", () => {
    aplicarFeedback(fields.nome, Validacoes.validarNome(fields.nome.value), "erro-nome");
  });

  fields.email.addEventListener("input", () => {
    aplicarFeedback(fields.email, Validacoes.validarEmail(fields.email.value), "erro-email");
  });

  fields.telefone.addEventListener("input", () => {
    aplicarMascaraTelefone(fields.telefone);
    aplicarFeedback(fields.telefone, Validacoes.validarTelefone(fields.telefone.value), "erro-telefone");
  });

  fields.senha.addEventListener("input", () => {
    atualizarBarraForca(fields.senha.value, barraForca);
    aplicarFeedback(fields.senha, Validacoes.validarSenha(fields.senha.value), "erro-senha");
    if (fields.confirmarSenha.value) {
      aplicarFeedback(fields.confirmarSenha, Validacoes.validarConfirmacao(fields.senha.value, fields.confirmarSenha.value), "erro-confirmarSenha");
    }
  });

  fields.confirmarSenha.addEventListener("input", () => {
    aplicarFeedback(fields.confirmarSenha, Validacoes.validarConfirmacao(fields.senha.value, fields.confirmarSenha.value), "erro-confirmarSenha");
  });

  fields.mensagem.addEventListener("input", () => {
    const texto = fields.mensagem.value;
    contadorCaracteres.textContent = texto.length;
    aplicarFeedback(fields.mensagem, Validacoes.validarMensagem(texto), "erro-mensagem");
  });

  
  btnVerSenha.addEventListener("click", () => {
    if (fields.senha.type === "password") {
      fields.senha.type = "text";
      btnVerSenha.textContent = "Esconder";
    } else {
      fields.senha.type = "password";
      btnVerSenha.textContent = "Mostrar";
    }
  });

  fields.foto.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const erro = Validacoes.validarFoto(file);
    const valido = aplicarFeedback(fields.foto, erro, "erro-foto");
    
    if (valido && file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        imagePreview.src = event.target.result;
        imagePreview.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      imagePreview.style.display = "none";
      imagePreview.src = "";
    }
  });

  form.addEventListener("input", () => {
    const rascunho = {
      nome: fields.nome.value,
      email: fields.email.value,
      telefone: fields.telefone.value,
      nascimento: fields.nascimento.value,
      curso: fields.curso.value,
      mensagem: fields.mensagem.value
    };
    localStorage.setItem("inscricao_rascunho", JSON.stringify(rascunho));
  });

  function validarFormularioCompleto() {
    let status = true;
    
    if (!aplicarFeedback(fields.nome, Validacoes.validarNome(fields.nome.value), "erro-nome")) status = false;
    if (!aplicarFeedback(fields.email, Validacoes.validarEmail(fields.email.value), "erro-email")) status = false;
    if (!aplicarFeedback(fields.telefone, Validacoes.validarTelefone(fields.telefone.value), "erro-telefone")) status = false;
    if (!aplicarFeedback(fields.nascimento, Validacoes.validarNascimento(fields.nascimento.value), "erro-nascimento")) status = false;
    if (!aplicarFeedback(fields.curso, Validacoes.validarCurso(fields.curso.value), "erro-curso")) status = false;
    if (!aplicarFeedback(fields.senha, Validacoes.validarSenha(fields.senha.value), "erro-senha")) status = false;
    if (!aplicarFeedback(fields.confirmarSenha, Validacoes.validarConfirmacao(fields.senha.value, fields.confirmarSenha.value), "erro-confirmarSenha")) status = false;
    if (!aplicarFeedback(fields.mensagem, Validacoes.validarMensagem(fields.mensagem.value), "erro-mensagem")) status = false;
    if (!aplicarFeedback(fields.termos, Validacoes.validarTermos(fields.termos.checked), "erro-termos")) status = false;

    const turnos = document.querySelectorAll('input[name="turno"]');
    if (!aplicarFeedback(turnos[0], Validacoes.validarTurno(turnos), "erro-turno")) status = false;

    const interesses = document.querySelectorAll('input[name="interesse"]');
    if (!aplicarFeedback(interesses[0], Validacoes.validarInteresses(interesses), "erro-interesse")) status = false;

    return status;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (validarFormularioCompleto()) {
      modal.style.display = "flex"; 
    }
  });

  modalCancelar.addEventListener("click", () => { modal.style.display = "none"; });

  modalConfirmar.addEventListener("click", () => {
    modal.style.display = "none";
    localStorage.removeItem("inscricao_rascunho"); 
    form.reset();
    
    document.querySelectorAll(".valido").forEach(el => el.classList.remove("valido"));
    imagePreview.style.display = "none";
    barraForca.style.width = "0%";
    contadorCaracteres.textContent = "0";

    alertaSucesso.style.display = "block";
    setTimeout(() => { alertaSucesso.style.display = "none"; }, 4000);
  });
});