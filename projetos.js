


data = {
   "disciplina":["Banco de Dados","Empreendedorismo","Trabalho de Conclusão de Curso","Controle Digital","Instrumentação Eletro-eletrônica","Lógica Reconfigurável","Modelagem e Controle de Sistemas a Eventos Discretos","Oficina de Integração","Segurança Computacional","Sistemas Operacionais","Eletrônica","Sistemas de Controle","Sistemas Inteligentes","Sistemas Microcontrolados","Multimídia e Hipermídia","Programação Orientada a Objetos","Robótica","Comunicação Linguística, Fundamentos de Programação, Geometria Analítica e Álgebra Linear, Cálculo Diferencial e Integral, Física e Lógica"],
   "ano":[2017,2017,2017,2016,2016,2016,2016,2016,2016,2016,2015,2015,2015,2015,2012,2012,2012,2011],
   "tipo":["Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Trabalho Final de Disciplina de Graduação em Engenharia de Computação UTFPR","Projeto Interdisciplinar Graduação em Engenharia de Computação"],
   "local":["Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp."],
   "marcador":["comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp"],
   "projeto":["pbanco","pempreendedorismo","ptcc","pcontroled","pinstrumentacao","plogica","pmodelagem","poficina","pseguranca","pso","peletronica","pcontrole","pinteligentes","pmicro","pmultimidia","ppoo","probotica","pinterdisciplinar"],
   "nome":["Banco de Dados de dicionário multilíngue","Plano de negócios para empresa de automação","Conversão Entre Modelos de Sistemas a Eventos Discretos para Simplificação da Síntese de Controladores","Modelagem, Controle Digital e Implementação de Conversor Buck","Projeto de filtro","Projeto de máquina de café e máquina de lavar roupas","Modelagem, Controle e Implementação de separador de peças por material","Desenvolvimento de interface responsiva web para reconhecimento, gerenciamento e sugestão inteligente de cartas de Yu-Gi-Oh! Trading Card Game","Analisando o comportamento de usuários em redes sem fio gratuitas","Simulador para algoritmos de escalonamento de sistemas batch","Equalizador Analógico","Controle de temperatura","Sistema Fuzzy para cálculo de diâmetro de espelo de telescópio","Sistema de medição de tempertura","Site explorador de multímidia sobre Florence + The Machine","Programa de desenhos em Java","Controle de robô golfista","Projeto Interdisciplinar"],
   "desc":["Implementação de banco de dados para dicinário com criação de índices, visões, buscas, modelos e gatilhos.","Elaboração de plano de negócios para criação de empresa de automação de restaurantes universitários.","Desenvolver um método formal de conversão entre modelos de SED construídos utilizando AFE e Distinguidores que expressem comportamento equivalente.","Projeto de um sistema de controle digital baseado em reguladores chaveados, utilizando um conversor Buck. ","Projetr filtro passa-baixas butterworth e implementar com topologia Sallen-Key.","Projeto e implementação em FPGA de máquinas de estados.","Utilizar esteira de simulação de chão de fábrica como um separador de peças por material sob conceitos da teoria de controle supervisório.","Sistema web para gerenciamento de cartas que utiliza processamento de imagens em tempo real para identificar e cadastrar as cartas. Um algoritmo genético foi implementado para sugerir o melhor conjunto.","Implementado sistemas de testes na rede wifi da UTFPR Campus Pato Branco para analisar comportamento de usuário.","Implementação de sistema web de simulação em tempo real para algoritmos de escalonamento batch.","Projetar circuito pré-amplificador para guitarra ou voz, com seleção de entrada e equalizador analógico.","Implementação de um controlador Proporcional Integrador (PI) que têm por objetivo controlar a temperatura em um ambiente fechado.","Conceber um sistema fuzzy que baseado nas cores do objeto a ser visualizado determina o diâmetro do espelho de um telescópio apropriado.","Cnceber sistema de medição de temperatura e enviou via UART para computador gerando gráfico em tempo real.","Desenvolver um website em tecnologia Flash contendo componentes multimídia de vídeo, áudio, animação, conceitos de Photoshop entre outros.","Desenvolver interface gráfica que permite ao usuário criação de formas geométricas, camadas, efeitos gráficos que implementam conceitos de Programação Orientada à Objetos.","Desenvolver código em kit Robix para controle de robô com o objetivo de lançar bola em marca.","Projeto que reúne diversas disciplinas do primeiro período da graduação de Engenharia de Computação. Tem por objetivo analisar e aplicar conhecimentos do núcleo básico em uma cena do filme A Origem. Foi criada uma animação utilizando funções matemáticas e conceitos de álgebra linear. Conceitos de lógica e programação foram utilizados . "]
};
	
		nome = data["nome"];
		tipo = data["tipo"];
		marcador = data["marcador"];
		local = data["local"];
		disciplina = data["disciplina"];
		projeto = data["projeto"];
		ano = data["ano"];
		desc = data["desc"];
		
		var mat = document.getElementById('cursos');
		mat.innerHTML="";
	
		for(k=0;k<data['nome'].length;k++){
			x='';
			
			x+='<div class=" container-fluid portfolio-item '+marcador[k]+' col-xs-12 col-sm-6" id="'+projeto[k]+'">';
			x+='	<div class="recent-work-wrap">';
			x+='				<h3><span class="fa fa-dot-circle-o"></span> '+nome[k]+'</h3>';
			x+='				<p><kbd>'+ano[k]+'</kbd> <abbr title="'+tipo[k]+'">'+local[k]+'</abbr></p>';
			x+='				<p align="justify"><small>'+disciplina[k]+'</small></p>';
			x+='				<p align="justify">'+desc[k]+'</p>';
			x+='				<a class="preview" rel="prettyPhoto" data-toggle="collapse" href="#col'+k+'"><i class="fa fa-info"></i> Info</a>';
			x+='				<div class="collapse" id="col'+k+'">';
			x+='				  <div class="card card-body">';
			x+='				<img src="images/'+projeto[k]+'.png" width="100%">';
			x+='				  </div>';
			x+='				</div>';
			x+='	</div>';
			x+='</div>';
			mat.innerHTML += x;	
			}
