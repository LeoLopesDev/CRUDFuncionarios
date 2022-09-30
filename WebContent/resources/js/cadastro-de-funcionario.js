var inicio = new Vue({
  el: "#app",
  data: {
    nome: "",
    setor: null,
    idade: null,
    email: "",
    salario: null,
    listaSetores: [],
  },
  created: function () {
    this.buscarSetores();

  },
  methods: {
    //Busca os itens para a lista da primeira página
    criarFuncionario: function () {
      const vm = this;
      axios.post("/funcionarios/rest/funcionarios", {
        nome: vm.$data.nome,
        setor: { id: Number(vm.$data.setor) },
        idade: Number(vm.$data.idade),
        salario: Number(vm.$data.salario),
        email: vm.$data.email,
      })
        .then(response => {
          window.alert(`Usuário Criado`)
          vm.limparFormulario();
        })
    },
    buscarSetores() {
      const vm = this;
      axios.get('/funcionarios/rest/setores')
        .then((response) => {
          vm.listaSetores = response.data;
        }).catch((error) => {
          vm.mostraAlertaErro("Erro interno", "Não foi possível lista setores")
        })
    },
    limparFormulario() {
      const vm = this;
      vm.$data.nome = "";
      vm.$data.setor = null;
      vm.$data.idade = null;
      vm.$data.salario = null;
      vm.$data.email = "";
    },
    mostraAlertaErro: function (erro, mensagem) {
      console.log(erro);
      alert(mensagem);
    }
  }
});