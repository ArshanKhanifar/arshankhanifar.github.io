$(document).ready(function(){
	setTimeout(function(){
		$('.intro').addClass('draw');	
	},10);
	
	setTimeout(function(){
		$('.intro').addClass('fill');
	},1500);
	setTimeout(function(){
		changingText('.changing-text',['Developer',"Designer",'Engineering Student','Unicorn'],30);	
	},2500);
})

