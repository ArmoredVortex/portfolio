let r = document.querySelector(':root');
// --base-text :
// --hover-text :
// --bg-color :
    let monospace = document.getElementById('monospace')
    monospace.addEventListener('click',()=>{
        r.style.setProperty('--base-text', '#9578D3');
        r.style.setProperty('--bg-color', '#181C18');
        r.style.setProperty('--hover-text', '#00CE7C');
        setCookie('theme','monospace',365);
    })
    let redVelvet = document.getElementById('red-velvet')
    redVelvet.addEventListener('click',()=>{
        r.style.setProperty('--base-text', '#EC4C56');
        r.style.setProperty('--bg-color', '#242933');
        r.style.setProperty('--hover-text', '#F6F0E9');
        setCookie('theme','redVelvet',365);
    })
    let light = document.getElementById('light')
    light.addEventListener('click',()=>{
        r.style.setProperty('--base-text', '#000000');
        r.style.setProperty('--bg-color', '#c2c5cc');
        r.style.setProperty('--hover-text', '#2D539E');
        setCookie('theme','light',365);
    })
    let wasp = document.getElementById('wasp')
    wasp.addEventListener('click',()=>{
        r.style.setProperty('--base-text', '#F7F700');
        r.style.setProperty('--bg-color', '#000000');
        r.style.setProperty('--hover-text', '#FFFFFF');
        setCookie('theme','wasp',365);
    })
    let ocean = document.getElementById('ocean')
    ocean.addEventListener('click',()=>{
        r.style.setProperty('--base-text', '#4A6FB5');
        r.style.setProperty('--bg-color', '#191826');
        r.style.setProperty('--hover-text', '#93939F');
        setCookie('theme','ocean',365);
    })
    let olive = document.getElementById('olive')
    olive.addEventListener('click',()=>{
        r.style.setProperty('--base-text', '#92946F');
        r.style.setProperty('--bg-color', '#E9E5CC');
        r.style.setProperty('--hover-text', '#373731');
        setCookie('theme','olive',365)
    })
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }