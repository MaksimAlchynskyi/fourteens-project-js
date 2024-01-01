document.querySelector("body"),document.querySelector("p"),document.querySelector("a"),document.querySelector("li");const e=document.querySelector("main"),t=document.querySelector("footer"),n=document.querySelector("header"),o=document.querySelector(".input-darkmode-toggle"),r=document.querySelector(".modal-content-header"),d=document.querySelectorAll("button"),c=document.querySelectorAll("h2"),a=document.querySelectorAll("p"),l=document.querySelectorAll("a"),i=document.querySelector(".modal");o.addEventListener("click",()=>{for(let o of(t.classList.toggle("dark-theme"),e.classList.toggle("dark-theme"),n.classList.toggle("dark-theme"),r.classList.toggle("dark-theme"),i.classList.toggle("dark-theme"),d))o.classList.toggle("dark-theme");for(let e of c)e.classList.toggle("dark-theme");for(let e of a)e.classList.toggle("dark-theme");for(let e of l)e.classList.toggle("dark-theme")});const u=document.querySelector(".modal-link"),s=document.getElementById("modal-header"),m=document.querySelector(".close-modal-header"),p=document.querySelector(".button-modal-header");function y(){s.style.visibility="hidden"}u.addEventListener("click",function(){s.style.visibility="visible"}),m.addEventListener("click",y),p.addEventListener("click",y),p.addEventListener("click",function(){let e=document.querySelector(".input-modal-header").value;u.innerHTML="Вітаємо "+e});const b={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop")};function L(){window.removeEventListener("keydown",S),document.body.classList.remove("show-modal")}function S(e){"Escape"===e.code&&L()}b.openModalBtn.addEventListener("click",function(){window.addEventListener("keydown",S),document.body.classList.add("show-modal")}),b.closeModalBtn.addEventListener("click",L),b.backdrop.addEventListener("click",function(e){e.currentTarget===e.target&&L()});const f=document.querySelector(".dino"),h=document.querySelector(".cactus");document.querySelector(".dino-game").addEventListener("mousedown",e=>{h.style.animation="cactusMove 1.5s infinite linear","jump"!=f.classList&&f.classList.add("jump"),setTimeout(()=>{f.classList.remove("jump")},550),f.classList.add("dinoRun")}),setInterval(()=>{let e=parseInt(window.getComputedStyle(f).getPropertyValue("top")),t=parseInt(window.getComputedStyle(h).getPropertyValue("left"));t<50&&t>0&&e>=140&&(alert("GAME OVER"),h.style.animation="none",f.classList.remove("dinoRun"))},10);const g=document.querySelector(".input"),v=document.querySelector(".search"),q=document.querySelector(".year-you-born");v.addEventListener("click",()=>{g.value%4==0?(q.textContent="Ви народилися у високосний рік!",q.style.color="#039900"):(q.textContent="Ви народилися не у високосний рік!",q.style.color="#900")});const k=document.querySelector(".enter-number"),E=document.querySelector(".search-time"),M=document.querySelector(".day-hour-min-sec");E.addEventListener("click",()=>{let e=Math.floor(k.value/60),t=k.value%60;M.textContent=`${e}:${t}`});let w=document.querySelector(".text-win-or-lose-guese-number-computer-guesed");const C=document.querySelector(".check-number-guese-number-computer-guesed");document.querySelector(".input-guese-number-computer-guesed"),C.addEventListener("click",()=>{let e=document.querySelector(".input-guese-number-computer-guesed").value,t=Math.floor(10*Math.random())+1;w.style.color="red",isNaN(e)||e<1||e>10?w.innerHTML="Будь ласка, введіть число від 1 до 10.":parseInt(e)===t?(w.innerHTML="Вітаю, ви вгадали число! ("+t+")",w.style.color="green"):w.innerHTML="Ви програли, комп’ютер загадав ("+t+")"});const H=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],T=document.getElementById("scientistCardsContainer");function B(e){T.innerHTML="",e.forEach(e=>{let t=document.createElement("div");t.className="scientist-card",t.innerHTML=`
            <p>Name: ${e.name}</p>
            <p>Surname: ${e.surname}</p>
            <p>Born: ${e.born}</p>
            <p>Dead: ${e.dead}</p>
        `,T.appendChild(t)})}document.querySelector(".button-scien1").addEventListener("click",function(){B(H.filter(e=>e.born>=1800&&e.born<=1899))}),document.querySelector(".button-scien2").addEventListener("click",function(){B(H.slice().sort((e,t)=>e.surname.localeCompare(t.surname)))}),document.querySelector(".button-scien3").addEventListener("click",function(){B(H.slice().sort((e,t)=>t.dead-t.born-(e.dead-e.born)))}),document.querySelector(".button-scien4").addEventListener("click",function(){let e=H.reduce((e,t)=>e.born<t.born?t:e);T.innerHTML="";let t=document.createElement("div");t.className="scientist-card",t.innerHTML=`
            <p>Name: ${e.name}</p>
            <p>Surname: ${e.surname}</p>
            <p>Born: ${e.born}</p>
            <p>Dead: ${e.dead}</p>
        `,T.appendChild(t)}),document.querySelector(".button-scien5").addEventListener("click",function(){let e=H.find(e=>"Albert"===e.name&&"Einstein"===e.surname).born;console.log(e),alert(`Birth year of Albert Einstein: ${e}`)}),document.querySelector(".button-scien6").addEventListener("click",function(){B(H.filter(e=>e.surname.startsWith("C")))}),document.querySelector(".button-scien7").addEventListener("click",function(){B(H.filter(e=>!e.name.startsWith("A")))}),document.querySelector(".button-scien8").addEventListener("click",function(){let[e,t]=H.reduce(([e,t],n)=>{let o=n.dead-n.born;return[o>e.dead-e.born?n:e,o<t.dead-t.born?n:t]},[H[0],H[0]]);console.log(e),T.innerHTML="";let n=document.createElement("div");n.className="scientist-card",n.innerHTML=`
        <p>Name: ${e.name}</p>
        <p>Surname: ${e.surname}</p>
        <p>Born: ${e.born}</p>
        <p>Dead: ${e.dead}</p>
    `,T.appendChild(n);let o=document.createElement("div");o.className="scientist-card",o.innerHTML=`
        <p>Name: ${t.name}</p>
        <p>Surname: ${t.surname}</p>
        <p>Born: ${t.born}</p>
        <p>Dead: ${t.dead}</p>
    `,T.appendChild(o)}),document.querySelector(".button-scien9").addEventListener("click",function(){B(H.filter(e=>e.name[0]===e.surname[0]))}),$(document).ready(function(e){$(".list-team").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".football-field"),t=document.querySelector(".football");e.addEventListener("mousemove",function(n){let o=e.getBoundingClientRect(),r=n.clientX-o.left,d=n.clientY-o.top;r=Math.max(0,Math.min(r,o.width-t.offsetWidth)),d=Math.max(0,Math.min(d,o.height-t.offsetHeight)),setTimeout(function(){t.style.left=r+"px",t.style.top=d+"px"})})});
//# sourceMappingURL=index.2207e7eb.js.map
