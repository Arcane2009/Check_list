function fazer(li, feito){
    li.classList.toggle(feito);
    atualizarProgresso();
}

function atualizarProgresso() {
  const tarefas = document.querySelectorAll("#lista li");
  const feitas = document.querySelectorAll("#lista li.feito");
  const barra = document.querySelector("#progresso-barra");

  if (tarefas.length === 0) return;

  const porcentagem = (feitas.length / tarefas.length) * 100;
  barra.style.width = porcentagem + "%";
}