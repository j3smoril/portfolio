//
//------ LOADING --------
//
Crafty.scene('loading', function() {
    Crafty.load([
    'media/video/intro.mp4',
    'media/img/me.png',
	'media/img/p_n.png',
	'media/img/p_o.png',
	'media/img/p_a.png',
	'media/img/s_n.png',
	'media/img/s_o.png',
	'media/img/s_a.png',
	'media/img/lvl.png',
	'media/img/bo.png',
	'media/sound/down.ogg',
	'media/sound/end.ogg',
	'media/sound/music.ogg',
	'media/sound/click.ogg',
	'media/img/af/ba_1.png',
	'media/img/af/ba_2.png',
	'media/img/af/ba_3.png',
	'media/img/af/f_n.png',
	'media/img/af/f_p.png',
	'media/img/af/f_r.gif',
	'media/img/af/r_1_a.png',
	'media/img/af/r_1_p.png',
	'media/img/af/r_2_a.png',
	'media/img/af/r_2_p.png',
	'media/img/af/b_1_1.png'], 
	function() {
    clean();
    Crafty.scene('intro');
	});
    
    Crafty.audio.add('down', 'media/sound/down.ogg');
	Crafty.audio.add('end', 'media/sound/end.ogg'); 
	Crafty.audio.add('music', 'media/sound/music.ogg'); 
	Crafty.audio.add('click', 'media/sound/click.ogg');
    Crafty.background('#000');
    Crafty.e('2D, DOM, Text').attr({w: 100, h: 20, x: 220, y: 160}).text('Loading ...').css({fontFamily: 'Impact', fontSize: '70px',weight: 'bold'}).textColor('#FFFFFF');
});
//
//------ INTRO --------
//
Crafty.scene("intro", function() 
{
	Crafty.background('#000000');
	$("body").append("<div id='intro_video' class='intro_video'></div>");
	$("#intro_video").append("<video width='480' height='350' autoplay='autoplay'><source src='media/video/intro.mp4' type='video/mp4'></video>");
        setTimeout(function () { $("#intro_video").remove(); Crafty.scene("menu"); }, 10000);
});
//
//------ MENU --------
//
Crafty.scene("menu", function() {
    Crafty.audio.stop("music");
    Crafty.audio.play("music",-1);
	Crafty.background('#F2FFD1');
    Crafty.e("2D,DOM,Image").image("media/img/me.png");
	Crafty.e("2D,DOM,Image,Mouse").image("media/img/p_n.png")
		.attr({ x: 147, y: 264})
		.bind("Click", function(e) { this.image("media/img/p_a.png"); Crafty.audio.play("click"); this.timeout(function() { clean(); Crafty.scene("level");}, 500);})
		.bind("MouseOver", function(e) { this.image("media/img/p_o.png");  })
		.bind("MouseOut", function(e) { this.image("media/img/p_n.png");  });
	//Crafty.e("2D,DOM,Image,Mouse").image("media/img/s_n.png")
	//	.attr({ x: 309, y: 325})
	//	.bind("Click", function(e) { this.image("media/img/s_a.png"); Crafty.audio.play("click"); this.timeout(function() { clean(); Crafty.scene("seescore");}, 500);})
	//	.bind("MouseOver", function(e) { this.image("media/img/s_o.png");  })
	//	.bind("MouseOut", function(e) { this.image("media/img/s_n.png");  });

    if (localStorage.getItem('svLvl')){
    Crafty.e("2D,DOM,Image,Mouse").image("media/img/p_n.png")
		.attr({ x: 147, y: 164})
		.bind("Click", function(e) { this.image("media/img/p_a.png"); Crafty.audio.play("click"); this.timeout(function() { clean(); Crafty.scene("level");}, 500);})
		.bind("MouseOver", function(e) { this.image("media/img/p_o.png");  })
		.bind("MouseOut", function(e) { this.image("media/img/p_n.png");  });
}
});
//
//------ LEVEL CHANGE --------
//
Crafty.scene("level", function() {

	Crafty.e("2D,DOM,Image,Mouse")
		.image("media/img/lvl.png")
		.bind("Click", function(e) {	this.timeout(function() { clean(); Crafty.scene("level"+_current_level);}, 500);	});
	
	Crafty.e("2D, DOM, Text,FontPixel")
	    .attr({ x: 120, y: 75,w:300})
	    .textFont({ size: '40px',type: 'italic', family: 'arcadepixregular' })
	    .text("Level "+_current_level)
	    .unselectable();
	
	Crafty.e("2D, DOM, Text,FontPixel")
	    .attr({ x: 80, y: 135,w:300})
	    .text("READY? ")
	    .textFont({ size: '60px',type: 'italic', family: 'arcadepixregular' })
	    .unselectable();
	
	Crafty.e("2D, DOM ,Text,Tween, FontPixel")
		.attr({ x: 160, y: 250})
		.textFont({ size: '40px',type: 'italic', family: 'arcadepixregular' })
		.unselectable()
		.text("PRESS START ")
		.bind('KeyDown', function(e) {	this.timeout(function() { clean(); Crafty.scene("level"+_current_level);}, 500);	})
		.bind("EnterFrame", function(e) {
		
		if (this._alpha < 0.1) this.tween({alpha: 1.0}, 500)
			else 
		if (this._alpha > 0.9) this.tween({alpha: 0.0}, 500)
			
		});	
});	
function clean(){ Crafty("2D").each(function () { if (!this.has("Persist")) this.destroy(); }); }
//
//------ LEVEL 1 --------
//
Crafty.scene('level1', function() 
{
    Start=Crafty.e('Square,Start').square(3,3,32,32,'#01DF3A');
    Crafty.e('Square ,Exit').square(445,285,32,32,'#F781BE');
    Crafty.e('Square ,BoxZing ,Solid').square(100,3,250,16,'#F2D44D').dsc( 0, 70, true ,true,3);
    Crafty.e('Square ,BoxZing ,Solid').square(180,67,250,16,'#F2D44D').dsc( 0, 0.1, true ,false,3);
    Crafty.e('Square ,BoxZing ,Solid').square(260,3,250,16,'#F2D44D').dsc( 0, 70, true ,true,3);
    Crafty.e('Square ,BoxZing ,Solid').square(340,67,250,16,'#F2D44D').dsc( 0, 0.1, true ,false,3);
    BoxPlayer=Crafty.e('Square,Player').square(Start.x+6,Start.y+6,20,20,'#01A9DB');
    table();
});
//
//------ LEVEL 2 --------
//
Crafty.scene('level2', function() 
{
    Start=Crafty.e('Square, Start').square(3,145,32,32,"#01DF3A");
    Crafty.e('Square , Exit' ).square(445,145,32,32,'#F781BE');
    Crafty.e('Square , Solid').square(3,3,90,474,'#F2D44D');
    Crafty.e('Square , Solid').square(3,227,90,474,'#F2D44D');
    Crafty.e('Square, BoxRotate, Solid').square(90,100,120,16,'#F2D44D').vrotar(4).origin(8,60).setName('R1');
    Crafty.e('Square, BoxRotate, Solid').square(230,100,120,16,'#F2D44D').vrotar(4).origin(8,60).setName('R2');
    Crafty.e('Square, BoxRotate, Solid').square(370,100,120,16,'#F2D44D').vrotar(4).origin(8,60).setName('R3');
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB");
    table();
});
//
//------ LEVEL 3 --------
//
Crafty.scene("level3", function() 
{
    Start=Crafty.e("Square,Start").square(230,285,32,32,"#01DF3A"); 
    Crafty.e("Square,Exit").square(230,3,32,32,"#F781BE");
    Crafty.e("Square,BoxZing, Solid").square(3,3,30,30,"#B40486").dsc( 450, 0, true ,true,10);
    Crafty.e("Square,BoxZing, Solid").square(450,36,30,30,"#B40486").dsc( 3, 0, false ,true,5);
    Crafty.e("Square,BoxZing, Solid").square(3,69,30,30,"#B40486").dsc( 450, 0, true ,true,5);
    Crafty.e("Square,BoxZing, Solid").square(450,102,30,30,"#B40486").dsc( 3, 0, false ,true,5);
    Crafty.e("Square,BoxZing, Solid").square(3,135,30,30,"#B40486").dsc( 450, 0, true ,true,5);
    Crafty.e("Square,BoxZing, Solid").square(450,168,30,30,"#B40486").dsc( 3, 0, false ,true,5);
    Crafty.e("Square,BoxZing, Solid").square(3,202,30,30,"#B40486").dsc( 450, 0, true ,true,5);
    Crafty.e("Square,BoxZing, Solid").square(450,235,30,30,"#B40486").dsc( 3, 0, false ,true,10);
    BoxPlayer=Crafty.e("Square,Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB");
    table();
});
//
//------ LEVEL 4 --------
//
Crafty.scene("level4", function() {
    Start=Crafty.e("Square").square(3,145,32,32,"#01DF3A");
    Crafty.e("Square ,Exit").square(445,145,32,32,"#F781BE");
    Crafty.e("Square ,Solid").square(3,3,68,474,"#F2D44D");
    Crafty.e("Square ,Solid").square(3,255,90,474,"#F2D44D");
    Crafty.e("Square ,BoxRotate ,Solid").square(71,100,120,120,"#B40486",true).vrotar(2).origin(60,60);
    Crafty.e("Square ,BoxRotate ,Solid").square(290,100,120,120,"#B40486",true).vrotar(2).origin(60,60);
    BoxPlayer=Crafty.e("Square,Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();	
});
//
//------ LEVEL 5 --------
//
Crafty.scene("level5", function() {
    Start=Crafty.e("Square, Start").square(3,71,32,32,"#01DF3A");
    Crafty.e("Square, Exit" ).square(445,215,32,32,"#F781BE");
    Crafty.e("Square, Solid").square(3,3,30,30,"#F2D44D");
    Crafty.e("Square, Solid").square(224,3,30,30,"#F2D44D");
    Crafty.e("Square, Solid").square(447,3,30,30,"#F2D44D");
    Crafty.e("Square, Solid").square(3,144,30,30,"#F2D44D");
    Crafty.e("Square, Solid").square(3,287,30,30,"#F2D44D");
    Crafty.e("Square, Solid").square(224,287,30,30,"#F2D44D");
    Crafty.e("Square, Solid").square(447,287,30,30,"#F2D44D");
    Crafty.e("Square, Solid").square(447,144,30,30,"#F2D44D");
    Crafty.e("Square, Solid").square(224,144,30,30,"#F2D44D");
    Crafty.e("Square, BoxRotate, Solid").square(71,32,120,120,"#B40486",true).vrotar(1.5).origin(60,60);
    Crafty.e("Square, BoxRotate, Solid").square(301,31,120,120,"#B40486",true).vrotar(1.5).origin(60,60);
    Crafty.e("Square, BoxRotate, Solid").square(71,167,120,120,"#B40486",true).vrotar(1.5).origin(60,60);
    Crafty.e("Square, BoxRotate, Solid").square(301,167,120,120,"#B40486",true).vrotar(1.5).origin(60,60);
    BoxPlayer=Crafty.e("Square,Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
}); 
//
//------ LEVEL 6 --------
//
Crafty.scene("level6", function() {
    Start=Crafty.e("Square,Start").square(3,3,32,32,"#01DF3A");
    Crafty.e("Square,Exit").square(445,285,32,32,"#F781BE");
    Crafty.e("Square,BoxRotate,Solid").square(84,24,300,300,"#B40486",true).vrotar(1).origin(150,150);
    BoxPlayer=Crafty.e("Square,Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 7 --------
//
Crafty.scene("level7", function() {
    Start=Crafty.e("Square,Start").square(3,3,32,32,"#01DF3A"); 
    Crafty.e("Square,Exit").square(445,285,32,32,"#F781BE");
    Crafty.e("Square,Solid").square(100,3,250,16,"#F2D44D",false); 
    Crafty.e("Square,Solid").square(180,67,250,16,"#F2D44D",false); 
    Crafty.e("Square,Solid").square(260,2,250,16,"#F2D44D",false); 
    Crafty.e("Square,Solid").square(340,67,250,16,"#F2D44D",false); 
    Crafty.e("Square,BoxZing,Solid").square(116,3,32,32,"#B40404",true).dsc(0,290,false,true,2.5);
    Crafty.e("Square,BoxZing,Solid").square(148,290,32,32,"#B40404",true).dsc(0,3,false,false,2.5);
    Crafty.e("Square,BoxZing,Solid").square(196,3,32,32,"#B40404",true).dsc(0,290,false,true,2.5);
    Crafty.e("Square,BoxZing,Solid").square(228,290,32,32,"#B40404",true).dsc(0,3,false,false,2.5);
    Crafty.e("Square,BoxZing,Solid").square(276,3,32,32,"#B40404",true).dsc(0,290,false,true,2.5);
    Crafty.e("Square,BoxZing,Solid").square(308,290,32,32,"#B40404",true).dsc(0,3,false,false,2.5);
    BoxPlayer=Crafty.e("Square,Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 8 --------
//
Crafty.scene("level8", function() {
    Start=Crafty.e("Square, Start").square(3,145,32,32,"#01DF3A");
    Crafty.e("Square,Exit" ).square(445, 145, 32, 32,"#F781BE");
    Crafty.e("Square ,Solid").square(3,3,68,474,"#F2D44D");
    Crafty.e("Square ,Solid").square(3,245,90,474,"#F2D44D");
    Crafty.e("Square ,BoxZing ,Solid").square(3, 70, 32, 32, '#B40404', true).dsc(445,214,true,true,3);	
    Crafty.e("Square ,BoxZing ,Solid").square(445, 214, 32, 32, '#B40404', true).dsc(3,70,false,false,3);
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 9 --------
//
Crafty.scene("level9", function() {
    Start=Crafty.e("Square, Start").square(3,145,32,32,"#01DF3A");
    Crafty.e("Square,Exit" ).square(445, 145, 32, 32,"#F781BE");
    Crafty.e("Square ,Solid").square(3,3,68,474,"#F2D44D");
    Crafty.e("Square ,Solid").square(3,245,90,474,"#F2D44D");
    Crafty.e("Square, BoxZing, Solid").square(3, 70, 32, 32, '#B40404', true).dsc(445,214,true,true,3);	
    Crafty.e("Square, BoxZing, Solid").square(445, 214, 32, 32, '#B40404', true).dsc(3,70,false,false,3);
    Crafty.e("Square, BoxZing, Solid").square(445, 70, 32, 32, '#B40404', true).dsc(3,214,false,true,3);
    Crafty.e("Square, BoxZing, Solid").square(3, 214, 32, 32, '#B40404', true).dsc(445,70,true,false,3);
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 10 --------
//
Crafty.scene("level10", function() {
    Start=Crafty.e("Square, Start").square(19,19,32,32,"#01DF3A") ;
    Crafty.e("Square ,Exit" ).square(430,272,32,32,'#F781BE');
    Crafty.e("Square ,Solid" ).square(3,3,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,303,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,19,284,16,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(462,19,284,16,'#F2D44D');
    Crafty.e("Square ,BoxZing, Solid" ).square(440,94,20,20,'#B40486',true).dsc(150, 0, false, false, 5);
    Crafty.e("Square ,BoxZing, Solid" ).square(440,144,20,20,'#B40486',true).dsc(170, 0, false, false, 8);
    Crafty.e("Square ,BoxZing, Solid" ).square(116,184,20,20,'#B40486',true).dsc(370, 0, true, false, 8);
    Crafty.e("Square ,BoxZing, Solid" ).square(180,240,20,20,'#B40486',true).dsc(425, 0, true, false, 2);
    Crafty.e("Square ,BoxZing, Solid" ).square(160,285,20,20,'#B40486',true).dsc(0, 110, false, false, 5);
    Crafty.e("Square ,BoxZing, Solid" ).square(360,285,20,20,'#B40486',true).dsc(0, 110, false, false, 2);
    Crafty.e("Square ,BoxZing, Solid" ).square(330,18,20,20,'#B40486',true).dsc(0, 280, true, true, 2);
    Crafty.e("Square ,BoxZing, Solid" ).square(190,18,20,20,'#B40486',true).dsc(0, 280, true, true, 5);
    Crafty.e("Square ,BoxZing, Solid" ).square(410,280,20,20,'#B40486',true).dsc(150, 0, false, false, 5);
    Crafty.e("Square ,BoxZing, Solid" ).square(380,44,20,20,'#B40486',true).dsc(170, 0, false, false, 8);
    Crafty.e("Square ,BoxZing, Solid" ).square(46,124,20,20,'#B40486',true).dsc(370, 0, true, false, 8);
    Crafty.e("Square ,BoxZing, Solid" ).square(130,153,20,20,'#B40486',true).dsc(425, 0, true, false, 2);
    Crafty.e("Square ,BoxZing, Solid" ).square(250,203,20,20,'#B40486',true).dsc(0, 110, false, false, 5);
    Crafty.e("Square ,BoxZing, Solid" ).square(75,280,20,20,'#B40486',true).dsc(0, 110, false, false, 2);
    Crafty.e("Square ,BoxZing, Solid" ).square(24,68,20,20,'#B40486',true).dsc(0, 280, true, true, 2);
    Crafty.e("Square ,BoxZing, Solid" ).square(190,18,20,20,'#B40486',true).dsc(0, 280, true, true, 5);
    Crafty.e("Square ,BoxZing, Solid" ).square(430,32,20,20,'#B40486',true).dsc(0, 230, true, true, 3);
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);	
    Crafty.e("Square ,Solid" ).square(462,19,284,16,'#F2D44D');
    table();
});
//
//------ LEVEL 11 --------
//
Crafty.scene("level11", function() {
    Start=Crafty.e("Square,Start").square(18,18,32,32,"#01DF3A");
    Crafty.e("Square,Exit").square(430,272,32,32,"#F781BE");
    Crafty.e("Square,BoxFind,Solid").square(20,282,25,25,"#B40486",true).boxfind(1);
    Crafty.e("Square,BoxFind,Solid").square(230,180,25,25,"#F24D4D",true).boxfind(1);
    Crafty.e("Square,BoxFind,Solid").square(450,20,25,25,"#D14DF2",true).boxfind(0.8);
    Crafty.e("Square,BoxFind,Solid").square(400,200,25,25,"#F2D44D",true).boxfind(1.5);
    Crafty.e("Square,BoxFind,Solid").square(300,140,25,25,"#81F24D",true).boxfind(1);
    Crafty.e("Square,BoxFind,Solid").square(300,240,25,25,"#3DA4A5",true).boxfind(1.6);
    Crafty.e("Square,BoxFind,Solid").square(400,80,25,25,"#AF54FF",true).boxfind(1);
    Crafty.e("Square ,Solid" ).square(3,3,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,303,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,19,284,16,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(462,19,284,16,'#F2D44D');
    BoxPlayer=Crafty.e("Square,Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 12 --------
//
Crafty.scene("level12", function() {
    Start=Crafty.e("Square, Start").square(225,285,32,32,"#01DF3A") ;
    Crafty.e("Square ,Exit" ).square(225,3,32,32,'#F781BE');
    Crafty.e("Square, BoxZing ,Solid").square(3,200,80,80,'#F2D44D', true).dsc(156,0,true,true, 3);
    Crafty.e("Square, BoxZing ,Solid").square(378,200,80,80,'#F2D44D', true).dsc(225,0,false,true, 3);
    Crafty.e("Square, BoxZing ,Solid").square(3,120,80,80,'#F2D44D', true).dsc(156,0,true,true, 2);
    Crafty.e("Square, BoxZing ,Solid").square(378,120,80,80,'#F2D44D', true).dsc(225,0,false,true, 2);
    Crafty.e("Square, BoxZing ,Solid").square(3,40,80,80,'#F2D44D', true).dsc(156,0,true,true, 3);
    Crafty.e("Square, BoxZing ,Solid").square(378,40,80,80,'#F2D44D', true).dsc(225,0,false,true, 3);
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 13 --------
//
Crafty.scene("level13", function() {
    Start=Crafty.e("Square, Start").square(18,145,32,32,"#01DF3A") ;
    Crafty.e("Square ,Exit" ).square(430,145,32,32,'#F781BE');
    Crafty.e("Square, BoxScale,Solid").square(215,135,50,50,'#B40486').scale(235,3);
    Crafty.e("Square ,Solid" ).square(3,3,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,303,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,19,284,16,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(462,19,284,16,'#F2D44D');
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 14 --------
//
Crafty.scene("level14", function() {
    Start=Crafty.e("Square, Start").square(230,285,32,32,"#01DF3A") ;
    Crafty.e("Square ,Exit" ).square(230,3,32,32,'#F781BE');
    Crafty.e("Square, BoxScale,Solid").square(0,0,70,150,'#F2D44D').scale(240,3);
    Crafty.e("Square, BoxScale,Solid").square(0,270,70,150,'#F2D44D').scale(240,3);
    Crafty.e("Square, BoxScale,Solid").square(345,270,70,150,'#F2D44D').scale(240,3);
    Crafty.e("Square, BoxScale,Solid").square(345,0,70,150,'#F2D44D').scale(240,3);
    Crafty.e("Square,BoxZing,Solid").square(0,160,20,20,"#B40404",true).dsc(465,0,true,false,15);
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 15 --------
//
Crafty.scene("level15", function() {
    Start=Crafty.e("Square, Start").square(225,285,32,32,"#01DF3A") ;
    Crafty.e("Square,Exit").square(230,3,32,32,"#F781BE");
    Crafty.e('Square ,Solid,BoxTarget').square(400,250,15,15,'#B40486').btarget({4:[350,250],3:[350,55],2:[100,55],1:[100,250]});
	Crafty.e('Square ,Solid,BoxTarget').square(400,250,15,15,'#B40486').btarget({4:[100,250],3:[350,55],2:[100,55],1:[350,250]});
	Crafty.e('Square ,Solid,BoxTarget').square(400,250,15,15,'#B40486').btarget({4:[350,250],3:[100,55],2:[350,55],1:[100,250]});
	Crafty.e('Square ,Solid,BoxTarget').square(400,250,15,15,'#B40486').btarget({4:[100,250],3:[100,55],2:[350,55],1:[350,250]});
    Crafty.e("Square ,Solid" ).square(370,0,320,110,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(0,0,320,90,'#F2D44D');
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 16 --------
//
Crafty.scene("level16", function() 
{
    Start=Crafty.e("Square, Start").square(19,271,32,32,"#01DF3A") ;
    Crafty.e("Square ,Exit" ).square(430,19,32,32,'#F781BE');
    Crafty.e("Square ,Solid" ).square(3,3,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,303,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,19,284,16,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(462,19,284,16,'#F2D44D');
    Crafty.e("Square, BoxRotate, Solid").square (120,50,90,90,'#B40486',true).vrotar(2).origin(40,40);
    Crafty.e("Square, BoxRotate, Solid").square (280,50,90,90,'#B40486',true).vrotar(2).origin(40,40);
    Crafty.e("Square, BoxRotate, Solid").square (180,190,90,90,'#B40486',true).vrotar(2).origin(40,40);
    Crafty.e("Square, BoxRotate, Solid").square (340,190,90,90,'#B40486',true).vrotar(2).origin(40,40);
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 17 --------
//
Crafty.scene("level17", function() {
    Start=Crafty.e("Square, Start").square(3,145,32,32,"#01DF3A") ;
    Crafty.e("Square ,Exit" ).square(446,145,32,32,'#F781BE');
    Crafty.e("Square ,BoxRotate ,Solid").square(60,15,68,68,"#B40486",true).vrotar(2).origin(34,34);
    Crafty.e("Square ,BoxRotate ,Solid").square(60,125,68,68,"#B40486",true).vrotar(2).origin(34,34);
    Crafty.e("Square ,BoxRotate ,Solid").square(60,235,68,68,"#B40486",true).vrotar(2).origin(34,34);
    Crafty.e("Square ,BoxZing ,Solid").square(180,3,100,16,"#F2D44D",true).dsc( 0, 70, true ,true,3);
    Crafty.e("Square ,BoxZing ,Solid").square(240,3,100,16,"#F2D44D",true).dsc( 0, 70, true ,true,3);
    Crafty.e("Square ,BoxZing ,Solid").square(300,3,100,16,"#F2D44D",true).dsc( 0, 70, true ,true,3);
    Crafty.e("Square ,BoxZing ,Solid").square(180,220,100,16,"#F2D44D",true).dsc( 0, 153, true ,false,3);
    Crafty.e("Square ,BoxZing ,Solid").square(240,220,100,16,"#F2D44D",true).dsc( 0, 153, true ,false,3);
    Crafty.e("Square ,BoxZing ,Solid").square(300,220,100,16,"#F2D44D",true).dsc( 0, 153, true ,false,3);
    Crafty.e("Square,BoxZing,Solid").square(350,3,32,32,"#B40404",true).dsc(0,290,false,true,6);
    Crafty.e("Square,BoxZing,Solid").square(410,290,32,32,"#B40404",true).dsc(0,3,false,false,6);
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 18 --------
//
Crafty.scene("level18", function() {
    Start=Crafty.e("Square, Start").square(3,145,32,32,"#01DF3A") ;
    Crafty.e("Square ,Exit" ).square(445,145,32,32,'#F781BE');
    Crafty.e("Square ,Solid" ).square(100,35,250,16,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(160,3,117,256,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(160,200,117,256,'#F2D44D');
    Crafty.e("Square ,BoxZing, Solid" ).square(400,34,60,16,'#F2D44D', true).dsc(0, 77, true, true, 1);
    Crafty.e("Square ,BoxZing, Solid" ).square(400,220,60,16,'#F2D44D',true).dsc(0, 177, true, false, 1);
    Crafty.e("Square, BoxZing, Solid").square(65,3,30,30, '#B40404', true).dsc( 0, 290, true ,true, 3);
    Crafty.e("Square, BoxZing, Solid").square(120,290,30,30, '#B40404', true).dsc( 0, 3, true ,false, 3);
    Crafty.e("Square, BoxRotate, Solid").square (190,145,32,32,'#B40486',true).vrotar(1).origin(16,16);
    Crafty.e("Square, BoxRotate, Solid").square (266,145,32,32,'#B40486',true).vrotar(1).origin(16,16);
    Crafty.e("Square, BoxRotate, Solid").square (340,145,32,32,'#B40486',true).vrotar(1).origin(16,16);
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 19 --------
//
Crafty.scene("level19", function() {
	Start=Crafty.e("Square, Start").square(3,3,32,32,"#01DF3A") ;
	Crafty.e("Square ,Exit" ).square(445,285,32,32,'#F781BE');
	Crafty.e("Square ,Solid" ).square(100,3,240,16,'#F2D44D');
	Crafty.e("Square ,Solid" ).square(360,77,240,16,'#F2D44D');
	Crafty.e("Square ,Solid" ).square(180,230,16,180,'#F2D44D');
	Crafty.e("Square ,BoxZing ,Solid").square(116,3,32,32,"#B40404",true).dsc(148,200,true,true,2);
	Crafty.e("Square ,BoxZing ,Solid").square(196,200,32,32,"#B40404",true).dsc(228,3,true,false,2);
	Crafty.e("Square ,BoxZing ,Solid").square(276,3,32,32,"#B40404",true).dsc(308,200,true,true,2);	
	Crafty.e("Square, BoxRotate ,Solid").square(25,100,50,50,'#B40486',true).vrotar(1).origin(25,25);
	Crafty.e("Square, BoxRotate ,Solid").square(25,200,50,50,'#B40486',true).vrotar(1).origin(25,25);
	Crafty.e("Square, BoxRotate ,Solid").square(400,100,50,50,'#B40486',true).vrotar(1).origin(25,25);
	Crafty.e("Square, BoxRotate ,Solid").square(400,200,50,50,'#B40486',true).vrotar(1).origin(25,25);	
	BoxPlayer=Crafty.e("Square ,Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
	table();
});
//
//------ LEVEL 20 --------
//
Crafty.scene("level20", function() {
	Start=Crafty.e("Square, Start").square(3,3,32,32,"#01DF3A");
	Crafty.e("Square, Exit" ).square(445,3,32,32,"#F781BE");
	Crafty.e("Square, Solid").square(3,130,15,90,"#F2D44D");
	Crafty.e("Square, Solid").square(120,3,90,250,"#F2D44D");
	Crafty.e("Square, Solid").square(120,93,195,15,"#F2D44D");
	Crafty.e("Square, Solid").square(355,93,195,15,"#F2D44D");
	Crafty.e("Square, Solid").square(397,130,15,80,"#F2D44D");
	Crafty.e("Square, BoxRotate, Solid").square(30,55,60,60,"#B40486",true).vrotar(1).origin(30,30);
	Crafty.e("Square, BoxRotate, Solid").square(400,55,60,60,"#B40486",true).vrotar(1).origin(30,30);
	Crafty.e("Square, BoxRotate, Solid").square(170,140,150,150,"#B40486",true).vrotar(1).origin(75,75);
	Crafty.e("Square ,BoxZing, Solid").square(90,180,32,32,"#B40404", true ).dsc(3,0,false,true,2);
	Crafty.e("Square ,BoxZing, Solid").square(3,240,32,32,"#B40404", true ).dsc(90,0,true,true,2);
	Crafty.e("Square ,BoxZing, Solid").square(450,180,32,32,"#B40404", true ).dsc(368,0,false,true,2);
	Crafty.e("Square ,BoxZing, Solid").square(368,240,32,32,"#B40404", true ).dsc(450,0,true,true,2);
	BoxPlayer=Crafty.e("Square,Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
	table();
});
//
//------ LEVEL 21 --------
//
Crafty.scene('level21', function() 
{
    Start=Crafty.e('Square,Start').square(3,153,32,32,'#01DF3A');
    Crafty.e('Square ,Exit').square(444,153,32,32,'#F781BE');
    Crafty.e('Square ,Solid,BoxTarget').square(50,5,15,15,'#B40486').btarget({1:[400,5],2:[400,300],3:[50,300],4:[50,5]});
    Crafty.e('Square ,Solid,BoxTarget').square(100,55,15,15,'#B40486').btarget({1:[350,55],2:[350,250],3:[100,250],4:[100,55]});		
    Crafty.e('Square ,Solid,BoxTarget').square(150,105,15,15,'#B40486').btarget({1:[300,105],2:[300,200],3:[150,200],4:[150,105]});
    Crafty.e('Square ,Solid,BoxTarget').square(400,5,15,15,'#B40486').btarget({1:[50,5],2:[50,300],3:[400,300],4:[400,5]});
    Crafty.e('Square ,Solid,BoxTarget').square(350,55,15,15,'#B40486').btarget({1:[100,55],2:[100,250],3:[350,250],4:[350,55]});
    Crafty.e('Square ,Solid,BoxTarget').square(300,105,15,15,'#B40486').btarget({1:[150,105],2:[150,200],3:[300,200],4:[300,105]});
    Crafty.e('Square ,Solid,BoxTarget').square(50,300,15,15,'#B40486').btarget({1:[400,300],2:[400,5],3:[50,5],4:[50,300]});
    Crafty.e('Square ,Solid,BoxTarget').square(100,250,15,15,'#B40486').btarget({1:[350,250],2:[350,55],3:[100,55],4:[100,250]});
    Crafty.e('Square ,Solid,BoxTarget').square(150,200,15,15,'#B40486').btarget({1:[300,200],2:[300,105],3:[150,105],4:[150,200]});
    Crafty.e('Square ,Solid,BoxTarget').square(400,300,15,15,'#B40486').btarget({4:[400,300],3:[400,5],2:[50,5],1:[50,300]});
    Crafty.e('Square ,Solid,BoxTarget').square(350,250,15,15,'#B40486').btarget({4:[350,250],3:[350,55],2:[100,55],1:[100,250]});
    Crafty.e('Square ,Solid,BoxTarget').square(300,200,15,15,'#B40486').btarget({4:[300,200],3:[300,105],2:[150,105],1:[150,200]});
    BoxPlayer=Crafty.e('Square,Player').square(Start.x+6,Start.y+6,20,20,'#01A9DB');
    table();
});
//
//------ LEVEL 22 --------
//
Crafty.scene("level22", function() {
    Start=Crafty.e("Square,Start").square(18,18,32,32,"#01DF3A");
    Crafty.e("Square ,Exit").square(430,272,32,32,"#F781BE");
    Crafty.e("Square ,Solid,BoxRotate").square(120,50,8,60,"#F2D44D",true).vrotar(1) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(120,50,60,8,"#F2D44D",true).vrotar(1) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(50,140,8,60,"#F2D44D",true).vrotar(3) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(50,140,60,8,"#F2D44D",true).vrotar(3) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(210,50,8,60,"#F2D44D",true).vrotar(2) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(210,50,60,8,"#F2D44D",true).vrotar(2) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(140,140,8,60,"#F2D44D",true).vrotar(1) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(140,140,60,8,"#F2D44D",true).vrotar(1) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(290,50,8,60,"#F2D44D",true).vrotar(1) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(290,50,60,8,"#F2D44D",true).vrotar(1) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(380,50,8,60,"#F2D44D",true).vrotar(3) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(380,50,60,8,"#F2D44D",true).vrotar(3) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(220,140,8,60,"#F2D44D",true).vrotar(-0.2) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(220,140,60,8,"#F2D44D",true).vrotar(-0.2) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(310,140,8,60,"#F2D44D",true).vrotar(1) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(310,140,60,8,"#F2D44D",true).vrotar(1) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(400,140,8,60,"#F2D44D",true).vrotar(1) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(400,140,60,8,"#F2D44D",true).vrotar(1) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(50,240,8,60,"#F2D44D",true).vrotar(0.9) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(50,240,60,8,"#F2D44D",true).vrotar(0.9) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(160,240,8,60,"#F2D44D",true).vrotar(3) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(160,240,60,8,"#F2D44D",true).vrotar(3) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(260,240,8,60,"#F2D44D",true).vrotar(2) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(260,240,60,8,"#F2D44D",true).vrotar(2) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(360,240,8,60,"#F2D44D",true).vrotar(1) .origin(15,15);
    Crafty.e("Square ,Solid,BoxRotate").square(360,240,60,8,"#F2D44D",true).vrotar(1) .origin(15,15);
    Crafty.e("Square ,Solid" ).square(3,3,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,303,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,19,284,16,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(462,19,284,16,'#F2D44D');
    BoxPlayer=Crafty.e("Square,Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});	
//
//------ LEVEL 23 --------
//
Crafty.scene("level23", function() {
    Start=Crafty.e("Square, Start").square(230,285,32,32,"#01DF3A") ; 
    Crafty.e("Square ,Exit" ).square(230,3,32,32,"#F781BE");
    Crafty.e("Square, BoxZing ,Solid" ).square(0,260,16,230,"#F2D44D",true).dsc(0,240,true,false,1);
    Crafty.e("Square, BoxZing ,Solid" ).square(260,260,16,219,"#F2D44D",true).dsc(0,240,true,false,1);
    Crafty.e("Square, BoxZing ,Solid" ).square(0,200,16,350,"#F2D44D",true).dsc(0,180,true,false,1);
    Crafty.e("Square, BoxZing ,Solid" ).square(380,200,16,100,"#F2D44D",true).dsc(0,180,true,false,1);
    Crafty.e("Square, BoxZing ,Solid" ).square(0,140,16,150,"#F2D44D",true).dsc(0,120,true,false,1);
    Crafty.e("Square, BoxZing ,Solid" ).square(180,140,16,300,"#F2D44D",true).dsc(0,120,true,false,1);
    Crafty.e("Square, BoxZing ,Solid" ).square(0,80,16,230,"#F2D44D",true).dsc(0,60,true,false,1);
    Crafty.e("Square, BoxZing ,Solid" ).square(260,80,16,219,"#F2D44D",true).dsc(0,60,true,false,1);
    Crafty.e("Square,BoxZing,Solid").square(2,218,20,20,"#B40404",true).dsc(460,0,true,false,2);
    Crafty.e("Square,BoxZing,Solid").square(458,158,20,20,"#B40404",true).dsc(3,0,false,true,2);
    Crafty.e("Square,BoxZing,Solid").square(2,98,20,20,"#B40404",true).dsc(460,0,true,false,2);
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 24 --------
//
Crafty.scene("level24", function() {
    Start=Crafty.e("Square,Start").square(3,3,32,32,"#01DF3A");
    Crafty.e("Square,Exit").square(445,285,32,32,"#F781BE");
    Crafty.e("Square,BoxPos,Solid").square(480,320,32,32,"#B40404",true).boxpos(-20,true,-20,true,5);
    Crafty.e("Square,BoxPos,Solid").square(100,-20,32,32,"#B40404",true).boxpos(0,false,320,true,5);
    Crafty.e("Square,BoxPos,Solid").square(200,-20,32,32,"#B40404",true).boxpos(0,false,320,true,10);
    Crafty.e("Square,BoxPos,Solid").square(300,-20,32,32,"#B40404",true).boxpos(0,false,320,true,10);
    Crafty.e("Square,BoxPos,Solid").square(400,-20,32,32,"#B40404",true).boxpos(0,false,320,true,5);
    BoxPlayer=Crafty.e("Square,Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 25 --------
//
Crafty.scene("level25", function() {
    Start=Crafty.e("Square, Start").square(230,272,32,32,"#01DF3A") ;
    Crafty.e("Square ,Exit" ).square(230,18,32,32,'#F781BE');
    Crafty.e("Square,BoxRotate ,Solid" ).square(40,230,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(90,230,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(140,230,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(190,230,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(270,230,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(320,230,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(230,230,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(40,150,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(40,150,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(140,150,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(190,150,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(231,150,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(270,150,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(320,150,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(370,150,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(420,150,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(40,70,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(90,70,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(140,70,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(190,70,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(230,70,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(270,70,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square,BoxRotate ,Solid" ).square(320,70,30,30,'#B40486',true).vrotar(5).origin(15,15);
    Crafty.e("Square, BoxZing, Solid" ).square(20,190,30,16,'#F2D44D',true).dsc(360,0,true,true,2);
    Crafty.e("Square, BoxZing, Solid" ).square(110,190,30,16,'#F2D44D',true).dsc(450,0,true,true,2);
    Crafty.e("Square, BoxZing, Solid" ).square(20,110,30,16,'#F2D44D',true).dsc(360,0,true,true,2);
    Crafty.e("Square, BoxZing, Solid" ).square(110,110,30,16,'#F2D44D',true).dsc(450,0,true,true,2);
    Crafty.e("Square ,Solid" ).square(3,3,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,303,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,19,284,16,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(462,19,284,16,'#F2D44D');
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 26 --------
//
Crafty.scene("level26", function() {
    Start=Crafty.e("Square, Start").square(2,145,32,32,"#01DF3A");
    Crafty.e("Square, Exit" ).square(446,145,32,32,"#F781BE");
    Crafty.e("Square,BoxZing ,Solid" ).square(40,3,320,15,'#F2D44D',true).dsc(0,300,true,true,5);
    Crafty.e("Square,BoxZing ,Solid" ).square(60,3,320,15,'#F2D44D',true).dsc(0,300,true,true,4);
    Crafty.e("Square,BoxZing ,Solid" ).square(80,3,320,15,'#F2D44D',true).dsc(0,300,true,true,3);
    Crafty.e("Square,BoxZing ,Solid" ).square(100,3,320,15,'#F2D44D',true).dsc(0,300,true,true,2);
    Crafty.e("Square,BoxZing ,Solid" ).square(120,3,320,15,'#F2D44D',true).dsc(0,300,true,true,6);
    Crafty.e("Square,BoxZing ,Solid" ).square(140,3,320,15,'#F2D44D',true).dsc(0,300,true,true,6);
    Crafty.e("Square,BoxZing ,Solid" ).square(160,3,320,15,'#F2D44D',true).dsc(0,300,true,true,2);
    Crafty.e("Square,BoxZing ,Solid" ).square(180,3,320,15,'#F2D44D',true).dsc(0,300,true,true,3);
    Crafty.e("Square,BoxZing ,Solid" ).square(200,3,320,15,'#F2D44D',true).dsc(0,300,true,true,4);
    Crafty.e("Square,BoxZing ,Solid" ).square(220,3,320,15,'#F2D44D',true).dsc(0,300,true,true,5);
    Crafty.e("Square,BoxZing ,Solid" ).square(240,3,320,15,'#F2D44D',true).dsc(0,300,true,true,6);
    Crafty.e("Square,BoxZing ,Solid" ).square(260,3,320,15,'#F2D44D',true).dsc(0,300,true,true,2);
    Crafty.e("Square,BoxZing ,Solid" ).square(280,3,320,15,'#F2D44D',true).dsc(0,300,true,true,3);
    Crafty.e("Square,BoxZing ,Solid" ).square(300,3,320,15,'#F2D44D',true).dsc(0,300,true,true,4);
    Crafty.e("Square,BoxZing ,Solid" ).square(320,3,320,15,'#F2D44D',true).dsc(0,300,true,true,5);
    Crafty.e("Square,BoxZing ,Solid" ).square(340,3,320,15,'#F2D44D',true).dsc(0,300,true,true,5);
    Crafty.e("Square,BoxZing ,Solid" ).square(360,3,320,15,'#F2D44D',true).dsc(0,300,true,true,4);
    Crafty.e("Square,BoxZing ,Solid" ).square(380,3,320,15,'#F2D44D',true).dsc(0,300,true,true,3);
    Crafty.e("Square,BoxZing ,Solid" ).square(400,3,320,15,'#F2D44D',true).dsc(0,300,true,true,2);
    Crafty.e("Square,BoxZing ,Solid" ).square(420,3,320,15,'#F2D44D',true).dsc(0,300,true,true,6);
    BoxPlayer=Crafty.e("Square,Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 27 --------
//
Crafty.scene("level27", function() {
    Start=Crafty.e("Square,Start").square(18,150,32,32,"#01DF3A");
    Crafty.e("Square ,Exit").square(432,150,32,32,"#F781BE");
    Crafty.e("Square,BoxPos,Solid").square(580,231,20,20,"#B40486",true).boxpos(80,true,900,false,4);
    Crafty.e("Square,BoxPos,Solid").square(580,171,20,20,"#F24D4D",true).boxpos(80,true,100,false,4);
    Crafty.e("Square,BoxPos,Solid").square(580,111,20,20,"#D14DF2",true).boxpos(80,true,100,false,4);
    Crafty.e("Square,BoxPos,Solid").square(580,51,20,20,"#F2D44D",true).boxpos(80,true,100,false,4);
    Crafty.e("Square,BoxPos,Solid").square(480,261,20,20,"#81F24D",true).boxpos(80,true,100,false,5);
    Crafty.e("Square,BoxPos,Solid").square(480,201,20,20,"#3DA4A5",true).boxpos(80,true,100,false,5);
    Crafty.e("Square,BoxPos,Solid").square(480,141,20,20,"#4A7F05",true).boxpos(80,true,100,false,5);
    Crafty.e("Square,BoxPos,Solid").square(480,81,20,20,"#AF54FF",true).boxpos(80,true,100,false,5);
    Crafty.e("Square,BoxPos,Solid").square(480,21,20,20,"#9EFDFF",true).boxpos(80,true,100,false,5);
    Crafty.e("Square ,Solid" ).square(3,3,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,303,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,19,284,16,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(462,19,284,16,'#F2D44D');
    BoxPlayer=Crafty.e("Square,Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 28 --------
//
Crafty.scene("level28", function() {
    Start=Crafty.e("Square, Start").square(18,145,32,32,"#01DF3A") ;
    Crafty.e("Square ,Exit" ).square(430,145,32,32,'#F781BE');
    Crafty.e("Square, BoxScale, Solid").square(170,80,5,5,"#B40486",true).scale(100,2);
    Crafty.e("Square, BoxScale, Solid").square(310,80,5,5,"#B40486",true).scale(100,1.5);
    Crafty.e("Square, BoxScale, Solid").square(170,230,5,5,"#B40486",true).scale(100,1.5);
    Crafty.e("Square, BoxScale, Solid").square(310,230,5,5,"#B40486",true).scale(100,2);
    Crafty.e("Square,BoxRotate ,Solid" ).square(230,20,280,16,'#F2D44D',true).vrotar(2).origin(8,140);     
    Crafty.e("Square, BoxZing  ,Solid" ).square(62,160,40,16,'#F2D44D',true).dsc(0,190,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(62,260,40,16,'#F2D44D',true).dsc(0,230,true,false,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(62,20,40,16,'#F2D44D',true).dsc(0,50,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(62,120,40,16,'#F2D44D',true).dsc(0,90,true,false,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(402,260,40,16,'#F2D44D',true).dsc(0,160,true,false,3);
    ////Crafty.e("Square, BoxZing  ,Solid" ).square(402,260,40,16,'#F2D44D',true).dsc(0,230,true,false,2);
    Crafty.e("Square, BoxZing  ,Solid" ).square(402,20,40,16,'#F2D44D',true).dsc(0,120,false,true,3);
    ////Crafty.e("Square, BoxZing  ,Solid" ).square(402,120,40,16,'#F2D44D',true).dsc(0,90,true,false,2);
    Crafty.e("Square ,Solid" ).square(3,3,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,303,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,19,284,16,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(462,19,284,16,'#F2D44D');
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 29 --------
//
Crafty.scene("level29", function() {
    Start=Crafty.e("Square, Start").square(18,145,32,32,"#01DF3A") ;
    Crafty.e("Square ,Exit" ).square(430,145,32,32,'#F781BE');    
    Crafty.e("Square, BoxZing  ,Solid" ).square(92,160,40,16,'#F2D44D',true).dsc(0,190,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(92,260,40,16,'#F2D44D',true).dsc(0,230,true,false,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(92,20,40,16,'#F2D44D',true).dsc(0,50,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(92,120,40,16,'#F2D44D',true).dsc(0,90,true,false,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(142,160,40,16,'#F2D44D',true).dsc(0,190,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(142,260,40,16,'#F2D44D',true).dsc(0,230,true,false,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(142,20,40,16,'#F2D44D',true).dsc(0,50,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(142,120,40,16,'#F2D44D',true).dsc(0,90,true,false,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(172,22,20,20,'#FF0000',true).dsc(0,280,false,true,4);
    Crafty.e("Square, BoxZing  ,Solid" ).square(206,160,40,16,'#F2D44D',true).dsc(0,190,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(206,260,40,16,'#F2D44D',true).dsc(0,230,true,false,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(206,20,40,16,'#F2D44D',true).dsc(0,50,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(206,120,40,16,'#F2D44D',true).dsc(0,90,true,false,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(256,160,40,16,'#F2D44D',true).dsc(0,190,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(256,260,40,16,'#F2D44D',true).dsc(0,230,true,false,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(256,20,40,16,'#F2D44D',true).dsc(0,50,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(256,120,40,16,'#F2D44D',true).dsc(0,90,true,false,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(286,280,20,20,'#FF0000',true).dsc(0,22,true,false,4);
    Crafty.e("Square, BoxZing  ,Solid" ).square(320,160,40,16,'#F2D44D',true).dsc(0,190,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(320,260,40,16,'#F2D44D',true).dsc(0,230,true,false,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(320,20,40,16,'#F2D44D',true).dsc(0,50,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(320,120,40,16,'#F2D44D',true).dsc(0,90,true,false,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(370,160,40,16,'#F2D44D',true).dsc(0,190,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(370,260,40,16,'#F2D44D',true).dsc(0,230,true,false,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(370,20,40,16,'#F2D44D',true).dsc(0,50,false,true,1.5);
    Crafty.e("Square, BoxZing  ,Solid" ).square(370,120,40,16,'#F2D44D',true).dsc(0,90,true,false,1.5);
    Crafty.e("Square ,Solid" ).square(3,3,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,303,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,19,284,16,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(462,19,284,16,'#F2D44D');
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
//
//------ LEVEL 30 --------
//
Crafty.scene("level30", function() {
    Start=Crafty.e("Square, Start").square(222,272,32,32,"#01DF3A") ; 
    Crafty.e("FinalBoxx ,Exit").init_boxx();
    Crafty.e("Square, BoxZing ,Solid" ).square(18,255,10,10,"#B40404",true).dsc(455,0,true,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(453,235,10,10,"#B40404",true).dsc(18,0,false,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(18,215,10,10,"#B40404",true).dsc(455,0,true,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(453,195,10,10,"#B40404",true).dsc(18,0,false,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(18,175,10,10,"#B40404",true).dsc(455,0,true,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(453,155,10,10,"#B40404",true).dsc(18,0,false,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(18,135,10,10,"#B40404",true).dsc(455,0,true,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(453,115,10,10,"#B40404",true).dsc(18,0,false,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(18,95,10,10,"#B40404",true).dsc(455,0,true,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(453,75,10,10,"#B40404",true).dsc(18,0,false,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(58,18,10,10,"#B40404",true).dsc(0,293,true,true,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(78,293,10,10,"#B40404",true).dsc(0,18,true,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(98,18,10,10,"#B40404",true).dsc(0,293,true,true,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(118,293,10,10,"#B40404",true).dsc(0,18,true,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(138,18,10,10,"#B40404",true).dsc(0,293,true,true,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(158,293,10,10,"#B40404",true).dsc(0,18,true,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(178,18,10,10,"#B40404",true).dsc(0,293,true,true,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(198,293,10,10,"#B40404",true).dsc(0,18,true,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(268,18,10,10,"#B40404",true).dsc(0,293,true,true,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(288,293,10,10,"#B40404",true).dsc(0,18,true,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(308,18,10,10,"#B40404",true).dsc(0,293,true,true,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(328,293,10,10,"#B40404",true).dsc(0,18,true,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(348,18,10,10,"#B40404",true).dsc(0,293,true,true,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(368,293,10,10,"#B40404",true).dsc(0,18,true,false,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(388,18,10,10,"#B40404",true).dsc(0,293,true,true,8);
    Crafty.e("Square, BoxZing ,Solid" ).square(408,293,10,10,"#B40404",true).dsc(0,18,true,false,8);
    Crafty.e("Square ,Solid" ).square(3,3,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,303,16,475,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(3,19,284,16,'#F2D44D');
    Crafty.e("Square ,Solid" ).square(462,19,284,16,'#F2D44D'); 
    BoxPlayer=Crafty.e("Square, Player").square(Start.x+6,Start.y+6,20,20,"#01A9DB",true);
    table();
});
