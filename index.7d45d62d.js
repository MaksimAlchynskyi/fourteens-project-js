!function(){const e=document.querySelector("body"),n=document.querySelector("p"),t=(document.querySelector("a"),document.querySelector("li"),document.querySelector(".input-darkmode-toggle"));t.addEventListener("click",(()=>{t.checked?(e.style.backgroundColor="white",e.style.backgroundColor="#1e2125"):(e.style.backgroundColor="black",e.style.backgroundColor="white",n.style.color="black")}));const o=document.querySelector(".modal-link"),r=document.getElementById("modal-header"),c=document.querySelector(".close-modal-header"),d=document.querySelector(".button-modal-header");function a(){r.style.visibility="hidden"}o.addEventListener("click",(function(){r.style.visibility="visible"})),c.addEventListener("click",a),d.addEventListener("click",a),d.addEventListener("click",(function(){const e=document.querySelector(".input-modal-header").value;o.innerHTML="Вітаємо "+e}));const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop")};function u(){window.removeEventListener("keydown",s),document.body.classList.remove("show-modal")}function s(e){"Escape"===e.code&&u()}i.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",s),document.body.classList.add("show-modal")})),i.closeModalBtn.addEventListener("click",u),i.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&u()}));const l=document.querySelector(".dino"),m=document.querySelector(".cactus");document.querySelector(".dino-game").addEventListener("mousedown",(e=>{m.style.animation="cactusMove 1.5s infinite linear",function(){"jump"!=l.classList&&l.classList.add("jump");setTimeout((()=>{l.classList.remove("jump")}),550)}(),l.classList.add("dinoRun")}));setInterval((()=>{let e=parseInt(window.getComputedStyle(l).getPropertyValue("top")),n=parseInt(window.getComputedStyle(m).getPropertyValue("left"));n<50&&n>0&&e>=140&&(alert("GAME OVER"),m.style.animation="none",l.classList.remove("dinoRun"))}),10);const p=document.querySelector(".input"),y=document.querySelector(".search"),b=document.querySelector(".year-you-born");y.addEventListener("click",(()=>{p.value%4==0?(b.textContent="Ви народилися у високосний рік!",b.style.color="#039900"):(b.textContent="Ви народилися не у високосний рік!",b.style.color="#900")}));const L=document.querySelector(".enter-number"),v=document.querySelector(".search-time"),S=document.querySelector(".day-hour-min-sec");v.addEventListener("click",(()=>{const e=Math.floor(L.value/60),n=L.value%60;S.textContent=`${e}:${n}`}));let E=document.querySelector(".text-win-or-lose-guese-number-computer-guesed");const k=document.querySelector(".check-number-guese-number-computer-guesed");document.querySelector(".input-guese-number-computer-guesed");k.addEventListener("click",(()=>{const e=document.querySelector(".input-guese-number-computer-guesed").value,n=Math.floor(10*Math.random())+1;E.style.color="red",isNaN(e)||e<1||e>10?E.innerHTML="Будь ласка, введіть число від 1 до 10.":parseInt(e)===n?(E.innerHTML="Вітаю, ви вгадали число! ("+n+")",E.style.color="green"):E.innerHTML="Ви програли, комп’ютер загадав ("+n+")"}));const q=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],f=document.getElementById("scientistCardsContainer");function h(e){f.innerHTML="",e.forEach((e=>{const n=document.createElement("div");n.className="scientist-card",n.innerHTML=`\n            <p>Name: ${e.name}</p>\n            <p>Surname: ${e.surname}</p>\n            <p>Born: ${e.born}</p>\n            <p>Dead: ${e.dead}</p>\n        `,f.appendChild(n)}))}document.querySelector(".button-scien1").addEventListener("click",(function(){h(q.filter((e=>e.born>=1800&&e.born<=1899)))})),document.querySelector(".button-scien2").addEventListener("click",(function(){h(q.slice().sort(((e,n)=>e.surname.localeCompare(n.surname))))})),document.querySelector(".button-scien3").addEventListener("click",(function(){h(q.slice().sort(((e,n)=>n.dead-n.born-(e.dead-e.born))))})),document.querySelector(".button-scien4").addEventListener("click",(function(){const e=q.reduce(((e,n)=>e.born<n.born?n:e));f.innerHTML="";const n=document.createElement("div");n.className="scientist-card",n.innerHTML=`\n            <p>Name: ${e.name}</p>\n            <p>Surname: ${e.surname}</p>\n            <p>Born: ${e.born}</p>\n            <p>Dead: ${e.dead}</p>\n        `,f.appendChild(n)})),document.querySelector(".button-scien5").addEventListener("click",(function(){const e=q.find((e=>"Albert"===e.name&&"Einstein"===e.surname)).born;console.log(e),alert(`Birth year of Albert Einstein: ${e}`)})),document.querySelector(".button-scien6").addEventListener("click",(function(){h(q.filter((e=>e.surname.startsWith("C"))))})),document.querySelector(".button-scien7").addEventListener("click",(function(){h(q.filter((e=>!e.name.startsWith("A"))))})),document.querySelector(".button-scien8").addEventListener("click",(function(){const[e,n]=q.reduce((([e,n],t)=>{const o=t.dead-t.born;return[o>e.dead-e.born?t:e,o<n.dead-n.born?t:n]}),[q[0],q[0]]);console.log(e),f.innerHTML="";const t=document.createElement("div");t.className="scientist-card",t.innerHTML=`\n        <p>Name: ${e.name}</p>\n        <p>Surname: ${e.surname}</p>\n        <p>Born: ${e.born}</p>\n        <p>Dead: ${e.dead}</p>\n    `,f.appendChild(t);const o=document.createElement("div");o.className="scientist-card",o.innerHTML=`\n        <p>Name: ${n.name}</p>\n        <p>Surname: ${n.surname}</p>\n        <p>Born: ${n.born}</p>\n        <p>Dead: ${n.dead}</p>\n    `,f.appendChild(o)})),document.querySelector(".button-scien9").addEventListener("click",(function(){h(q.filter((e=>e.name[0]===e.surname[0])))}))}();
//# sourceMappingURL=index.7d45d62d.js.map
