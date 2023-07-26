const menu = document.querySelector(".openmenu");
const list = document.querySelector(".list");

menu.addEventListener("click", ()=>{
    list.classList.toggle("open")
})


// getting form data to my email

function sendEmail (){
    var params = {
        name : document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message : document.getElementById("message").value
    };
    const serviceId = "service_47a20sm";
const templateId = "template_0mesdz9";

emailjs.send(serviceId, templateId, params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
).catch((err)=>{

    console.log(err);
})
};

