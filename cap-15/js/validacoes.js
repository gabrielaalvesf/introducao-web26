const Validacoes = {
  
  validarNome(nome) {
    if (!nome || nome.trim().length < 3) return "O nome completo deve possuir no mínimo 3 caracteres.";
    return null;
  },

  validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "O campo e-mail é obrigatório.";
    if (!regex.test(email)) return "Por favor, insira um formato de e-mail válido.";
    return null;
  },

  validarTelefone(tel) {
    const regex = /^\(82\) \d{5}-\d{4}$/;
    if (!tel) return "O preenchimento do telefone é obrigatório.";
    if (!regex.test(tel)) return "O telefone deve seguir obrigatoriamente o padrão (82) 99999-9999.";
    return null;
  },

  validarNascimento(dataStr) {
    if (!dataStr) return "A data de nascimento é obrigatória.";
    
    const dataNasc = new Date(dataStr);
    const hoje = new Date();
    
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const m = hoje.getMonth() - dataNasc.getMonth();
    
    if (m < 0 || (m === 0 && hoje.getDate() < dataNasc.getDate())) {
      idade--;
    }
    
    if (idade < 16) return "Inscrição bloqueada. O candidato deve possuir no mínimo 16 anos.";
    return null;
  },

  validarCurso(valor) {
    if (!valor || valor === "") return "Você deve obrigatoriamente selecionar um curso.";
    return null;
  },

  validarTurno(radios) {
    let selecionado = false;
    radios.forEach(r => { if (r.checked) selecionado = true; });
    if (!selecionado) return "Selecione um dos três turnos disponíveis.";
    return null;
  },

  validarInteresses(checkboxes) {
    let contagem = 0;
    checkboxes.forEach(c => { if (c.checked) contagem++; });
    if (contagem < 2) return "Selecione no mínimo 2 áreas de interesse.";
    return null;
  },

  validarSenha(senha) {
    if (!senha) return "A criação de uma senha é obrigatória.";
    if (senha.length < 8) return "A senha deve conter no mínimo 8 caracteres.";
    if (!/[A-Z]/.test(senha)) return "A senha precisa de pelo menos uma letra maiúscula.";
    if (!/[0-9]/.test(senha)) return "A senha precisa de pelo menos um número.";
    return null;
  },

  validarConfirmacao(senha, confirmacao) {
    if (senha !== confirmacao) return "As senhas informadas não coincidem.";
    return null;
  },

  validarMensagem(msg) {
    if (!msg || msg.trim().length < 50) return `Texto muito curto. Você escreveu ${msg.length} dos 50 caracteres mínimos.`;
    if (msg.length > 500) return "Texto excedeu o limite máximo de 500 caracteres.";
    return null;
  },

  validarFoto(file) {
    if (!file) return null; // Campo opcional
    const formatosValidos = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!formatosValidos.includes(file.type)) return "Apenas imagens nos formatos JPG ou PNG são aceitas.";
    if (file.size > 2 * 1024 * 1024) return "O arquivo da foto não pode ultrapassar o tamanho de 2 MB.";
    return null;
  },

  validarTermos(checked) {
    if (!checked) return "Você precisa aceitar os termos regulamentares para enviar.";
    return null;
  }
};