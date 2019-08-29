


data = {
   "nome":["Matlab for Engineers: Module II","Matlab for Engineers - Class III","Matlab for Engineers - Class II","Matlab for Engineers","Matlab for Engineers - Basic Module","Matlab - II Academic Week of Computer Engineering","Calculus 1 - Integrals","Calculation 1 - Derivatives","Graphic Design: Application of Integral Differential Calculus I using computational resources","Hypertext Markup Language - Module II","Calculation 1 - Limits","Hypertext Markup Language","Operating System and Applications","Engineering Calculation","Calculation - Modules I, II and III. 2012","Hypertext Markup Language","Computer Graphics - Mathematical Foundations","The Kingdom of Waters","Adoniram Barbosa","Millions of Reasons","Interaction between Mathematics and Computation in Rounding Errors and Computational Arithmetic","Where is the love?"],
   "ano":[2017,2016,2016,2016,2016,2016,2013,2013,2012,2012,2012,2012,2012,2012,2012,2011,2011,2011,2011,2017,2016,2013],
   "tipo":["Short course taught","Short course taught","Short course taught","Short course taught","Short course taught","Short course taught","Short course taught","Short course taught","Short course taught","Short course taught","Short course taught","Short course taught","Short course taught","Short course taught","Short course taught","Short course taught","Short course taught","Theatrical Presentation","Theatrical Presentation","Movie","Short course taught","Writing Contest"]
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
