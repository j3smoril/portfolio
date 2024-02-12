
win_type_n =
(`
    <table  cellspacing='0' cellpadding='0' class='window-tab' >
      <tbody>
        <tr class='window-status-bar' >
          <td class='window-type' colspan='2' >
            <img src='img/window-type.png' >
          </td>
          <td class='window-status' colspan='2' >
          </td>  
          <td class='win_close' colspan='4' >
            <img src='img/win_close_btn.png' >
          </td>  
        </tr>
        <tr class='win_center' >
            <td class='win-left-bar'>    
          </td>
          <td  colspan='4' >
            <div class='win_content win_n'></div>
          </td>
          <td  class='window-right-bar' >
          </td>
        </tr>
        <tr class='win-bottom'>
          <td class='win_bottom_bar' colspan='5' ></td>    
            <td class='win_bottom_resizer resizer_btn' colspan='0' >
              <img src='img/win-resize-btn.png' >
            </td>
        </tr>
      </tbody>
    </table>  
`);

win_type_s =
(`
    <table  cellspacing='0' cellpadding='0' class='window-tab' >
      <tbody>
        <tr class='window-status-bar' >
          <td class='window-type' colspan='2' >
            <img src='img/window-type.png' >
          </td>
          <td class='window-status' colspan='2' >
          </td>  
          <td class='win_close' colspan='4' >
            <img src='img/win_close_btn.png' >
          </td>  
        </tr>
        <tr class='win_center' >
            <td class='win-left-bar'>    
          </td>
          <td  colspan='4' >
            <div class='win_content win_s'></div>
          </td>
          <td  class='window-right-bar' >
          </td>
        </tr>
        <tr class='win-bottom'>
          <td class='win_bottom_bar' colspan='5' ></td>    
            <td class='win_bottom_resizer' colspan='0' >
              <img src='img/win-noresizen.png' >
            </td>
        </tr>
      </tbody>
    </table>  
`);

function addDrag( drag, draggable ) {

  let src = { x:'0', y:'0' }
      
  drag.addEventListener('mousedown', function(e) {
    e.preventDefault();
    src.x = e.clientX - draggable.getBoundingClientRect().left
    src.y = e.clientY - draggable.getBoundingClientRect().top
      
    document.addEventListener('mousemove', window_move);
    document.addEventListener('mouseup', window_up);
      
    function window_move (e){
      e.preventDefault();
      var x = e.clientX - src.x;
      var y = e.clientY - src.y;
      draggable.style.top=y+"px";
      draggable.style.left=x+"px";
    }
      
    function window_up (e){
      e.preventDefault();
      document.removeEventListener('mousemove',window_move);
      document.removeEventListener('mouseup',window_up);
    }
  });
}

function addResizer( rezizer, resizable ) {

  rezizer.addEventListener('mousedown', function(e) {
    e.preventDefault;
    let original_width = parseFloat(getComputedStyle(resizable, null).getPropertyValue('width').replace('px', ''));
    let original_height = parseFloat(getComputedStyle(resizable, null).getPropertyValue('height').replace('px', ''));
    let org_mouse = { x: e.pageX, y: e.pageY }

    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
    
    function resize(e) {
      const width = original_width + (e.pageX - org_mouse.x);
      const height = original_height + (e.pageY - org_mouse.y)
      resizable.style.width = width + 'px'
      resizable.style.height = height + 'px'
    }

    function stopResize(e) {
      e.preventDefault();
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResize)
      }
  });
}

function create_win( title, x, y, w, h, type, callback ){
  
  const window =  document.createElement('div');
  window.tabIndex='1';
  window.style.left =  x + "px";
  window.style.top =  y + "px";
  window.style.width =  w + "px";
  window.style.height =  h + "px";
  window.className = type == 1 ? 'window' : 'window-s';
  window.innerHTML = type == 1 ? win_type_n : win_type_s;

  if ( type == 1 ){
    var resizer = window.querySelector('.resizer_btn'); 
    addResizer(resizer, window);
  }

  const content = window.querySelector('.win_content');
  const status = window.querySelector('.window-status');   
  const close = window.querySelector('.win_close');
      
  callback( content, close );
    
  status.innerHTML = '<span>'+title+'</span>';
       
  addDrag(status, window);
  
  
  window.addEventListener("click",(e)=>{
    window.focus();     
  });
    
  window.addEventListener("focusout", function(){
    status.style.background_color =' #497dca';
    status.style.zIndex = "35";
  });
    
  return(window);
}