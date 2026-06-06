const form = document.getElementById("registrationForm");
const table = document.getElementById("participantsTable");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e){

e.preventDefault();

let valid = true;

let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let dob = document.getElementById("dob");
let gender = document.getElementById("gender");
let event = document.getElementById("event");
let college = document.getElementById("college");
let confirm = document.getElementById("confirm");

let mode = document.querySelector('input[name="mode"]:checked');

clearErrors();

if(name.value.trim() === ""){
showError(name,"nameError","Name required");
valid=false;
}else{
setValid(name);
}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.value.match(emailPattern)){
showError(email,"emailError","Invalid Email");
valid=false;
}else{
setValid(email);
}

let phonePattern=/^[0-9]{10}$/;

if(!phone.value.match(phonePattern)){
showError(phone,"phoneError","Phone must be 10 digits");
valid=false;
}else{
setValid(phone);
}

if(dob.value===""){
showError(dob,"dobError","Select DOB");
valid=false;
}else{
setValid(dob);
}

if(gender.value===""){
showError(gender,"genderError","Select Gender");
valid=false;
}else{
setValid(gender);
}

if(event.value===""){
showError(event,"eventError","Select Event");
valid=false;
}else{
setValid(event);
}

if(!mode){
document.getElementById("modeError").innerText="Select Mode";
valid=false;
}

if(college.value.trim()===""){
showError(college,"collegeError","Enter College");
valid=false;
}else{
setValid(college);
}

if(!confirm.checked){
document.getElementById("confirmError").innerText="Please confirm details";
valid=false;
}

if(valid){

let row = document.createElement("tr");

row.innerHTML=`
<td>${name.value}</td>
<td>${email.value}</td>
<td>${phone.value}</td>
<td>${event.value}</td>
<td>${mode.value}</td>
<td><button class="deleteBtn">Delete</button></td>
`;

table.appendChild(row);

row.querySelector(".deleteBtn").addEventListener("click",function(){
row.remove();
});

successMessage.innerText="Registration Successful!";

setTimeout(()=>{
successMessage.innerText="";
},3000);

form.reset();

let inputs=document.querySelectorAll("input,select");
inputs.forEach(i=>i.classList.remove("valid"));

}

});

function showError(input,id,message){
document.getElementById(id).innerText=message;
input.classList.add("invalid");
}

function setValid(input){
input.classList.remove("invalid");
input.classList.add("valid");
}

function clearErrors(){
let errors=document.querySelectorAll(".error");
errors.forEach(e=>e.innerText="");

let inputs=document.querySelectorAll("input,select");
inputs.forEach(i=>i.classList.remove("invalid"));
}