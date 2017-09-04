var app = angular.module('target');

app.controller('CadastroCtrl', ['$location', '$routeParams', 'apiFuncionarios', function ($location, $routeParams, apiFuncionarios) {
    var self = this;

    var id = $routeParams.id;
    
    if (id) {
        apiFuncionarios.buscaFuncionario(id).then((resposta) => {
            self.funcionario = resposta.data;
            self.funcionario.edicao = true;
        });
    }

    self.salvarFuncionario = function () {
        if (self.funcionario.edicao) {
            var funcionario = angular.copy(self.funcionario);

            apiFuncionarios.atualizarFuncionario(funcionario)
                .then(() => {
                    $location.path('lista');
                });
        } else {
            var novo = angular.copy(self.funcionario);

            apiFuncionarios.criarFuncionario(novo).then(function (resposta) {
                $location.path('lista');
            });
        }
    };

    self.cancelarEdicao = function () {
        $location.path('lista');
    };
}]);