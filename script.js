


let notification = document.getElementById("notification");
let successMsg = '<i class="fa-solid fa-circle-check" style="color:rgb(83, 235, 52);"></i> Submitted is successfuly!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation" style="color: #FFD43B;"></i> Invalid input, please try again!';
let errorMsg = ' <i class="fa-solid fa-circle-xmark" style="color:rgb(255, 59, 59);"></i> Oops, something wrong, please fix the error!';


function PressButton(msg) {
  
  let addNotification = document.createElement("p");
  addNotification.innerHTML = msg;
  addNotification.className = "notification";

  notification.appendChild(addNotification);


  // check if text match in msg then add class
  if(msg.includes('error')){
    addNotification.classList.add('error')
  };

  if(msg.includes('Invalid')){
    addNotification.classList.add('invalid')
  };
  
setTimeout(()=>{
  addNotification.remove();
}, 5000);

}
