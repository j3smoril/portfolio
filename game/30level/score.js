function send_score() {
	var env_aja_name=$('input[name=user_name]').val();
	var env_aja_score=_player_dead;
	$.ajax({type: "POST",
	url: "envio_bd.php",
	data: "nom_ph="+env_aja_name+"&punt_ph="+env_aja_score,
		success:function(data) {
			$("#score").html(data);				
			$(document).click(function(){ clean_exit(); });     
		}
	});
}

function see_score() {
	var env_aja_name="cualquiercosa";
	$.ajax({type: "POST",
	url: "envio_bd.php",
	data: "nom_pc="+env_aja_name,
		success:function(data) {
			$("#score").html(data);				
			$(document).click(function(){ clean_exit(); });     
		}
	});
}

function clean_exit() {
	$(document).unbind('keydown');
	$("#pexit").unbind('keydown');
	$(document).unbind('click');
	$('#score').remove();
	_player_dead=0;
	_current_level=1;
	Crafty.scene('menu');
}


Crafty.scene("score", function() 
{
	Crafty.e("2D,DOM,Image").image("media/img/congrats.gif");
		
		
		
		$("body").append("<div id='score' class='score'></div>");
		$("#score").append("<p>Deads  "+_player_dead+"</p>");
		$("#score").append("<input name='user_name' type='text' value='YOUR NAME' maxlength='10' autofocus=”true” style='text-align: center'/> ");	
		$("#score").append("<br><input type='submit' id='send' value='submit'/>");
		$("#score").append("<div id='dexit'>'><a href='#' id='pexit'>press esc to exit</a></div>");
		$("#send").on('click', function() {
			$('#send').unbind('click');
			send_score();
		});
		
		$(document).keydown(function(e) {
			if (e.keyCode == 27) { clean_exit(); }
		});
		$("#pexit").click(function(e) {
			 clean_exit(); 
		});
		

});


Crafty.scene("seescore", function() 
{
	Crafty.e("2D,DOM,Image").image("media/img/me.png");
		$("body").append("<div id='score' class='score'></div>");
			see_score();
});






