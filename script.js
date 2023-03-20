// keypress input change voice input icon 

const textInput = document.querySelector('.textInput input');
const voiceInput = document.querySelector('.voiceInput p');

textInput.addEventListener('keyup',function(){
  if(Boolean(textInput.value)){
    voiceInput.innerHTML = `<svg id="send" viewBox="0 0 24 24" height="30" width="30" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg>`;
  }else if(!Boolean(textInput.value)){
    voiceInput.innerHTML = `<svg viewBox="0 0 24 24" height="30" width="30" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg>`;
  }
});

// menu dropdown show and hide 

const menuDropdown = document.querySelector('.menuDropdown');
const menuIcon = document.querySelector('#menu');

menuIcon.addEventListener('click',function() {
  if(!menuDropdown.classList.contains('showTR')){
    menuDropdown.classList.add('showTR');
  }else if(menuDropdown.classList.contains('showTR')){
    menuDropdown.classList.remove('showTR');
  }
});

// add chat input self msg in chat history


const chatHistory = document.querySelector('.chatHistory');

textInput.addEventListener('keyup',function(){
  const sendBtn = document.querySelector("#send");
  const textInputVal = textInput.value;
  sendBtn.addEventListener('click',function() {
    let hour = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours();
    let minutes = new Date().getMinutes();
    let medium = new Date().getHours() > 12 ? 'pm' : 'am';
    // if(textInputVal){
      chatHistory.innerHTML += `<div class="selfMsg" style="width: 40rem">
      <p>${textInputVal}<sub>${(new Date().getHours()-12) < 10 ? "0":""}${hour}:${new Date().getMinutes() < 10 ? "0":""}${minutes} ${medium}</sub></p>
    </div>`;
    // }
    textInputVal.innerHTML = '';
  });
});
