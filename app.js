
//get modal element
var modal = document.getElementById('modal-eng');
var modal2 = document.getElementById('modal-web');
var modal3 = document.getElementById('modal-misc');
var modal4 = document.getElementById('modal-secret');
//get open modal button
var openBtn = document.getElementById('btn-eng');
var openBtn2 = document.getElementById('btn-web');
var openBtn3 = document.getElementById('btn-misc');
var openBtn4 = document.getElementById('secret-btn');
//get close button
var closeBtn = document.getElementById('close-btn-eng');
var closeBtn2 = document.getElementById('close-btn-web');
var closeBtn3 = document.getElementById('close-btn-misc');
var closeBtn4 = document.getElementById('close-btn-secret');

//listen for open click
openBtn.addEventListener('click', openModal);
openBtn2.addEventListener('click', openModal2);
openBtn3.addEventListener('click', openModal3);
openBtn4.addEventListener('click', openModal4);
//listen for close click
closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal2);
closeBtn3.addEventListener('click', closeModal3);
closeBtn4.addEventListener('click', closeModal4);
//listen for outside click
window.addEventListener('click', outsideClick);
window.addEventListener('click', outsideClick2);
window.addEventListener('click', outsideClick3);
window.addEventListener('click', outsideClick4);

//function to open modal
function openModal(){
    modal.style.display = 'block';
}
function openModal2(){
    modal2.style.display = 'block';
}
function openModal3(){
    modal3.style.display = 'block';
}
function openModal4(){
    alert('Get COCKED! 🐣'); //added an alert to opening function
    modal4.style.display = 'block';
}

//function to close modal
function closeModal(){
    modal.style.display = 'none';
}
function closeModal2(){
    modal2.style.display = 'none';
}
function closeModal3(){
    modal3.style.display = 'none';
}
function closeModal4(){
    modal4.style.display = 'none';
}

//function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}
function outsideClick2(e){
    if(e.target == modal2){
        modal2.style.display = 'none';
    }
}
function outsideClick3(e){
    if(e.target == modal3){
        modal3.style.display = 'none';
    }
}
function outsideClick4(e){
    if(e.target == modal4){
        modal4.style.display = 'none';
    }
}



