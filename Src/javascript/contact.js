 // Contact Page 
 function message(){
    var FirstName=document.getElementById('first-name');
    var LastName=document.getElementById('last-name');
    var Email=document.getElementById('email');
    var Msg=document.getElementById('msg');
    const success=document.getElementById('success');
    const danger=document.getElementById('danger');
     if(FirstName.value===""|| LastName.value===""||Email.value===""||Msg.value===""){
      danger.style.display='block'
     }
     else{
      setTimeout(()=>{
        FirstName.value='';
        LastName.value='';
        Email.value='';
        Msg.value='';
      }, 2000)
      success.style.display='block'
     }
  }
