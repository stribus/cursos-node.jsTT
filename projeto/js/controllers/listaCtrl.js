var app = angular.module('target');

app.controller('ListaCtrl', ['apiFuncionarios', '$rootScope', '$location', function (apiFuncionarios, $rootScope, $location) {
    var self = this;
    self.funcionarios = [];
    self.usuarioLogado = false;
    atualizaLista();

    $rootScope.$on('usuarioLogado', function (event, value) {
        self.usuarioLogado = value;
    });

    function atualizaLista () {
        apiFuncionarios.buscaTodos().then(function (resposta) {
            self.funcionarios = resposta.data;
        });    
    };

    self.removerFuncionario = function (id) {
        apiFuncionarios.removerFuncionario(id).then(function (resposta) {
            atualizaLista();

            // atualiza todos ou o algoritmo abaixo
            //
            // self.funcionarios = self.funcionarios.filter(function (funcionario) {
            //     return funcionario.id != id;
            // });
        });
    };

    self.editarFuncionario = function (posicao, funcionario) {
        $location.path('cadastro/editar/' + funcionario.id);
    };

    self.removerSelecionados = function() {
        var funcionariosParaRemover = self.funcionarios.filter(function (funcionario) {
            return funcionario.selecionado;
        });

        var promessas = funcionariosParaRemover.map(function (funcionario) {
            return apiFuncionarios.removerFuncionario(funcionario.id);
        });

        //var promessas = self.funcionarios.reduce(function (memo, funcionario) {
        //     if (funcionario.selecionado) {
        //         var promesa = apiFuncionarios.removerFuncionario(funcionario.id);
        //         memo.push(promesa);
        //     }
        //     return memo;
        // }, [])

        Promise.all(promessas).then(function () {
            atualizaLista();
        });
    };
}]);