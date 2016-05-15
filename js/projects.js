$(document).ready(function(){
	activate('.projTitle,.projImage,.technologies,.description,.linkToProject');
})
$(document).scroll(function(){
	activate('.projTitle,.projImage,.technologies,.description,.linkToProject');
})
function activate(selector){
	var elems = $(selector);
	elems.each(function(){
		var clientRect = this.getClientRects()[0];
		if(clientRect.top+clientRect.height*0.8>0 && clientRect.bottom-clientRect.height*0.7<window.innerHeight){
			$(this).addClass('active');
		}else{
			$(this).removeClass('active');
		}
	})
}
