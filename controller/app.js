const btnMobile = document.getElementById("btn");

const click = () => {
    const list = document.getElementById("menu");
    list.classList.toggle("active");

};



btnMobile.addEventListener('click', click);
