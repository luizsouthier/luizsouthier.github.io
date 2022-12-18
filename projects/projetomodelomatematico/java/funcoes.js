// JavaScript Document
var v11,v12,v13,v14,v15,v16,v21,v22,v23,v24,v25,v26;
var preco;

function selecionado(x){x.style.background="url( 'sobre.png' )"}
function normal(x){x.style.background="url( 'fora.png' )"}


function funcao1(){
	
	x = Number(document.etapa1.valor.value);
	preco = x.toFixed(2);
	
	document.etapa2.e2_1.value = "[0 a "+0.02*preco+"]";
	document.etapa2.e2_2.value = "["+0.02*preco+" a "+0.2*preco+"]";
	document.etapa2.e2_3.value = "["+0.2*preco+" a "+0.3*preco+"]";
	document.etapa2.e2_4.value = "["+0.3*preco+" a "+0.4*preco+"]";
	document.etapa2.e2_5.value = "["+0.4*preco+" a "+0.5*preco+"]";
	document.etapa2.e2_6.value = "["+0.5*preco+" a "+0.6*preco+"]";
	
	var TabbedPanels1 = new Spry.Widget.TabbedPanels("TabbedPanels1", {defaultTab:1});
}

function funcao2(){
 
	q1x1=Number(document.etapa2.q1x1.value);
	q1x2=Number(document.etapa2.q1x2.value);
	q2x1=Number(document.etapa2.q2x1.value);
	q2x2=Number(document.etapa2.q2x2.value);
	q3x1=Number(document.etapa2.q3x1.value);
	q3x2=Number(document.etapa2.q3x2.value);
	q4x1=Number(document.etapa2.q4x1.value);
	q4x2=Number(document.etapa2.q4x2.value);
	q5x1=Number(document.etapa2.q5x1.value);
	q5x2=Number(document.etapa2.q5x2.value);
	q6x1=Number(document.etapa2.q6x1.value);
	q6x2=Number(document.etapa2.q6x2.value);
	
	
	d1= q1x1-q1x2;
	d2= q2x1-q2x2;
	d3= q3x1-q3x2;
	d4= q4x1-q4x2;
	d5= q5x1-q5x2;
	
	
	r1= q1x2 / q1x1;
	r2= (q2x2 - d1) / q2x1;
	r3= (q3x2 - d1 - d2) / q3x1;
	r4= (q4x2 - d1 - d2 - d3) / q4x1;
	r5= (q5x2 - d1 - d2 - d3 - d4) / q5x1;
	r6= (q6x2 - d1 - d2 - d3 - d4 - d5) / q6x1;
	
	g1=1-r1;
	g2=1-r2;
	g3=1-r3;
	g4=1-r4;
	g5=1-r5;
	g6=1-r6;
 
 	s=Number(document.etapa2.q1x2.value)+Number(document.etapa2.q2x2.value)+Number(document.etapa2.q3x2.value)+Number(document.etapa2.q4x2.value)+Number(document.etapa2.q5x2.value)+Number(document.etapa2.q6x2.value);
	
	p=preco;
	
	p2=(0.2*p+0.02*p)*0.5;
	p3=(0.3*p+0.2*p)*0.5;
	p4=(0.4*p+0.3*p)*0.5;
	p5=(0.5*p+0.4*p)*0.5;
	p6=(0.6*p+0.5*p)*0.5;
	
	r1 = 0;
	r2 = p2*s/(1/g1);
	r3 = p3*s/((1/g1)+(1/g2));
	r4 = p4*s/((1/g1)+(1/g2)+(1/g3));
	r5 = p5*s/((1/g1)+(1/g2)+(1/g3)+(1/g4));
	r6 = p6*s/((1/g1)+(1/g2)+(1/g3)+(1/g4)+(1/g5));
	

	document.etapa3.r1.value = r1.toFixed(2);
	document.etapa3.r2.value = r2.toFixed(2);
	document.etapa3.r3.value = r3.toFixed(2);
	document.etapa3.r4.value = r4.toFixed(2);
	document.etapa3.r5.value = r5.toFixed(2);
	document.etapa3.r6.value = r6.toFixed(2);
	
	if(r2>=r3&&r2>=r4&&r2>=r5&&r2>=r6)
	{
		document.etapa3.classe.value=2;
		document.etapa3.valor.value=r2.toFixed(2);
	}
	if(r3>=r2&&r3>=r4&&r3>=r5&&r3>=r6)
	{
		document.etapa3.classe.value=3;
		document.etapa3.valor.value=r3.toFixed(2);
	}

    if(r4>=r3&&r4>=r2&&r4>=r5&&r4>=r6)
	{
		document.etapa3.classe.value=4;
		document.etapa3.valor.value=r4.toFixed(2);
	}
	if(r5>=r3&&r5>=r4&&r5>=r2&&r5>=r6)
	{
		document.etapa3.classe.value=5;
		document.etapa3.valor.value=r5.toFixed(2);
	}
	if(r6>=r3&&r6>=r4&&r6>=r5&&r6>=r2)
	{
		document.etapa3.classe.value=6;
		document.etapa3.valor.value=r6.toFixed(2);
	}
	
	b1 = 15180*q1x1*0.02;
	b2 = 15180*q2x1*(0.02+0.2);
	b3 = 15180*q3x1*(0.2+0.3);
	b4 = 15180*q4x1*(0.4+0.3);
	b5 = 15180*q5x1*(0.4+0.5);
	b6 = 15180*q6x1*(0.6+0.5);
	
	c1 = 15180*q1x2*0.02;
	c2 = 15180*q2x2*(0.02+0.2);
	c3 = 15180*q3x2*(0.2+0.3);
	c4 = 15180*q4x2*(0.4+0.3);
	c5 = 15180*q5x2*(0.4+0.5);
	c6 = 15180*q6x2*(0.6+0.5);
	
	document.etapa3.b1.value = b1.toFixed(2);
	document.etapa3.b2.value = b2.toFixed(2);
	document.etapa3.b3.value = b3.toFixed(2);
	document.etapa3.b4.value = b4.toFixed(2);
	document.etapa3.b5.value = b5.toFixed(2);
	document.etapa3.b6.value = b6.toFixed(2);
	
	document.etapa3.c1.value = c1.toFixed(2);
	document.etapa3.c2.value = c2.toFixed(2);
	document.etapa3.c3.value = c3.toFixed(2);
	document.etapa3.c4.value = c4.toFixed(2);
	document.etapa3.c5.value = c5.toFixed(2);
	document.etapa3.c6.value = c6.toFixed(2);
	
	document.etapa3.c.value=c1+c2+c3+c4+c5+c6;
	document.etapa3.b.value=b1+b2+b3+b4+b5+b6;
	
	carbono = c1+c2+c3+c4+c5+c6 - (b1+b2+b3+b4+b5+b6);
	
	document.etapa3.carbono.value = carbono.toFixed(2);
	
	var TabbedPanels1 = new Spry.Widget.TabbedPanels("TabbedPanels1", {defaultTab:2});
}
 