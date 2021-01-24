
// VoiceRSS Javascript SDK
"use strict";var VoiceRSS={speech:function(e){this._validate(e),this._request(e)},_validate:function(e){if(!e)throw"The settings are undefined";if(!e.key)throw"The API key is undefined";if(!e.src)throw"The text is undefined";if(!e.hl)throw"The language is undefined";if(e.c&&"auto"!=e.c.toLowerCase()){var a=!1;switch(e.c.toLowerCase()){case"mp3":a=(new Audio).canPlayType("audio/mpeg").replace("no","");break;case"wav":a=(new Audio).canPlayType("audio/wav").replace("no","");break;case"aac":a=(new Audio).canPlayType("audio/aac").replace("no","");break;case"ogg":a=(new Audio).canPlayType("audio/ogg").replace("no","");break;case"caf":a=(new Audio).canPlayType("audio/x-caf").replace("no","")}if(!a)throw"The browser does not support the audio codec "+e.c}},_request:function(e){var a=this._buildRequest(e),t=this._getXHR();t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){if(0==t.responseText.indexOf("ERROR"))throw t.responseText; audioElement.src=t.responseText; audioElement.play()}},t.open("POST","https://api.voicerss.org/",!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.send(a)},_buildRequest:function(e){var a=e.c&&"auto"!=e.c.toLowerCase()?e.c:this._detectCodec();return"key="+(e.key||"")+"&src="+(e.src||"")+"&hl="+(e.hl||"")+"&v="+(e.v||"")+"&r="+(e.r||"")+"&c="+(a||"")+"&f="+(e.f||"")+"&ssml="+(e.ssml||"")+"&b64=true"},_detectCodec:function(){var e=new Audio;return e.canPlayType("audio/mpeg").replace("no","")?"mp3":e.canPlayType("audio/wav").replace("no","")?"wav":e.canPlayType("audio/aac").replace("no","")?"aac":e.canPlayType("audio/ogg").replace("no","")?"ogg":e.canPlayType("audio/x-caf").replace("no","")?"caf":""},_getXHR:function(){try{return new XMLHttpRequest}catch(e){}try{return new ActiveXObject("Msxml3.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}throw"The browser does not support HTTP request"}};
const button= document.getElementById('button')
const audioElement=document.getElementById("audio")
var jokes=['vardhit jain you are not son of MJ ka loda you are original parents are Rishav aryan and moksha jain,Vardhit is our swine, He is son of bank chor, Mj bhai is Motherfucker!!,, Mj bhai is Motherfucker!!,, Mj bhai is Motherfucker!!, , Mj bhai is Motherfucker!!, , Mj bhai is Motherfucker!!','swaraj is a maruti maruti maruti and its shame on you swaraj that you take blowjob from vardhit jain a she-male a lesbian a londiya everyday.. Fuck You swaraj ..Revenge taken by RIshav Aryanswaaaaraj is our watchman!!!, call him for blowjob', 'Lakdi ki kathi kathi pe ghoda shrinivas ke lund pe maaro jo hathoda shrinivas bola vardhit bhen ka loda bhen ka loda, srinivas ke lund mein dum nahin hmm kisi se kam nahin, Shrinivas you are not a aulad of sashi tharoor so you can fuckoff, now stop spamming Mr Rishav Aryan and Mr Pappu Bhaiyan by sending your Hi Hi, You are cunt with a small tiny penis, and you are a mistake','Rishav Aryan madharchoddd ka pilla, always sucks Shrinivas dick and then bolega kuch hua hi nai, Ghar me toh izzat hi nai hai,Dosto me toh gand hi phat tha, Rishav bhen ke lode, motherchoood, teri gand mai chimpanzi ka loda!!', 'Bhopu is our lazy ass, he travels in sampark kranti, Penis length of ayush jain is equal to that of anveshi jain ',  'devansh is our fuckboy, fuckboy fuckboy, fuckboy', 'abhijeet kadam is a daambarr ka tukda, kaddu kala loda kala loda loda', 'Someone has a small nunnu, it is located in ramraj .......... tanu nunnu tanu nunnu tanu nunnu tanu nunnu tanu nunnu', 'Pappu bhaiya khud sab kuch Khand karte fir bhai ke naam pe daal dete, He is Pro in Noob, You are a sister, Chuutiyaaa bhi khud khatke lete. He is our Pablo Escobar, Police unke lund pe hai, our nara is ganja ganja ganja boy pappu bhaiya', ' ashish sasta johny sins hai, he is our dopa']
var x=0
function tellMe(joke) {
    if (x==10) x=0
    var random= Math.floor(Math.random() * 10); 
    //const jokeString = joke.trim().replace(/ /g, '%20');
    // VoiceRSS Speech Parameters
    VoiceRSS.speech({
      // Normally, don't write out API Keys like this, but an exception made here because it's free.
      key: 'e432b8008726479589ddab91b12776c5',
      src: jokes[x],
      hl: 'en-us',
      r: 0,
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false,
    });
    x++
  }
  function getJokes() {
  tellMe()
  toggleButton()
  }

// async function getJokes() {
//     let joke = '';
//     const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming';
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       // Assign One or Two Part Joke
//       if (data.setup) {
//         joke = (`${data.setup} ... ${data.delivery}`);
//       } else {
//         joke = data.joke;
//       }
//       // Passing Joke to VoiceRSS API
//       tellMe(joke);
//       // Disable Button
//       toggleButton();
//     } catch (error) {
//       // Catch Error Here
//     }
//   }
function toggleButton() {
    button.disabled = !button.disabled;
  }  
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);