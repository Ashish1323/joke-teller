
// VoiceRSS Javascript SDK
"use strict";var VoiceRSS={speech:function(e){this._validate(e),this._request(e)},_validate:function(e){if(!e)throw"The settings are undefined";if(!e.key)throw"The API key is undefined";if(!e.src)throw"The text is undefined";if(!e.hl)throw"The language is undefined";if(e.c&&"auto"!=e.c.toLowerCase()){var a=!1;switch(e.c.toLowerCase()){case"mp3":a=(new Audio).canPlayType("audio/mpeg").replace("no","");break;case"wav":a=(new Audio).canPlayType("audio/wav").replace("no","");break;case"aac":a=(new Audio).canPlayType("audio/aac").replace("no","");break;case"ogg":a=(new Audio).canPlayType("audio/ogg").replace("no","");break;case"caf":a=(new Audio).canPlayType("audio/x-caf").replace("no","")}if(!a)throw"The browser does not support the audio codec "+e.c}},_request:function(e){var a=this._buildRequest(e),t=this._getXHR();t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){if(0==t.responseText.indexOf("ERROR"))throw t.responseText; audioElement.src=t.responseText; audioElement.play()}},t.open("POST","https://api.voicerss.org/",!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.send(a)},_buildRequest:function(e){var a=e.c&&"auto"!=e.c.toLowerCase()?e.c:this._detectCodec();return"key="+(e.key||"")+"&src="+(e.src||"")+"&hl="+(e.hl||"")+"&v="+(e.v||"")+"&r="+(e.r||"")+"&c="+(a||"")+"&f="+(e.f||"")+"&ssml="+(e.ssml||"")+"&b64=true"},_detectCodec:function(){var e=new Audio;return e.canPlayType("audio/mpeg").replace("no","")?"mp3":e.canPlayType("audio/wav").replace("no","")?"wav":e.canPlayType("audio/aac").replace("no","")?"aac":e.canPlayType("audio/ogg").replace("no","")?"ogg":e.canPlayType("audio/x-caf").replace("no","")?"caf":""},_getXHR:function(){try{return new XMLHttpRequest}catch(e){}try{return new ActiveXObject("Msxml3.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}throw"The browser does not support HTTP request"}};
const button= document.getElementById('button')
const audioElement=document.getElementById("audio")
var jokes=['Rishav bhen ke lode madarchod, teri gand maar dunga', 'Vardhit randi, sabka muh mai leti', 'Bhopu chut ka pilla bhen ka chodan', 'hi hi hi hi hi hi shrini', 'devansh apna langda hai apka muh mai leta hai', 'kaddu kala loda kala loda loda', 'tanu nunnu tanu nunnu', 'ganja ganja ganja boy pappu bhaiya', 'tumahara baap kon hai bolo,', 'swaaaaraj is our watchman!!!, call him for blowjob']

function tellMe(joke) {
    //var random= Math.floor(Math.random() * 10); 
    const jokeString = joke.trim().replace(/ /g, '%20');
    // VoiceRSS Speech Parameters
    VoiceRSS.speech({
      // Normally, don't write out API Keys like this, but an exception made here because it's free.
      key: 'e432b8008726479589ddab91b12776c5',
      src: jokeString,
      hl: 'en-us',
      r: 0,
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false,
    });
  }
//   function getJokes() {
//   tellMe()
//   toggleButton()
//   }

async function getJokes() {
    let joke = '';
    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming';
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      // Assign One or Two Part Joke
      if (data.setup) {
        joke = (`${data.setup} ... ${data.delivery}`);
      } else {
        joke = data.joke;
      }
      // Passing Joke to VoiceRSS API
      tellMe(joke);
      // Disable Button
      toggleButton();
    } catch (error) {
      // Catch Error Here
    }
  }
function toggleButton() {
    button.disabled = !button.disabled;
  }  
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);