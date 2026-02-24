const cards=document.querySelectorAll(".game-card"),launcher=document.getElementById("launcher"),frame=document.getElementById("gameFrame"),backBtn=document.getElementById("backBtn"),home=document.getElementById("home"),credits=document.getElementById("credits"),creditsBtn=document.getElementById("creditsBtn"),creditsBackBtn=document.getElementById("creditsBackBtn"),search=document.getElementById("search");

cards.forEach(card=>card.onclick=()=>{frame.src=card.dataset.url;launcher.classList.remove("hidden");home.classList.add("hidden");credits.classList.add("hidden")});

backBtn.onclick=()=>{frame.src="";launcher.classList.add("hidden");home.classList.remove("hidden")};

creditsBtn.onclick=()=>{home.classList.add("hidden");launcher.classList.add("hidden");credits.classList.remove("hidden")};

creditsBackBtn.onclick=()=>{credits.classList.add("hidden");home.classList.remove("hidden")};

search.oninput=()=>{const q=search.value.toLowerCase();cards.forEach(c=>c.style.display=c.dataset.name.toLowerCase().includes(q)?"block":"none")};
