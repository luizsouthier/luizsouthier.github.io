


data = {
   "nome":["Matlab para Engenheiros: Módulo II","Matlab para Engenheiros - Turma III","Matlab para Engenheiros - Turma II","Matlab para Engenheiros","Matlab para Engenheiros - Módulo Básico","Matlab - II Semana Acadêmica de Engenharia de Computação","Cálculo 1 - Integrais","Cálculo 1 - Derivadas","Desenho Gráfico: Aplicação do Cálculo Diferencial Integral I utilizando recursos computacionais","Linguagem de Marcação de Hipertexto - Módulo II","Cálculo 1 - Limites","Linguagem de Marcação de Hipertexto"," Sistema Operacional e Aplicativos","Cálculo para Engenharia","Cálculo - Módulos I, II e III. 2012","Linguagem de Marcação de Hipertexto","Computação Gráfica - Fundamentos Matemáticos","O Reino das Águas","Homenagem a Adoniram Barbosa","Milhões de Razões","Interação entre a Matemática e a Computação em Erros de Arredondamento e Artimética Computacional","Onde está o amor"],
   "ano":[2017,2016,2016,2016,2016,2016,2013,2013,2012,2012,2012,2012,2012,2012,2012,2011,2011,2011,2011,2017,2016,2013],
   "tipo":["Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Curso de curta duração ministrado","Apresentação Teatral","Apresentação Teatral","Filme","Curso de curta duração ministrado","Concurso de escrita"]
};
	
		nome = data["nome"];
		ano = data["ano"];
		tipo = data["tipo"];
		
		var mat = document.getElementById('producoes');
		mat.innerHTML="";
	
		for(k=0;k<data['nome'].length;k++){
			x='';
			x+='<div class=" container-fluid portfolio-item col-xs-12 col-sm-6">';
			x+='	<div class="recent-work-wrap">';
			x+='				<h3><span class="fa fa-dot-circle-o"></span> '+nome[k]+'</h3>';
			x+='				<p><kbd>'+ano[k]+'</kbd> </p>';
			x+='				<p align="justify"><small>'+tipo[k]+'</small></p>';
			x+='	</div>';
			x+='</div>';
			mat.innerHTML += x;	
			}
