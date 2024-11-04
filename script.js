var palavrasDaFrase;
var c;
var usuario;
var qtLetrasFrase;
var plDigitada;
var plDigitadas = 0;
var contPl = 0 ;
var tempoDigitacao;
var spanAtual;
var fraseProp = "";
var pausado = true;
var opcao = document.getElementsByName('esc');
var frasesDisp = [
    'Pela mesma depreensível razão de na se dizer entardeceu a tarde, anoiteceu a noite, etc., é que, também, não se deve dizer amanheceu o dia. Não obstante, quase todas as rádios, logo pela manhã, anunciam que o dia amanheceu chuvoso (ou frio etc.). Achamos bastante dizer: amanheceu chuvoso (nublado, quente, etc.).',
    'Como diz o velho ditado: "O saber não ocupa lugar". Saiba você, também, escrever à máquina com rapidez e perfeição, mas não estude sem mestre, pois método e mestre são indispensáveis na formação de um bom digitador.',
    'Um dos nomes mais brilhantes da história da Matemática é, sem dúvida, Arquimedes. Nasceu em Siracusa, no ano 287 antes do nascimento de Cristo, e sua vida foi inteiramente dedicada à Matemática, à Física e à Astronomia.',
    'Novas reservas naturais serão exploradas com a construção de mais hidrelétricas, enquanto fontes alternativas como e carvão e a energia nuclear serão também utilizadas.',
    'Se os egípcios conseguiram fama com suas gigantescas pirâmides, os seus magníficos templos e obeliscos, uma reputação não menor gozam os construtores babilônios, pois sabe-se que, já nessa época, a Mesopotâmia era atravessada por uma rede de canais (dos quais alguns navegáveis) e possuía grandes lagos artificiais que punham em comunicação o Tigre com o Eufrates. O terreno assim irrigado tornava-se fértil e barragens defendiam os campos das inundações do Eufrates cujas margens eram ligadas por uma ponte de mais de 200 metros de comprimento.',
    'Um peixe não cresce sempre o mesmo através do ano. Nos meses quentes, quando a comida não falta, cresce rapidamente, o que provoca em cada escama uma quantidade de anéis bastante distanciados. Nos meses frios, os peixes crescem muito devagar e às vezes nem chegam a crescer. Os seus anéis de crescimento são poucos e muitos fundos. Este conjunto de anéis forma uma espécie de linha mais acentuada. Para conhecermos com exatidão a idade de um peixe devemos contar apenas linhas pois, uma, marca a passagem de um inverno.',
    'Silenciou, com a morte de John Lennon, a voz mais enérgica de uma geração. Mas os jovens, de todas as idades, de todos os lugares e todas as épocas, não a esquecerão. John Lennon traduziu, em música e letra, na sua voz e na sua guitarra, tanto no seu comportamento público quanto no privado, a esperança por um mundo mais livre, mais pacífico e mais belo. Ele foi a aguda consciência crítica, não só dos Beatles, mas de todos, jovens e velhos, homens, mulheres e crianças, do mundo inteiro, que compreenderam e amaram sua música. Negar os preconceitos, ridicularizar a hipocrisia, colocar em questão as instituições, libertar a mente e o corpo, protestar contra a guerra, a fome e a injustiça e, finalmente, acreditar acima de tudo no poder do amor - esses objetivos da arte de Lennon expressam nossos anseios mais corajosos e mais saudáveis, num século de violência e crueldade. A violência e a crueldade existem para serem enfrentadas. E a trajetória, artística e humana, do menino pobre de Liverpool, foi tão intensa quanto profunda.',
    'Num dia de verão, estava na praia, observando duas crianças brincando na areia. Elas trabalhavam muito, construindo um castelo de areia, com torres, passarelas e passagens internas. Quando estavam quase acabando, veio uma onda e destruiu tudo, reduzindo o castelo a um monte de areia e espuma. Achei que, depois de tanto esforço e cuidado, as crianças cairiam no choro. Mas tive uma surpresa. Em vez de chorar, correram pela praia, fugindo da água, rindo de mãos dadas e começaram a construir outro castelo. Compreendi que havia aprendido uma grande lição; gastamos muito tempo da nossa vida construindo alguma coisa e, mais cedo ou mais tarde, uma onda poderá vir e destruir tudo o que levamos tanto tempo para construir. Mas quando isso acont ecer (e aqui eu digo, se isso acontecer), somente aquele que tem as mãos de alguém para segurar, será capaz de sorrir! Só o que permanece é a amizade, o amor e o carinho. O resto é feito de areia. ',
    'Sempre objetivamente, vamos tentar ajudá-lo a acabar, de vez, com a dúvida na aplicação de trânsito, tráfego e tráfico. "As pessoas, nas rodovias, devem transitar sempre no acostamento e na contramão";"é perigoso o trânsito de animais, nas estradas etc." "O tráfego aéreo entre Rio e São Paulo é intenso"; "os ônibus estão proibidos de trafegar na Av. Atlântica". "O tráfico de mulheres é uma das mais sórdidas das atividades humanas"; "não obstante a intensa luta das autoridades, ainda é intenso, desgraçadamente, o tráfico de drogas em quase todas as partes do mundo." Pelo exposto, trânsito é de pessoas e animais; tráfego, de veículos (trens, ônibus, automóveis, aviões etc.); e, tráfico, é a prática abjeta de comerciar drogas para viciados e recrutar, para transportar a outros países, mulheres destinadas à prostituição.',
    'À garantia constitucional para proteger direito individual líquido e certo, não amparado por habeas-corpus, contra ilegalidade ou abuso de poder, dá-se o nome de mandado de segurança. Ex.: "A família Bernardes ganhou o mandado de segurança"; "os funcionários inpetraram mandado de segurança visando o recebimento de gratificação" etc. Mandato de segurança, pelo exposto, é inapelável.',
    'A digitação é hoje encarada como um complemento cultural e técnico, indispensável a qualquer indivíduo, seja estudante, professor, comerciante, médico ou advogado.',
    'A liberdade, Sancho, é um dos mais preciosos dons que os homens receberam dos céus. Com ela não podem igualar-se os tesouros que a terra encerra nem que o mar cobre; pela liberdade, assim como pela honra, se pode e deve aventurar a vida, e, pelo contrário, o cativeiro é o maior mal que pôde vir aos homens.',
    'Sonhar o sonho impossível, sofrer a angústia implacável, pisar onde os bravos não ousam, reparar o mal irreparável, amar um amor casto à distância, enfrentar o inimigo invencível, tentar quando as forças se esvaem, alcançar a estrela inatingível: essa é a minha busca.',
    'Olhe bem Vossa Mercê - disse o escudeiro - que aquilo não são gigantes, são moinhos de vento; e os que parecem braços não são senão as velas, que tocadas do vento fazem trabalhar as mós.',
    'As pessoas têm estrelas que não são as mesmas. Para uns, que viajam, as estrelas são guias. Para outros, elas não passam de pequenas luzes.',
    'A imagem do Cruzeiro resplandece. Gigante pela própria natureza, És belo, és forte, impávido colosso, E o teu futuro espelha essa grandeza',
    'Caneta azul, azul caneta, Caneta azul tá marcada com minha letra. Caneta azul, azul caneta, Caneta azul tá marcada com minha letra',
    'A ascensão dos reality shows, como os de culinária e de sobrevivência, transformou a televisão, oferecendo aos espectadores uma visão mais íntima da vida de pessoas comuns, enquanto geram debates sobre temas como competição, individualismo e superação.',
    'O universo Marvel, com seus super-heróis icônicos e tramas complexas, conquistou fãs de todas as idades ao redor do mundo, criando um verdadeiro fenômeno cultural e impulsionando a indústria cinematográfica.',
    'A indústria da música tem sido marcada pela ascensão do streaming, que revolucionou a forma como consumimos música, permitindo o acesso a um catálogo praticamente ilimitado de artistas e gêneros musicais.',
    'A cultura gamer, antes vista como um nicho, tornou-se um fenômeno global, com jogos eletrônicos cada vez mais sofisticados e competitivos, e uma comunidade de jogadores apaixonados que participam de torneios e eventos internacionais.',
    'A moda fast fashion, com suas coleções que se renovam a cada semana, tem sido alvo de críticas por seu impacto ambiental e social, enquanto o movimento slow fashion busca promover uma moda mais sustentável e consciente.',
    'A influência das redes sociais na cultura pop é inegável, com plataformas como o TikTok e o Instagram moldando as tendências e impulsionando a carreira de novos artistas e criadores de conteúdo.',
    'A cultura geek, antes considerada marginal, tornou-se mainstream, com a popularização de filmes, séries e quadrinhos baseados em histórias de ficção científica, fantasia e terror.',
    'O movimento #MeToo, que denunciou casos de assédio e abuso sexual, impulsionou um debate global sobre o machismo e a desigualdade de gênero, levando a mudanças significativas na indústria do entretenimento e na sociedade como um todo.',
];

