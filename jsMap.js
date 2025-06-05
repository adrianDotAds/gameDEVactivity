function show12Rooms(){
    let x = document.getElementById('room1');
    let y = document.getElementById('room2');
    let z = document.getElementById('text1');
    z.style.display = 'block';
    let zx = document.getElementById('text2');
    zx.style.display = 'block';
    x.style.display = 'block';
    y.style.display = 'block';
}
function show34Rooms(){
    let x = document.getElementById('room3');
    let y = document.getElementById('room4');
    let z = document.getElementById('text3');
    z.style.display = 'block';
    let zx = document.getElementById('text4');
    zx.style.display = 'block';
    x.style.display = 'block';
    y.style.display = 'block';
}
function show5Room(){
    let x = document.getElementById('room5');
    let z = document.getElementById('text5');
    z.style.display = 'block';
    x.style.display = 'block';
}
function close12Rooms(){
    let x = document.getElementById('room1');
    let y = document.getElementById('room2');
    let z = document.getElementById('text1');
    z.style.display = 'none';
    let zx = document.getElementById('text2');
    zx.style.display = 'none';
    x.style.display = 'none';
    y.style.display = 'none';
}
function close34Rooms(){
    let x = document.getElementById('room3');
    let y = document.getElementById('room4');
    let z = document.getElementById('text3');
    z.style.display = 'none';
    let zx = document.getElementById('text4');
    zx.style.display = 'none';
    x.style.display = 'none';
    y.style.display = 'none';
}
function close5Room(){
    let x = document.getElementById('room5');
    x.style.display = 'none';
    let z = document.getElementById('text5');
    z.style.display = 'none';
}
