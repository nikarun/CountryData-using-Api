'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const submitButton= document.querySelector('.submit-button');
const countryName= document.querySelector('.input');
const errorMessage=document.querySelector('#demo');
///////////////////////////////////////
const getCountryData = function (country) {
const request=new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
request.send();//gets executed asynchrnously background



request.addEventListener('load',function(){
    const [data]=JSON.parse(request.responseText);

const html=`<article class="country">
<img class="country__img" src="${data.flag}" />
<div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(2)} million</p>
  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
</div>
</article>`



    
})
}
// submitButton.addEventListener('click',function(){
 
// if(!countryName.value){
//   errorMessage.innerHTML='Not a valid input'
// }
// else{
//   try{
//     getCountryData(countryName.value);
//   } catch(e){
//     errorMessage.innerHTML=e;
//   }
// }
// })




// btn.addEventListener('click',function(){
// const request=fetch('https://restcountries.eu/rest/v2/name/portugal');
// request.then(function(response){//we are having data in body section of response we need to convert that data to ////json actiually look these data
//  const data=response.json();//these is again a promise
//  console.log(data);
//  data.then(function(finalResponse){
//  const [array]=finalResponse;
//  getCountryData(array.name)
//  })
  
 
// })
// fetch('https://restcountries.eu/rest/v2/name/usa')
// .then((response)=>response.json(),(err)=>alert(err)).
// then(function(finalResponse){
//   const [array]=finalResponse;
//   getCountryData(array.name)
// })

// })


// try{
// const request=fetch('https://restcountries.eu/rest/v2/name/usagfd');
// console.log(request);
// request.then((response)=>{
//   console.log(response.status);
// })
// }

submitButton.addEventListener('click', function(){
  if(!countryName.value){
    errorMessage.innerHTML="Please Enter valid Country Name"
  }else{
    const request=fetch(`https://restcountries.eu/rest/v2/name/${countryName.value}`);
    request.then((response)=>{
      console.log(response.status);
      if(response.status=='404'){
        errorMessage.innerHTML="Please Enter valid Country Name"
      }
      else{
      const info=response.json();
      info.then((finalResponse)=>{
       const [data]=finalResponse;
       console.log(data);
      
       const html=`<article class="country">
       <img class="country__img" src="${data.flag}" />
       <div class="country__data">
         <h3 class="country__name">${data.name}</h3>
         <h4 class="country__region">${data.region}</h4>
         <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(2)} million</p>
         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
       </div>
       </article>`
       countriesContainer.insertAdjacentHTML("beforeend",html);
       countriesContainer.style.opacity =1;

      })
      errorMessage.innerHTML="";
      countryName.value="";
      }
    })

  }
})