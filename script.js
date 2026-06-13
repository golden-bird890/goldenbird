function sendWhatsApp(){

let name=document.getElementById("name").value;
let mobile=document.getElementById("mobile").value;
let city=document.getElementById("city").value;
let message=document.getElementById("message").value;

let text=
`Golden Bird Enquiry

Name: ${name}
Mobile: ${mobile}
City: ${city}
Message: ${message}`;

let url=
`https://wa.me/919561418118?text=${encodeURIComponent(text)}`;

window.open(url,'_blank');
}