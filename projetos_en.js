


data = {
   "disciplina":["Database","Business","Completion of Course Work","Digital Control","Electro-electronic Instrumentation","Reconfigurable Logic","Modeling and Control Systems to Discrete Events","Integration Workshop","Computer Security","Operational systems","Electronics","Control system","Smart Systems","Microcontrolling Systems","Multimedia and Hypermedia","Object Oriented Programming","Robotics","Linguistic Communication, Fundamentals of Programming, Analytical Geometry and Linear Algebra, Differential and Integral Calculus, Physics and Logic","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
   "ano":[2017,2017,2017,2016,2016,2016,2016,2016,2016,2016,2015,2015,2015,2015,2012,2012,2012,2011,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   "tipo":["Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Final Project of Undergraduate Course in Computer Engineering UTFPR","Interdisciplinary Project of Computer Engineering","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
   "local":["Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","Eng. Comp.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
   "marcador":["comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","comp","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
   "projeto":["pbanco","pempreendedorismo","ptcc","pcontroled","pinstrumentacao","plogica","pmodelagem","poficina","pseguranca","pso","peletronica","pcontrole","pinteligentes","pmicro","pmultimidia","ppoo","probotica","pinterdisciplinar","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
   "nome":["Multilingual Dictionary Database","Business plan for automation company","Conversion Between Models of Discrete Events Systems for Simplification of Controller Synthesis","Modeling, Digital Control and Implementation of Buck Converter","Filter Design","Design of coffee machine and washing machine","Modeling, Control and Implementation of parts separator by material","Development of responsive web interface for intelligent recognition, management and suggestion of Yu-Gi-Oh! Trading Card Game","Analyzing user behavior on free wireless networks","Simulator for Batch System Scheduling Algorithms","Analog Equalizer","Temperature control","Fuzzy system for calculating telescope spindle diameter","Temperature measuring system","Multimidia explorer site about Florence + The Machine","Java drawing program","Golfer Robot Control","Interdisciplinary Project"],
   "desc":["Implementation of database for dictionary with creation of indexes, visions, searches, models and triggers.","Elaboration of a business plan for the creation of an automation company for university restaurants.","Formal method of conversion between SED models constructed using AFE and Distinguishers that express equivalent behavior.","Design of a digital control system based on keyed regulators, using a Buck converter.","Design low-pass butterworth filter and implementation with Sallen-Key topology.","Design and implementation in state machine FPGA.","Use of factory floor simulation mat as a separator of parts by material under concepts of supervisory control theory.","A web management system for card management that uses real-time image processing to identify and register cards. A genetic algorithm was implemented to suggest the best set.","Test system for the wifi network of the UTFPR Campus Pato Branco to analyze users' behavior.","Implementation of real-time simulation web system for batch scheduling algorithms.","Design of pre-amplifier circuit for guitar or voice, with input selection and analog equalizer.","Implementation of an Integrative Proportional Controller (PI) that aims to control the temperature in a closed environment.","Design of fuzzy system that based on the colors of the object being viewed determines the diameter of the mirror for telescope."," Temperature measurement system that  generates chrts in real time.","Develop a website in Flash technology containing multimedia components of video, audio, animation, Photoshop concepts among others.","Develop graphical interface that allows the user to create geometric shapes, layers, graphic effects that implement concepts of Object Oriented Programming.","Develop code in Robix kit for robot control.","Project that brings together several disciplines of the first period of the graduation of Computer Engineering. It aims to analyze and apply basic core knowledge in a scene from a movie. An animation was created using mathematical functions and linear algebra concepts. Logic and programming concepts were used.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
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
