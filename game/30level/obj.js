//
//------ PLAYER --------
//
Crafty.c("Player", {
	_die                 : false,
	_velocityX        : 0,
	_velocityY        : 0,
	_acceleration   : 0.7,
	_directionX      : 0,
	_directionY      : 0,
	_mouse_active : false,
	_mouse_pos     :0,
	init: function() {
		this.addComponent("Keyboard,Tween,Mouse");		
		this.origin(10,10);
		this.bind("EnterFrame", function(e) {
		
			if ( this._die == false ) {
			
				if ( this.hit("Solid") ) {
						if ( _sound_effect == true ) Crafty.audio.play("down");
						this._die=true; 
						this.tween({alpha: 0.0,rotation: 360}, 200) }
				
				if ( this.hit("FinalBoxx") ) { Crafty.scene('final'); }
				
				if ( this.hit("Exit") ) {
						if (_sound_effect == true ) Crafty.audio.play("end");
						_current_level+=1;
						clean();
						Crafty.scene("level");	}
			
				if ( this.isDown(Crafty.keys.D)|| this.isDown(Crafty.keys.RIGHT_ARROW) && this.x<457 ) { this._directionX=1; }
					else
				if ( this.isDown(Crafty.keys.A)|| this.isDown(Crafty.keys.LEFT_ARROW) && this.x>3 ) { this._directionX=-1; } 
			
				if ( this.isDown(Crafty.keys.W) || this.isDown(Crafty.keys.UP_ARROW) && this.y>3 ) { this._directionY=-1; }
					else
				if ( this.isDown(Crafty.keys.S) || this.isDown(Crafty.keys.DOWN_ARROW) && this.y<297) { this._directionY=1; }
			
			
				if ( this._directionX==1)   { this._velocityX+=this._acceleration*this._acceleration; 
											if ( this._velocityX >3 ) this._velocityX=3; 	
											this.x+=1*this._velocityX; }
			
				if ( this._directionX==-1 ) { this._velocityX+=this._acceleration*this._acceleration; 
											if ( this._velocityX > 3 ) this._velocityX=3; 
											this.x+=-1*this._velocityX; } 
			
				if ( this._directionY==1)   { this._velocityY+=this._acceleration*this._acceleration; 
											if ( this._velocityY >3 ) this._velocityY=3; 	
											this.y+=1*this._velocityY; }
			
				if ( this._directionY==-1 ) { this._velocityY+=this._acceleration*this._acceleration; 
											if ( this._velocityY > 3 ) this._velocityY=3; 
											this.y+=-1*this._velocityY; } 
										
				if ( this.x>457 ) this.x=457;
					else
				if ( this.x<3   ) this.x=3;
			
				if ( this.y>297 ) this.y=297;
					else
				if ( this.y<3   ) this.y=3;
				
				if ( this._directionX==0  ) this._velocityX=0;
				if ( this._directionY==0  ) this._velocityY=0;
			
				this._directionX=0;
				this._directionY=0;
			}
				else
			{
				if (this._alpha < 0.1) {
					_player_dead+=1;
					_board_dead.text("DEATH " + _player_dead);
					this.x=Start.x+6;
					this.y=Start.y+6;	
					this.tween({alpha: 1.0,rotation:-360}, 10)
					this._die=false; } 
		}		
		});
	}
});
//
//------ FINAL BOX --------
//
Crafty.c("FinalBoxx", {
	_boxxp: { 1: [222,20],2: [21,20], 3: [428,20],},
	_boxram: 0,
	init: function() {
		this.requires("2D, DOM, Image,Tween");		
		this.image("media/img/finalboxx.png")
		this.attr({x: 222, y: 20, h: 32, w: 32});
		this.bind("EnterFrame", function(e) {
			
			
		})
	},
	init_boxx: function() {
		this.timeout(function() { 
			this._boxram=Crafty.math.randomInt(1,3)
			this.tween({ x:21 , y:20}, 5000);  
			//this.x=this._boxxp[this._boxram][0];   
			//this.y=this._boxxp[this._boxram][1]; 
			this.init_boxx();
			}, 10000); 	
		return this;
	}
});		

