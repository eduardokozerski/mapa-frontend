// MENU-TOGGLE: Abre e fecha o menu de navegação em telas pequenas
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

// Alterna a classe 'ativo' para mostrar ou esconder o menu
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("ativo");
});

// BOTÃO VOLTAR AO TOPO: Mostra o botão ao rolar a página e faz rolagem suave ao topo
const btnTopo = document.getElementById("btn-topo");

// Ao clicar no botão, rola suavemente para o topo da página
btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// FORMULÁRIO DE CONTATO: Simula o envio do formulário e exibe mensagem de sucesso
const formContato = document.getElementById("form-contato");
if (formContato) {
  formContato.addEventListener("submit", function (e) {
    e.preventDefault();

    // Exibe mensagem de sucesso para o usuário
    alert("Mensagem enviada com sucesso! Obrigado pelo contato.");

    // Limpa os campos do formulário após o envio simulado
    formContato.reset();
  });
}