$(function(){
    $('#modalInicio').modal('show');
    // Trabalhando com temporizador
    class Data{
        constructor(minutos,segundos,milissegundos,idElemento){
            this.minutos = minutos;
            this.segundos = segundos;
            this.milissegundos = milissegundos;
            this.elemento = idElemento;
            this.intervalo;
        }
        loopDoTempo(){
            this.intervalo = setInterval(() => {
               this.milissegundos++;
               if(this.milissegundos == 100){
                   this.milissegundos = 0;
                   this.segundos++;
                   if(this.segundos == 60){
                       this.segundos = 0;
                       this.minutos++;
                   }
               }
               $(this.elemento).html(`${this.minutos}m:${this.segundos}s:${this.milissegundos}ms `);
            },10);
        }
        comeca(){
            this.loopDoTempo();
        }
        parar(){
            clearInterval(this.intervalo);
        }
    }
    class Digitador{
        constructor(nome,numPalavras,tempoDigit,nivel){
            this.nome = nome;
            this.numPalavras = numPalavras;
            this.tempoDigit = tempoDigit;
            this.minutosSeg = this.tempoDigit.minutos+"m : "+this.tempoDigit.segundos+"s"
            this.nivel = nivel;
        }
        nivelar(nivel){
            this.nivel = nivel;

            $("#nivel").removeClass();
            if(nivel == "Principiante"){
                $("#nivel").addClass('text-danger');
            }
            else if(nivel == "Amador"){
                $("#nivel").addClass('text-warning');
            }
            else if(nivel == "Normal"){
                $("#nivel").css("color","rgba(255, 68, 0, 0.658)");
            }
            else if(nivel == "Profissional"){
                $("#nivel").addClass('text-success');
            }
        }
    }
    $('#btnComeca').click(function(){
        if(opcao[0].checked){
            var posAleatoria = Math.floor(Math.random()*frasesDisp.length)
            fraseProp = frasesDisp[posAleatoria];
            comeca();
        }
        else if(opcao[1].checked){
            if($('#cxTexto').val().trim() != '' && $('#cxTexto').val().trim().length >= 5){
                fraseProp = $('#cxTexto').val().trim();
                comeca();
            }
            else{
                window.alert('Caixa de entrada vazia \n ou com poucos caracteres!\n 20 caracteres no minimo')
            }
        }
    })
    class classifica{
        constructor(qtdPal,tpIniciante,tpAmador,tpNormal,tpProfissional){
            this.qtdPal = qtdPal;
            this.tpIniciante = tpIniciante;
            this.tpAmador = tpAmador;
            this.tpNormal = tpNormal;
            this.tpProfissional = tpProfissional;
        }
    }
    var tempo1 = new classifica(
        '20 - 40',
        'mais de 1m:35s',
        '1m:35s',
        '1m:5s',
        '0m:45s'
    );
    var tempo2 = new classifica(
        '41 - 70',
        'mais de 2m:35s',
        '2m:35s',
        '1m:45s',
        '1m:25s'
    );
    var tempo3 = new classifica(
        '71 - 100',
        'mais de 3m:5s',
        '3m:5s',
        '2m:25s',
        '2m:5s'
    );
    function play(){
        $("#controla").removeClass();
        tempoDigitacao.comeca();
        $("textarea#texto").css("visibility","visible");
        $("#controla").addClass("glyphicon glyphicon-pause fa-lg");
        pausado = false;
    }
    function pausar(){
        $("#controla").removeClass();
        tempoDigitacao.parar();
        $("textarea#texto").css("visibility","hidden");
        pausado = true;
        $("#controla").addClass("glyphicon glyphicon-play fa-lg");
        $("body").focus();
}
    function comeca(){
        $('#modalInicio').modal('hide');

        insiraFrase(fraseProp);
        tempoDigitacao = new Data(0,0,0,'#time');
        $('#texto').keydown(function(){
            if(event.keyCode == 32){
                plDigitada = $('#texto').val().trim();
                spanAtual = $(`#frase span:eq(${contPl})`);
                if(plDigitada == spanAtual.text()){
                    if(contPl == 0){
                        play();
                    }
                    $('#texto').removeClass('errado');
                    $('#texto').addClass('text-primary');
    
                    $('#texto').val('');
                    spanAtual.css('color','white');
                    contPl++;
                    $('#plFalta').text(--qtLetrasFrase);
                    $('#plDigitadas').text(++plDigitadas);
                    if(qtLetrasFrase == 0){
                        terminar();
                    }
                }else{
                    $('#texto').removeClass('text-primary');
                    $('#texto').addClass('errado');
                    console.log('Esta errada');
                }
                console.log(event.which);
            }
        });
    }
    $('.entrada').slideUp(1);
        //ao carregar a pagina
        if(opcao[1].checked){
            $('.entrada').slideDown();
        }
    
    function inserindoClassificacao(obj){
        $('table #tr1 td:eq(0)').text(obj.qtdPal);

        $('table #tr1 td:eq(1)').text(obj.tpProfissional);
        $('table #tr2 td:eq(0)').text(obj.tpNormal);
        $('table #tr3 td:eq(0)').text(obj.tpAmador);
        $('table #tr4 td:eq(0)').text(obj.tpIniciante);
    }
    function terminar(){
        tempoDigitacao.parar();

        usuario = new Digitador(
        $('#nomeUS').val(),
        plDigitadas,
        {
            minutos:tempoDigitacao.minutos,
            segundos:tempoDigitacao.segundos,
        }
        )

        $('#digitador').text(usuario.nome);
        $('#qtdPalDigit').text(usuario.numPalavras+" palavras");

        $('#tempoPalDigit').text(usuario.minutosSeg);

        if(usuario.numPalavras >= 0 && usuario.numPalavras <= 40){
            inserindoClassificacao(tempo1);

            if(converteEmSegundos(usuario.minutosSeg)<= 45){
                usuario.nivelar("Profissional");
            }
            else if(converteEmSegundos(usuario.minutosSeg)>45 && converteEmSegundos(usuario.minutosSeg)<=65){
                usuario.nivelar("Normal");
            }
            else if(converteEmSegundos(usuario.minutosSeg)>65 && converteEmSegundos(usuario.minutosSeg)<=95){
                usuario.nivelar("Amador");
            }
            else if(converteEmSegundos(usuario.minutosSeg)>95){
                usuario.nivelar("Principiante");
            }
        }
        else if(usuario.numPalavras >= 41 && usuario.numPalavras <= 70){
            inserindoClassificacao(tempo2);

            if(converteEmSegundos(usuario.minutosSeg)<= 85){
                usuario.nivelar("Profissional");
            }
            else if(converteEmSegundos(usuario.minutosSeg)>85 && converteEmSegundos(usuario.minutosSeg)<=105){
                usuario.nivelar("Normal");
            }
            else if(converteEmSegundos(usuario.minutosSeg)>105 && converteEmSegundos(usuario.minutosSeg)<=155){
                usuario.nivelar("Amador");
            }
            else if(converteEmSegundos(usuario.minutosSeg)>155){
                usuario.nivelar("Principiante");
            }
        }
        else if(usuario.numPalavras >= 71 && usuario.numPalavras <= 100){
            inserindoClassificacao(tempo3);

            if(converteEmSegundos(usuario.minutosSeg)<= 125){
                usuario.nivelar("Profissional");
            }
            else if(converteEmSegundos(usuario.minutosSeg)>125 && converteEmSegundos(usuario.minutosSeg)<=145){
                usuario.nivelar("Normal");
            }
            else if(converteEmSegundos(usuario.minutosSeg)>145 && converteEmSegundos(usuario.minutosSeg)<=185){
                usuario.nivelar("Amador");
            }
            else if(converteEmSegundos(usuario.minutosSeg)>185){
                usuario.nivelar("Principiante");
            }
        }
        $('#nivel').text(usuario.nivel);
        $('#modal-final').modal('show');
    }

    function insiraFrase(frase){
        $('#frase').html(frase);
        // Separando cada palavra da frase
        palavrasDaFrase = $('#frase').text().split(' ');
        
        palavrasDaFrase = palavrasDaFrase.filter(function(elem){
            if(elem == ""){
                return false;
            }
            else{
                return true;
            }
        });
        // Inserindo cada palavra num 'span'
        palavrasDaFrase.forEach((elem,ind) => {
            elem = '<span>'+elem+'</span>';
            palavrasDaFrase[ind] = elem;
        });
        console.log(palavrasDaFrase);
        $('#frase').html(palavrasDaFrase.join(' '));
        //Exibindo informações sobre a frase na tela
        qtLetrasFrase = palavrasDaFrase.length;
        $('#plFalta').text(qtLetrasFrase);
        $('#plDigitadas').text(plDigitadas);
    
    }

    $(document).keydown(function(){
        if(event.which == 17){
            if(pausado){
                play();
            }else{
                pausar();
            }
        }
        // else if(event.which == 82){
        //    pausePlay(true);
        // }
        console.log(event.keyCode);
    });
    $('#esc1').click(function(){
        $('.entrada').slideUp();
    })
    $('#esc2').click(function(){
        $('.entrada').slideDown();
    })
//    tooltips do programa
$("[for='esc1'").tooltip({
    title:"<div class='glyphicon fa-lg glyphicon-info-sign'></div><br/> <span>Permita que o programa aleatoriamente escolha uma frase para que você digite ate um certo tempo!</span>",
    html:true,
    trigger:'hover',
    placement:'right',
    delay:{show:900,hide:300}
})
$("[for='esc2'").tooltip({
    title:"<div class='glyphicon fa-lg glyphicon-info-sign'></div><br/> <span>Permite que o usuario insira uma frase de <b>sua preferencia</b></span>",
    html:true,
    trigger:'hover',
    placement:'bottom',
    delay:{show:900,hide:300}
})
})
function converteEmSegundos(texto){
    var elems = texto.split(':');
    var min = +elems[0].replace('m','');
    var seg = +elems[1].replace('s','');

    for(let c = 0;c < min;c++){
        seg+=60;
    }
    return seg;
}
