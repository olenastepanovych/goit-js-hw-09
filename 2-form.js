import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form"),o=t.querySelector('input[name="email"]'),n=t.querySelector('textarea[name="message"]'),r="feedback-form-state";let e={email:"",message:""};const i=()=>{localStorage.setItem(r,JSON.stringify(e))},m=localStorage.getItem(r);m&&(e=JSON.parse(m),o.value=e.email||"",n.value=e.message||"");t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),i()});t.addEventListener("submit",a=>{a.preventDefault();const s=o.value.trim(),l=n.value.trim();if(!s||!l){alert("Please fill in all fields");return}console.log({email:s,message:l}),localStorage.removeItem(r),e={email:"",message:""},t.reset()});
//# sourceMappingURL=2-form.js.map
