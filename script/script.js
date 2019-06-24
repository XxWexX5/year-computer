var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://apis.webhub.com.br/iconic-pcs/modelos');
ourRequest.onload = function () {
    var computer = JSON.parse(ourRequest.responseText);
    
    var indice = 1;
    var qtd_itens = computer.length;
    var qtd_indice = qtd_itens / 5;
    var item_final = (indice * 5) - 1;
    var item_comeco = (item_final) - 4;
    var geral = [];

    function mostrarDados(ind) {
        var indice = ind;
        var qtd_itens = computer.length;
        var qtd_indice = qtd_itens / 5;
        var item_final = (indice * 5) - 1;
        var item_comeco = (item_final) - 4;
        conteudoCard.innerHTML = "";
        for (var i = item_comeco; i <= item_final; i++) {
            exibirJson(i);
        }
    }

    // Inicializando conteúdo
    initPage();

    function initPage() {
        mostrarDados(1);

        conteudoCard.innerHTML = "";
        for (var i = item_comeco; i <= item_final; i++) {
            exibirJson(i);
        }
    }
    // --------------------------------------------------------------
    
    // Clicando no botão esquerda
    var setaEsq = document.getElementById("setaEsquerda");
    setaEsq.onclick = cliqueEsquerda;

    function cliqueEsquerda() {
        window.scrollTo(0, 0);
        indice--;
        if (indice < 1) {
            indice = 1;
        }
        if (indice > qtd_indice) {
            indice = qtd_indice;
        }
        mostrarDados(indice);
    }
    // --------------------------------------------------------------

    // Clicando no botão direita
    var setaDir = document.getElementById("setaDireita");
    setaDir.onclick = cliqueDireita;

    function cliqueDireita() {
        window.scrollTo(0, 0);
        indice++;
        if (indice < 1) {
            indice = 1;
        }
        if (indice > qtd_indice) {
            indice = qtd_indice;
        }
        mostrarDados(indice);
    }
    // --------------------------------------------------------------

    // Monstrando conteúdo JSON
    function exibirJson(item) {
        var conteudoCard = document.getElementById("conteudoCard");

        conteudoCard.innerHTML += "<div class='card'> <span class='indice numero'>" + computer[item].id + "</span> <img src='" + computer[item].image + "' alt='' class='img-responsive imagem'> <h2 class='titulo'>" + computer[item].nome + " &#8212; " + computer[item].ano_lancamento + "</h2> <ul> <li> <h3>Fabricante:</h3> <p class='fabricante'>" + computer[item].fabricante + "</p> </li> <li> <h3>Sistema:</h3> <p class='sistema'>" + computer[item].sistema_operacional + "</p> </li> <li> <h3>CPU:</h3> <p class='cpu'>" + computer[item].cpu + "</p> </li> <li> <h3>Memoria:</h3> <p class='memoria'>" + computer[item].memoria + "</p> </li> <li> <h3>Armazenamento:</h3> <p class='armazenamento'>" + computer[item].armazenamento + "</p> </li> </ul> <div class='preco'> <span class='simbolo'>$</span> <span class='valor val'>" + computer[item].preco_inicial + "</span> </div> </div> ";
    }
    // --------------------------------------------------------------

    // Ordernando Ano
    function ordenandoAno(item) {
        var nulo = 0;
        var conteudoCard = document.getElementById("conteudoCard");

        for (var i = 0; i < qtd_itens; i++) {
            if (item == computer[i].ano_lancamento) {
                
                var conteudoCard = document.getElementById("conteudoCard");

                conteudoCard.innerHTML += "<div class='card'> <span class='indice numero'>" + computer[i].id + "</span> <img src='" + computer[i].image + "' alt='' class='img-responsive imagem'> <h2 class='titulo'>" + computer[i].nome + " &#8212; " + computer[i].ano_lancamento + "</h2> <ul> <li> <h3>Fabricante:</h3> <p class='fabricante'>" + computer[i].fabricante + "</p> </li> <li> <h3>Sistema:</h3> <p class='sistema'>" + computer[i].sistema_operacional + "</p> </li> <li> <h3>CPU:</h3> <p class='cpu'>" + computer[i].cpu + "</p> </li> <li> <h3>Memoria:</h3> <p class='memoria'>" + computer[i].memoria + "</p> </li> <li> <h3>Armazenamento:</h3> <p class='armazenamento'>" + computer[i].armazenamento + "</p> </li> </ul> <div class='preco'> <span class='simbolo'>$</span> <span class='valor val'>" + computer[i].preco_inicial + "</span> </div> </div> ";
                
                break;
            }

        }
    }
    // --------------------------------------------------------------
    
    // Ordernando Nome
    function ordenandoNome(item) {
        var conteudoCard = document.getElementById("conteudoCard");

        for (var i = 0; i < qtd_itens; i++) {
            if (item == computer[i].nome) {
                var conteudoCard = document.getElementById("conteudoCard");

                conteudoCard.innerHTML += "<div class='card'> <span class='indice numero'>" + computer[i].id + "</span> <img src='" + computer[i].image + "' alt='' class='img-responsive imagem'> <h2 class='titulo'>" + computer[i].nome + " &#8212; " + computer[i].ano_lancamento + "</h2> <ul> <li> <h3>Fabricante:</h3> <p class='fabricante'>" + computer[i].fabricante + "</p> </li> <li> <h3>Sistema:</h3> <p class='sistema'>" + computer[i].sistema_operacional + "</p> </li> <li> <h3>CPU:</h3> <p class='cpu'>" + computer[i].cpu + "</p> </li> <li> <h3>Memoria:</h3> <p class='memoria'>" + computer[i].memoria + "</p> </li> <li> <h3>Armazenamento:</h3> <p class='armazenamento'>" + computer[i].armazenamento + "</p> </li> </ul> <div class='preco'> <span class='simbolo'>$</span> <span class='valor val'>" + computer[i].preco_inicial + "</span> </div> </div> ";

                break;
            }
        }
    }
    // --------------------------------------------------------------
    
    // Clicando em ordernar por ordem crescente ano
    var ca = document.getElementById("orderCA");
    ca.onclick = cliqueCA;

    function cliqueCA() {
        window.scrollTo(0, 0);
        conteudoCard.innerHTML = "";
        ordenandoCrescenteAno();

        function ordenandoCrescenteAno() {
            for (var i = 0; i < qtd_itens; i++) {
                geral[i] = computer[i].ano_lancamento;
            }

            geral.sort();

            for (var j = 0; j < geral.length; j++) {
                ordenandoAno(geral[j]);
            }
        }
    }
    // --------------------------------------------------------------

    // Clicando em ordernar por ordem decrescente ano
    var da = document.getElementById("orderDA");
    da.onclick = cliqueDA;

    function cliqueDA() {
        window.scrollTo(0, 0);
        conteudoCard.innerHTML = "";
        ordenandoDecrescenteAno();

        function ordenandoDecrescenteAno() {
            for (var i = 0; i < qtd_itens; i++) {
                geral[i] = computer[i].ano_lancamento;
            }

            geral.sort(ordenacao);

            for (var j = 0; j < geral.length; j++) {
                ordenandoAno(geral[j]);
            }
        }

        function ordenacao(a, b) {
            return b - a;
        }
    }
    // --------------------------------------------------------------

    // Clicando em ordernar por ordem crescente nome
    var cn = document.getElementById("orderCN");
    cn.onclick = cliqueCN;

    function cliqueCN() {
        window.scrollTo(0, 0);
        conteudoCard.innerHTML = "";
        ordenandoCrescenteNome();

        function ordenandoCrescenteNome() {
            for (var i = 0; i < qtd_itens; i++) {
                geral[i] = computer[i].nome;
            }

            geral.sort();

            for (var j = 0; j < geral.length; j++) {
                ordenandoNome(geral[j]);
            }
        }
    }
    // --------------------------------------------------------------
    
    // Clicando em ordernar por ordem decrescente nome
    var dn = document.getElementById("orderDN");
    dn.onclick = cliqueDN;

    function cliqueDN() {
        window.scrollTo(0, 0);
        conteudoCard.innerHTML = "";
        ordenandoDecrescenteNome();

        function ordenandoDecrescenteNome() {
            for (var i = 0; i < qtd_itens; i++) {
                geral[i] = computer[i].nome;
            }

            geral.sort();
            geral.reverse();

            for (var j = 0; j < geral.length; j++) {
                ordenandoNome(geral[j]);
            }
        }
    }
    // --------------------------------------------------------------
};
ourRequest.send();