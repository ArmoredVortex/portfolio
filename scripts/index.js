window.onload = () => {
    let r = document.querySelector(':root');
    let theme = getCookie('theme');
    switch(theme){
        case 'monospace':
            r.style.setProperty('--base-text', '#9578D3');
            r.style.setProperty('--bg-color', '#181C18');
            r.style.setProperty('--hover-text', '#00CE7C');
            break;
        case 'light':
            r.style.setProperty('--base-text', '#000000');
            r.style.setProperty('--bg-color', '#c2c5cc');
            r.style.setProperty('--hover-text', '#2D539E'); 
            break;   
        case 'wasp':
            r.style.setProperty('--base-text', '#F7F700');
            r.style.setProperty('--bg-color', '#000000');
            r.style.setProperty('--hover-text', '#FFFFFF');   
            break; 
        case 'redVelvet':
            r.style.setProperty('--base-text', '#EC4C56');
            r.style.setProperty('--bg-color', '#242933');
            r.style.setProperty('--hover-text', '#F6F0E9');  
            break;  
    }
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}