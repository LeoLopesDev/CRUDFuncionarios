## Rodando o Projeto
Para rodar o projeto, precisaremos primeiramente estar com o banco de dados rodando
Importar o projeto como projeto Maven
Rodar o projeto no Servidor TomCat
OBS. : Cadastrar alguns setores para que o sistema possa ser testado, via PostMan.
/funcionarios/rest/setores/ -> POST -> { "nome":String }

## Rotas do Sistema
/funcionarios/rest/funcionarios -> listar todos os funcionários (GET)
/funcionarios/rest/funcionarios/id -> editar funcionário por Id (PUT)
/funcionarios/rest/funcionarios/id -> deletar funcionário por Id (DELETE)
/funcionarios/rest/funcionarios -> cadastrar novo funcionário (POST)
