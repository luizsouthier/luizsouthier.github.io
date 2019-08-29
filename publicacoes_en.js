


data = {
   "nome":["Uma proposta de ampliação na análise custo-volume-lucro por meio das análises de sensibilidade e de cenários","SAVEPI Web System to Support the Teaching and Learning Process in Engineering Economics","Proposta de um sistema para auxiliar o processo de análise da viabilidade econômica de projetos de investimentos","Uma Ferramenta Web para a Análise da Viabilidade Econômica de Projetos de Investimentos","Estudo de Um Modelo Matemático para o Corte Sustentável e Quantificação do Estoque de Carbono Em Uma Floresta de Eucalipto","Estudo de Um Modelo Matemático para o Corte Sustentável e Quantificação do Estoque de Carbono Em Uma Floresta de Eucalipto","Savepi - Sistema para Auxiliar o Processo de Análise da Viabilidade Econômica de Projetos de Investimento","Desenvolvimento de um software para a análise da viabilidade econômica de projetos de investimento"],
   "autores":["DONIZETTI DE LIMA, JOSÉ ; FERRO, W. A. ; BORTOLUZZI, S. C. ; SOUTHIER, L. F. P. ; BATISTUS, D. R.","DONIZETTI DE LIMA, JOSÉ ; BENNEMANN, MÁRCIO ; PUTTOW SOUTHIER, LUIZ FERNANDO ; BATISTUS, DAYSE REGINA ; ADAMCZUK OLIVEIRA, GILSON","SOUTHIER, L. F. P.; LIMA, J. D.","SOUTHIER, L. F. P.; LIMA, J. D.","FIGUEROA, T. P. ; SOUTHIER, L. F. P.","FIGUEROA, T. P. ; SOUTHIER, L. F. P.","SOUTHIER, L. F. P.; LIMA, J. D.","SOUTHIER, L. F. P.; LIMA, J. D."],
   "local":["Exacta Online","Brazilian Journal of Operations and Production Management","ENEGEP","Seminário de Extensão e Inovação da Utfpr","Congresso Mundial de Pesquisas Ambientais, Saúde e Segurança","20º Simpósio Internacional de Iniciação Científica da USP","Seminário de Iniciação Científica e Tecnológica da UTFPR","Seminário de Iniciação Científica e Tecnológica da UTFPR"],
   "ano":[2018,2017,2016,2016,2012,2012,2016,2015],
   "tipo":["art_per","art_per","art_con","art_con","art_con","res_con","r_con","r_con"],
   "tipoL":["Complete article published in journal","Complete article published in journal","Complete papers published in conference proceedings","Complete papers published in conference proceedings","Complete papers published in conference proceedings","Expanded abstracts published in conference proceedings","Abstracts published in proceedings of conferences","Abstracts published in proceedings of conferences"]
};
	
		nome = data["nome"];
		tipo = data["tipo"];
		tipoL = data["tipoL"];
		local = data["local"];
		autores = data["autores"];
		ano = data["ano"];
		
		var mat = document.getElementById('publicacoes');
		mat.innerHTML="";
	
		for(k=0;k<data['nome'].length;k++){
			x='';
			
			x+='<div class=" container-fluid portfolio-item col-xs-12 col-sm-6">';
			x+='	<div class="recent-work-wrap">';
			x+='				<h3><span class="fa fa-book"></span> '+nome[k]+'</h3>';
			x+='				<p><kbd>'+ano[k]+'</kbd> <abbr title="'+tipoL[k]+'"><i class="fa fa-info"></i></abbr></p>';
			x+='				<p align="justify"><small>'+autores[k]+'</small></p>';
			x+='				<p align="justify">'+local[k]+'</p>';
			x+='	</div>';
			x+='</div>';
			mat.innerHTML += x;	
			}
