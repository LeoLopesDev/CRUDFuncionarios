var inicio = new Vue({
	el:"#inicio",
    data: {
        lista: []
    },
    created: function(){
        let vm =  this;
        vm.listarFuncionarios();
    },
    methods:{
	//Busca os itens para a lista da primeira página
        listarFuncionarios: function(){
			const vm = this;
			axios.get("/funcionarios/rest/funcionarios")
			.then(response => {vm.lista = response.data;
			}).catch(function (error) {
				vm.mostraAlertaErro("Erro interno", "Não foi possível listar natureza de serviços");
			}).finally(function() {
			});
		},
		mostraAlertaErro: function(erro, mensagem){
			console.log(erro);
			alert(mensagem);
		}
    }
});