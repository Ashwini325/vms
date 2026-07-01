const k='vmsLite';const t=document.getElementById('t');
function load(){t.innerHTML='';(JSON.parse(localStorage.getItem(k)||'[]')).forEach(v=>t.innerHTML+=`<tr><td>${v.n}</td><td>${v.h}</td><td>${v.p}</td><td>${v.tm}</td></tr>`)}
load();
document.getElementById('f').onsubmit=e=>{e.preventDefault();let a=JSON.parse(localStorage.getItem(k)||'[]');a.push({n:name.value,h:host.value,p:purpose.value,tm:new Date().toLocaleString()});localStorage.setItem(k,JSON.stringify(a));e.target.reset();load();};