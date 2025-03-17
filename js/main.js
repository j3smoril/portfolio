//
// my files
//
win_my_cv = create_win('My CV', 100, 150, 700, 600, 1,(content, close) => {
	
	content.innerHTML=(`
    <div class='my_cv' >
        <img src='asset/img/pic.png' >
        <h2>Personal Information</h2>
        <span>name : &nbsp;&nbsp;&nbsp;&nbsp;        jesus morillo</span><br>
        <span>location :&nbsp; malaga, spain</span><br>
        <span>date : &nbsp;&nbsp;&nbsp;&nbsp; 23/02/1984</span><br>
       
        <h2>EDUCATION</h2>
        <span>E.S.O I.E.S&nbsp; Portada alta</span><br>

        <h2>WORK EXPERIENCE</h2>
        <span>2016/2021 - Computer technician</span><br>
        <span>Company &nbsp;&nbsp;- POWER INFORMATICA</span><br>
        <br>
        <span>2021/2022 - Installation Technician</span><br>
        <span>Company&nbsp;&nbsp; - Sycket Technologies</span><br>

        <h2>SKILL</h2>
        <span>JavaScript</span><br>
        <span>HTML5</span><br>
        <span>CSS</span><br>
        <span>Python</span><br>
        <span>JAVA</span><br>
        <br><br>
        <a href="asset/cv_jemoril.pdf">Download PDF</a>
    </div>
    `);
    close.addEventListener('click', () => {
        win_my_cv.style.visibility = 'hidden';
    });
});
document.body.appendChild(win_my_cv);

win_42 = create_win('42 Malaga', 100, 150, 700, 600, 1,(content, close) => {
	
	content.innerHTML=(`
    <span align="center"> [![jesmoril's 42 stats](https://badge.mediaplus.ma/kettlebells/jesmoril?1337Badge=off&UM6P=off)](https://github.com/oakoudad/badge42) </span>
    `);
    close.addEventListener('click', () => {
        win_42.style.visibility = 'hidden';
    });
});
document.body.appendChild(win_42);

icon_cv = create_icon('My cv','asset/img/icon_text.png',10,10, () => {
    win_my_cv.style.visibility = 'visible'
    win_my_cv.focus();
});
icon_in = create_icon('Linkedin','asset/img/icon_in.png',100,-70, () => {
    window.open('https://www.linkedin.com/in/j3smoril/', '_blank').focus();
});
icon_gh = create_icon('Github','asset/img/icon_gh.png',190,-150, () => {
    window.open('https://github.com/j3smoril/', '_blank').focus();
});
icon_ps = create_icon('Play Store','asset/img/icon_ps.png',270,-230, () => {
    window.open('https://play.google.com/store/apps/developer?id=AbyssApp', '_blank').focus();
});
icon_42 = create_icon('42','asset/img/icon_42.png',270,-250, () => {
    win_42.style.visibility = 'visible'
    win_42.focus();
});
win_my_files = create_win('My files', 100, 100, 500, 200, 1, function(content, close){
	content.appendChild(icon_cv);
	content.appendChild(icon_in);
	content.appendChild(icon_gh);
    content.appendChild(icon_ps);
    content.appendChild(icon_42);

    close.addEventListener('click', () => {
        win_my_files.style.visibility = 'hidden';
    });
});
document.body.appendChild(win_my_files);
//
// games
//
win_30level = create_win('30 Level', 100, 100, 495, 385, 2,(content,close) => {
	content.innerHTML=(`
    <iframe width="100%" height="100%"
    src="game/30level/index.html">
    </iframe>
    `);
    
    close.addEventListener('click', () => {
        document.body.removeChild(win_30level);
    });
});

win_airhockey = create_win('Air Hockey', 100, 100, 330, 640, 2,(content, close) => {
	content.innerHTML=(`
    <iframe width="100%" height="100%"
    src="game/airhockey/air.html">
    </iframe>
    `);
    close.addEventListener('click', () => {
        document.body.removeChild(win_airhockey);
    });
});

icon_30level = create_icon('30 Level','asset/img/icon_30level.png',10,10, () => { 
    document.body.appendChild(win_30level);
    win_30level.focus();  
});
icon_airhockey = create_icon('Air Hockey','asset/img/icon_airhockey.png',100,-70, () => { 
    document.body.appendChild(win_airhockey);  
    win_airhockey.focus();
});
win_games = create_win('Games', 150, 150, 500, 200, 1,(content, close) => {
	content.appendChild(icon_30level);
    content.appendChild(icon_airhockey);
    close.addEventListener('click', () => {
        win_games.style.visibility = 'hidden';
    });
});
document.body.appendChild(win_games);
//
// hobby
//
win_3dprint = create_win('3D Print', 100, 100, 600, 400, 1,(content, close) => {
	
	content.innerHTML=(`
    <div class='print_3d' >
        <img src='asset/img/print1.jpg' >
        <img src='asset/img/print2.jpg' >
    </div>
    `);
    close.addEventListener('click', () => {
        win_3dprint.style.visibility = 'hidden';
    });
});
document.body.appendChild(win_3dprint);

icon_3dprint = create_icon('3D Print','asset/img/icon_3dprint.png',100,-70, () => { 
    win_3dprint.style.visibility = 'visible'
    win_3dprint.focus();
});

win_hobbys = create_win('Hobby', 200, 200 , 500, 200, 1,(content, close) => {
    
    content.appendChild(icon_3dprint);
    close.addEventListener('click', function(){
        win_hobbys.style.visibility = 'hidden';
    });

});
document.body.appendChild(win_hobbys);


// desktop icon
icon_my_files = create_icon('My files','asset/img/icon_folder.png',70,70, () => {
    win_my_files.style.visibility = 'visible'
    win_my_files.focus();
});
document.body.appendChild(icon_my_files);

icon_games = create_icon('Games','asset/img/icon_games.png',70,70, () => {
    win_games.style.visibility = 'visible'
    win_games.focus();
});
document.body.appendChild(icon_games);

icon_hobbys = create_icon('Hobbys','asset/img/icon_hobbys.png',290,-30, () => {
    win_hobbys.style.visibility = 'visible';
    win_hobbys.focus();
});
document.body.appendChild(icon_hobbys);


//
// Disbled drag img
//
function disableImgDragging() {
	var images = document.getElementsByTagName("img");
	for(var i = 0 ; i < images.length ; i++) {
		images[i].classList.add('no-drag');
		images[i].setAttribute('no-drag', 'on');
		images[i].setAttribute('draggable', 'false');
		images[i].addEventListener('dragstart', function( event ) {
			event.preventDefault();
		}, false);	
	}
}
disableImgDragging();


const loading = document.querySelector('.loading');
setTimeout(() => {
    loading.style.visibility = 'hidden';
}, 1000);

document.oncontextmenu = function(e) {
    e.preventDefault()
    return false;
}
