// VanillaTilt.init(document.querySelector(".boxCard"), {
    //     max: 25,
    //     speed: 500,
    //     glare: true,
    //     "max-glare": 0.7
    // });
    
alert(`Em Desenvolvimento!!!`)
    
const btnMobile = document.getElementById("btn");
    
const click = () => {
    const list = document.getElementById("menu");
    list.classList.toggle("active");
};
    
btnMobile.addEventListener('click', click);

const btnOpen = document.querySelectorAll('.btnOpen');
const btnClose = document.querySelector('#btnClose');
const container = document.querySelector('.containerCard');
const modal = document.querySelector('.containerModal');
const boxModal = document.querySelector('.boxModal');

const openModal = () => {
    container.style.display = 'none';
    
    modal.style.display = 'flex';
    modal.style.width = '100%';
    
    boxModal.style.display = 'flex';
    boxModal.style.alignItems = 'center';
    boxModal.style.marginTop = '40px'
};   

const closeModal = () => {
    container.style.display = 'flex';
    
    modal.style.display = 'none';
};   

btnClose.addEventListener('click', closeModal);

btnOpen.forEach((btn) =>
  btn.addEventListener('click', openModal)
);