//
//------ SQUARE --------
//
Crafty.c("Square",{
	init: function() {
		this.addComponent("2D, DOM, Color,Collision");
	},
	square: function(x,y,h,w,color) {
		this.attr({x:x,y:y,h:h,w:w});
		this.color(color);
		this.collision(new Crafty.polygon([[0,0],[0,h],[w,h],[w,0]]));
		return this;
	}
});
//
//------ MOVE SQUARE --------
//
Crafty.c("BoxRotate", {
	_rotar: 0,
	_vrotar: 0,
	init: function() {
		//this.requires("Collision");		
		this.bind("EnterFrame", function(e) {
			this._rotar+=this._vrotar;
			this.rotation=this._rotar;
			if(this._rotar>360) this._rotar=0;	
		})
	},
	vrotar: function(_vrotar) {
		
		this._vrotar = _vrotar;
		return this;
	}
});		



Crafty.c("BoxZing", {
	_srcX:  0,
	_srcY:  0,
	_dstX:  0,
	_dstY:  0,
	_Speed: 0,
	_EndDstY: false,
	_EndDstX: false,
	_SumaY:	  false,
	_SumaX:   false,
	
	init: function() {
		this.requires("Collision");
		this.bind("EnterFrame", function(e) {
			if( this._SumaY == true && this._dstY>0 ) {
				if( this.y <  this._dstY && this._EndDstY == false ) this.y+=this._Speed;
				if( this.y >= this._dstY ) this._EndDstY =  true; 
				if( this.y >  this._srcY && this._EndDstY == true  ) this.y-=this._Speed;
				if( this.y <= this._srcY ) this._EndDstY =  false;
			}
			if( this._SumaY == false && this._dstY>0 ) {
				if( this.y >  this._dstY && this._EndDstY == false ) this.y-=this._Speed;
				if( this.y <= this._dstY ) this._EndDstY =  true;
				if( this.y <  this._srcY && this._EndDstY == true  ) this.y+=this._Speed;
				if( this.y >= this._srcY ) this._EndDstY =  false;
			}
			if( this._SumaX == true && this._dstX>0 ) {
				if( this.x <  this._dstX && this._EndDstX == false ) this.x+=this._Speed;
				if( this.x >= this._dstX ) this._EndDstX =  true; 
				if( this.x >  this._srcX && this._EndDstX == true  ) this.x-=this._Speed;
				if( this.x <= this._srcX ) this._EndDstX =  false;
			}
			if( this._SumaX == false && this._dstX>0 ) {
				if( this.x >  this._dstX && this._EndDstX == false ) this.x-=this._Speed;
				if( this.x <= this._dstX ) this._EndDstX =  true;
				if( this.x <  this._srcX && this._EndDstX == true  ) this.x+=this._Speed;
				if( this.x >= this._srcX ) this._EndDstX =  false;
			}
			
			
		});
	},
	dsc: function (_x,_y,_SumaX,_SumaY,_Speed) {
		
		this._dstY  = _y;
		this._dstX  = _x;
		this._srcY  = this.y;
		this._srcX  = this.x;
		this._SumaY = _SumaY;
		this._SumaX = _SumaX;
		this._Speed = _Speed;
		return this;
	}
});		



