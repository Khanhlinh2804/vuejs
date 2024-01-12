let zoom = document.querySelector('zoom');
let proZoom = document.getElementById('proZoom');

zoom.addEventListener('mousemove',(e)=>{
    proZoom.style.opacity = 1;
})

zoom.addEventListener('mouseout',(e)=>{
    proZoom.style.opacity = 0;
})