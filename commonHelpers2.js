import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),s=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e===null)return;for(const t in e)a.elements[t].value=e[t]}catch(e){console.log(e)}};s();const r=e=>{const t={email:a.elements.email.value,message:a.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))},l=e=>{e.preventDefault();const t={email:a.elements.email.value.trim(),message:a.elements.message.value.trim()};if(!t.email||!t.message){alert("Заполните поля");return}console.log(t),a.reset(),localStorage.removeItem("feedback-form-state")};a.addEventListener("input",r);a.addEventListener("submit",l);
//# sourceMappingURL=commonHelpers2.js.map