Crafty.c("BoxScale", {
	_ScaleEnd: false,
	_srcHW: 0,
	_scaleHW: 0,
	_vel: 0,
	init: function() {
		this.requires("Collision,Tween");
		this.bind("EnterFrame", function() {
		
		
		//if(this.h==this._srcHW) this.tween({h:this._scaleHW,w:this._scaleHW}, this._vel);
		//else if(this.h==this._scaleHW) this.tween({h:this._srcHW,w:this._srcHW}, this._vel);
		
		if ( this.h <= this._scaleHW && this._ScaleEnd == false ){
			this.h+=this._vel;
			this.w+=this._vel;
			this.x-=this._vel/2;
			this.y-=this._vel/2;
		} else  this._ScaleEnd=true;
		if ( this.h >= this._srcHW && this._ScaleEnd == true){
			this.h-=this._vel;
			this.w-=this._vel;
			this.x+=this._vel/2;
			this.y+=this._vel/2;
		} else this._ScaleEnd=false;
		this.map.points=[0,0],[0,this.h],[this.h,this.h],[this.h,0];
		this.origin(this.h/2,this.w/2);	
		});
	},
	scale: function (_scaleHW,_vel) {
			this._srcHW=this.h;
			this._scaleHW=_scaleHW;
			this._vel=_vel;
			return this;
			
		
	}
});	

Crafty.c("BoxFind", {
	_srcX: 0,
	_srcy: 0,
	_vel: 0,
	init: function() {
		this.requires("Collision");
		this.bind("EnterFrame", function() {
		
		if(BoxPlayer._die==true) { this.x=this._srcX; this.y=this._srcY; }
		if(BoxPlayer.x>this.x&&BoxPlayer._die==false) this.x+=this._vel;
		if(BoxPlayer.x<this.x&&BoxPlayer._die==false) this.x-=this._vel;
		if(BoxPlayer.y>this.y&&BoxPlayer._die==false) this.y+=this._vel;
		if(BoxPlayer.y<this.y&&BoxPlayer._die==false) this.y-=this._vel;
		
		});
	},
	boxfind: function (_vel) {
			this._vel=_vel;
			this._srcX=this.x;
			this._srcY=this.y;
			
		
	}
});	



Crafty.c("BoxPos", {
	_srcX: 0,
	_srcy: 0,
	_desX: 0,
	_desY: 0,
	_vel: 0,
	_conX: false,
	_conY: false,
	init: function() {
		this.requires("Collision");
		this.bind("EnterFrame", function() {
		
		
		
		if(this._srcX<this._desX&&this._conX==true) {
			if(this.x!=this._desX) this.x+=this._vel;
		}
		if(this.x==this._desX&&this._conX==true) this.x=this._srcX;
		
		if(this._srcX>this._desX&&this._conX==true) {
			if(this.x!=this._desX) this.x-=this._vel;
		}
		if(this.x==this._desX&&this._conX==true) this.x=this._srcX;
		
		
		if(this._srcY<this._desY&&this._conY==true) {
			if(this.Y!=this._desY) this.y+=this._vel;
		}
		if(this.y==this._desY&&this._conY==true) this.y=this._srcY;
		
		if(this._srcY>this._desY&&this._conY==true) {
			if(this.y!=this._desY) this.y-=this._vel;
		}
		if(this.y==this._desY&&this._conY==true) this.y=this._srcY;
		
		
		
		});
	},
	boxpos: function (_desX,_conX,_desY,_conY,_vel) {
			this._vel=_vel;
			this._srcX=this.x;
			this._srcY=this.y;
			this._desX=_desX;
			this._desY=_desY;
			this._conX=_conX;
			this._conY=_conY;
			
		
	}
});	

