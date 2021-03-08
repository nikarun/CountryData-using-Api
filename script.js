'use strict'
const submitButton= document.querySelector('.btn');
const latitude=document.querySelector('.lati-field');
const longitude=document.querySelector('.longi-field');
const errorMessage=document.querySelector('#demo')

submitButton.addEventListener('click', function(){
if(!latitude.value||!longitude.value){
errorMessage.innerHTML="Please Enter valid data"
}else{
fetch(`https://geocode.xyz/${latitude.value},${longitude.value}?geoit=json`).
  then((response)=>{
      if(!response.ok) throw new Error(`problem with geocoding ${response.status}`)
     else if(!response.status==200){
        errorMessage.innerHTML="Invalid Inputs"
     }else{
         response.json()
         .then((response2)=>{
            errorMessage.innerHTML=`You Belongs to ${response2.city} , ${response2.country}`
            errorMessage.style.color='green'
      errorMessage.style.fontSize='30px';
         })
     }
  })
  .catch((error)=>console.error(`${error} 🤣`))
 
}
})
// fetch('https://geocode.xyz/26.921040,75.794360?geoit=json')
//     .then((response1)=>response1.json())
//     .then((response2)=>{
//         console.log(response2);
//        if(response2.region) console.log(response2.region);
//        if(response2.country) console.log(response2.country);
//        errorMessage.innerHTML=`You Belongs to ${response2.region} , ${response2.country}`
//        errorMessage.style.color='green'
//        errorMessage.style.fontSize='30px';
//     })
