
function changingText(selector,texts,interval){
	var number = 0;
	round(texts[0]);
	function round(text){
		function typeIn(text){
			for(var i = 0; i < text.length ;i++){
				doTypeIn(selector,text,interval*i,i);
			}
		}
		function typeOut(text){
			for(var i = 0; i < text.length ;i++){
				doTypeOut(selector,text,interval*i,i);
			}
		}
		function blink(){
			for(var i=0; i < 4;i++){
				doBlink(selector,text,500*i,i);
			}
		}
		typeIn(text);
		setTimeout(blink,text.length*interval);
		setTimeout(function(){typeOut(text)},text.length*interval + 2000);
	}
	function doTypeOut(selector,text,time,i){
		setTimeout(function(){
			$(selector).text(text.slice(0,text.length-i-1) + ' |');
			setTimeout(function(){
				if(i == (text.length-1)){
					number++;
					number %=texts.length;
					round(texts[number]);
				}
			},interval);
		},time);
	}
	function doTypeIn(selector,text,time,i){
		setTimeout(function(){
			$(selector).text(text.slice(0,i+1) + ' |');
			
		},time)
	}
	function doBlink(selector,text,time,i){
		setTimeout(function(){
			if(i%2==0){
				$(selector).text(text+' |');	
			}else{

				$(selector).text(text.slice(0,text.length));	
			}
		},time)
		
	}
}