Crafty.c("BoxTarget", {
	_target: {},
	_ntarget: 1,
	init: function() {
		this.requires("Collision,Tween");
		this.bind("TweenEnd", function() {
			this._ntarget+=1;
			
			this.tween({ x:this._target[this._ntarget][0] , y:this._target[this._ntarget][1] },350);
			if (this._ntarget>=4) {this._ntarget=0; }
		
		});
		
	},
	btarget: function (btargets) {
		this._target=btargets;
		this.tween({ x:this._target[this._ntarget][0] , y:this._target[this._ntarget][1] },20);
		
	}
});	
//
//------ MACRO --------
//
function table(){
	Crafty.e("2D, DOM, Image").attr({ x: 0 ,y: 0}).image("media/img/bo.png");
	Crafty.e("2D, DOM, Text,Table").attr({ x: 20, y: 330,w:100,h:20 }).text("LEVEL "+_current_level).css({fontFamily: 'arcadepixregular', fontSize: '12px',weight: 'bold'}).textColor('#FFFFFF');
	_board_dead=Crafty.e("2D, DOM, Text,Table").attr({ x: 120, y: 330,w: 100 ,h: 20 }).text("DEATH " + _player_dead).css({fontFamily: 'arcadepixregular', fontSize: '12px',weight: 'bold'}).textColor('#FFFFFF');
	Crafty.e("b_sound");
	Crafty.e("b_effect");
	Crafty.e("Reset,Table");
	Crafty.e("Menu,Table");
	_fade=Crafty.e("2D, DOM,Color,Tween").attr({ x: 0, y: 0,w: 480 ,h: 350 }).color("#000000").tween({alpha:0},30);
}


Crafty.c("Menu",{
	init: function() {
		this.requires("2D,DOM,Mouse,Text")		
		this.attr({x: 420,y:330,h:20,w:50})
		this.text("MENU").css({fontFamily: 'arcadepixregular', fontSize: '12px',weight: 'bold'}).textColor('#FFFFFF');
		this.bind("Click", function(e) {
			gamepause();
		});	
	}
});


Crafty.c("Reset",{
	init: function() {
		this.requires("2D,DOM,Mouse,Text")		
		this.attr({x: 230,y:330,h:20,w:50})
		this.text("RESET").css({fontFamily: 'arcadepixregular', fontSize: '12px',weight: 'bold'}).textColor('#FFFFFF');
		this.bind("Click", function(e) {
		Crafty("2D").each(function () {
		if (!this.has("Persist")) this.destroy();
	});
	
	Crafty.scene("level"+_current_level);
	
	
		});	
	}
});

Crafty.c("b_sound",{
	init: function() {
		this.addComponent("2D,DOM,Mouse,Tween,Color");		
		this.color("#000000");
		this.tween({ alpha: 0}, 10);
		this.attr({x: 300,y:325,h:20,w:40})
		this.bind("Click", function() {
			if(_sound_music==true) { 
				_sound_music=false; Crafty.audio.stop("music"); this.tween({ alpha:0.5}, 200); 
			} else { 
				_sound_music=true; Crafty.audio.play("music",-1); this.tween({ alpha:0}, 200); 
			}  
		});	
	}
});

Crafty.c("b_effect",{
	init: function() {
		this.addComponent("2D,DOM,Mouse,Tween,Color");	
		this.color("#000000");
		this.tween({ alpha: 0}, 10); 
		this.attr({x: 360,y:325,h:20,w:40});
		this.bind("Click", function() {
			if(_sound_effect==true) { 
				_sound_effect=false;  this.tween({ alpha:0.5}, 200); 
			} else { 
				_sound_effect=true;  this.tween({ alpha:0}, 200); 
			}  
		});	
	}
});

function gamepause(){
	if (!Crafty.isPaused()){
		_fade.tween({alpha:0.5},10);
		setTimeout(function() {   Crafty.pause(true);    }, 150);
		$("body").append("<div id='pause' class='pause'></div>");
		$("#pause").html("<p>Exit?</p>" + "<div id='menuyes'><a href='#'><span>Yes</span></a></div>"+"<div id='menuno'><a href='#'><span>No</span></a></div>");
		$("#menuyes").on('click', function() {
			$('#menuyes').unbind('click');
			$('#menuno').unbind('click');
			$('#pause').remove();
			Crafty.pause(false);
			_player_dead=0;
			Crafty.scene('menu');
		});
		$("#menuno").on('click', function() {
			$('#menuyes').unbind('click');
			$('#menuno').unbind('click');
			$('#pause').remove();
			Crafty.pause(false);
			_fade.tween({alpha:0.0},10);
		});
	}
}

