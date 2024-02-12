// 
//		final
// 
Crafty.c("Wall_1", {
	init: function() {
		this.requires("2D, DOM, Image,Tween");		
		this.image("media/img/af/ba_3.png");
		this.tween({ x: -330}, 100); 
		this.bind("TweenEnd", function(e) {
			this.x=0;
			this.tween({ x: -330}, 500);
		});
		this.timeout(function() {   this.tween({ x: -330}, 500);       }, 2700);
	
	}
});		
Crafty.c("Wall_2", {
	init: function() {
		this.requires("2D, DOM, Image,Tween");		
		this.image("media/img/af/ba_2.png");
		this.tween({ x: -291}, 70);
		this.bind("TweenEnd", function(e) {
			this.x=0;
			this.tween({ x: -291}, 500);		
		});
		this.timeout(function() {   this.tween({ x: -291}, 500);       }, 2700);
	}
});
Crafty.c("Wall_3", {
	init: function() {
		this.requires("2D, DOM, Image,Tween");		
		this.image("media/img/af/ba_1.png")
		this.bind("EnterFrame", function(e) {
			
			
		})
	}
});		

Crafty.scene("final", function() { 
	Crafty.background('#000033');
	Crafty.e("Wall_1").setName('wall').attr({ x: 0, y: 0 });
	Crafty.e("Wall_2").setName('wall').attr({ x: 0, y: 85 });
	Crafty.e("Wall_3").setName('wall').attr({ x: 0, y: 170 });
	Crafty.e("Wall_2").setName('wall').attr({ x: 0, y: 180 });
	Crafty.e("Wall_1").setName('wall').attr({ x: 0, y: 265 });
	
	Crafty.e("2D,DOM, Tween,Image")
		.image("media/img/af/b_1_1.png")
		.setName('Box')
		.attr({alpha: 1.0, x: 1, y: 150, h: 40, w:40})
			//.timeout(function() {   this.tween({ x: 400}, 400); }, 100)
			.timeout(function() {   this.tween({ x: 215}, 500);       }, 100)
			.timeout(function() {   this.tween({ x: 160}, 100);       }, 650)
			
			
			.timeout(function() {  Crafty.background('#F2FFD1'); Crafty.scene('score');        }, 1700);
	
	
	
	
	Final=Crafty.e("2D,DOM, Tween,Image")
		.image("media/img/af/f_n.png")
		.attr({ x: 600, y: 120, h: 100, w:100})
		.origin("center")
			
			.timeout(function() {   this.tween({ x: 250}, 600);       }, 1)
			.timeout(function() {   this.x=0; this.y=-50; this.image("media/img/af/f_r.gif");    }, 800)
			.timeout(function() {   this.destroy();       }, 2000);
				
	
	
	
	
	
	

});	
