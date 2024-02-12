
const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

function create_icon( iconName, iconImage, x, y, action_open ){
    
    const icon = document.createElement("div");
    const img  = document.createElement("img");
    const text = document.createElement("span");
   
    icon.className = "icon";
    img.src = iconImage;
    text.innerHTML = iconName;
    //icon.style.left =  x + "px";
    //icon.style.top =  y + "px";

    icon.appendChild(img);
    icon.appendChild(text);
  
    icon.addEventListener('mousedown', function(e) {
      e.preventDefault();
      let srcX = e.clientX; 
      let srcY = e.clientY;
      
      let srcLeft = getComputedStyle(icon).getPropertyValue('left').split('px')[0] *1;
      let srcTop = getComputedStyle(icon).getPropertyValue('top').split('px')[0] * 1;
      
      document.addEventListener('mousemove', icon_move);
      document.addEventListener('mouseup', icon_up);
      icon.addEventListener('dblclick', icon_open);

      function icon_move (e){
        e.preventDefault();
        let distX = e.clientX - srcX;
        let distY = e.clientY - srcY;
        icon.style.left = srcLeft + distX + "px";
        icon.style.top = srcTop + distY + "px";
      }
  
      function icon_up (e){
        e.preventDefault();
        document.removeEventListener('mousemove',icon_move);
        document.removeEventListener('mouseup',icon_up);
      }
  
      function icon_open(e){
        action_open()
      }
     
    })

    icon.addEventListener('touchend', function(e) {
      e.preventDefault();
      
      let srcX = e.clientX; 
      let srcY = e.clientY;
      
      let srcLeft = getComputedStyle(icon).getPropertyValue('left').split('px')[0] *1;
      let srcTop = getComputedStyle(icon).getPropertyValue('top').split('px')[0] * 1;
      
      document.addEventListener('touchmove', icon_move);
      document.addEventListener('mouseup', icon_up);
      icon.addEventListener('dblclick', icon_open);

      function icon_move (e){
        e.preventDefault();
        let distX = e.clientX - srcX;
        let distY = e.clientY - srcY;
        icon.style.left = srcLeft + distX + "px";
        icon.style.top = srcTop + distY + "px";
      }
  
      function icon_up (e){
        e.preventDefault();
        document.removeEventListener('touchmove',icon_move);
        document.removeEventListener('mouseup',icon_up);
      }
  
      function icon_open(e){
        action_open()
      }
     
    })

  return(icon);
}

