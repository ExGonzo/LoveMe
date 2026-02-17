const btn = document.getElementById('loveBtn');
const msg = document.getElementById('message');
const area = document.getElementById('gameArea');
const effects = document.getElementById('effects');

const phrases = [
  {t: "Hey princess — every click is another tiny mischief we get to make together.",e:"hearts"},
  {t: "Mermaid mode: you just summoned a pocket of giggles and bubbles.",e:"hearts"},
  {t: "Babe, your 'game skills' are adorable — I still carry you in co-op like a boss.",e:"spark"},
  {t: "We bicker about the silliest things and then make up with extra snacks.",e:"shake"},
  {t: "You acting sexy in front of bears is a whole mood — headline material.",e:"hearts"},
  {t: "You: 'Is pizza a breakfast?' Me: 'Only if the queen approves.'",e:"spark"},
  {t: "Your questions are so cute they should get their own emoji.",e:"hearts"},
  {t: "If loving you were a sport I'd happily be on your team — coach me, princess.",e:"spark"},
  {t: "I forgive your lack of aim — your hugs always hit the perfect spot.",e:"hearts"},
  {t: "You call me out and I call you mine. Truce?",e:"hearts"},
  {t: "You make silly questions sound like secret invitations to giggle.",e:"spark"},
  {t: "Princess, come here — I brought bad jokes and better cuddles.",e:"hearts"},
  {t: "Mermaid warning: splashing may cause spontaneous kisses.",e:"hearts"},
  {t: "Sometimes you win by being extra dramatic — and it's charming every time.",e:"shake"},
  {t: "I love how you try to look intimidating in front of bears — it's secretly hot.",e:"hearts"},
  {t: "Babe, your 'one more round' face is my favorite cliffhanger.",e:"spark"},
  // grand finale will be added as last entry below (no 'best friend')
  {t: "Finale: Sarah — I'm crazy about you. You are my forever vibe. Let's celebrate us: 🎉🥂✨💫❤️ — every silly fight, every late-night snack, every 'what did you mean?' — I'm yours.",e:"final"}
];

let idx = 0;

function randomPosFor(el){
  const rect = area.getBoundingClientRect();
  const w = el.offsetWidth, h = el.offsetHeight;
  const x = Math.random()*(rect.width - w - 24) + 12; // padding
  const y = Math.random()*(rect.height - h - 24) + 32;
  return {x,y};
}

function moveButton(){
  const p = randomPosFor(btn);
  btn.style.left = p.x + 'px';
  btn.style.top = p.y + 'px';
}

function clearEffects(){
  effects.innerHTML = '';
}

function spawnHearts(count=6){
  for(let i=0;i<count;i++){
    const h = document.createElement('div');
    h.className='heart pop';
    h.style.left = (btn.offsetLeft + (Math.random()*220-110)) + 'px';
    h.style.top = (btn.offsetTop + (Math.random()*120-40)) + 'px';
    h.style.setProperty('--delay', Math.random() + 's');
    effects.appendChild(h);
    setTimeout(()=>h.remove(),1100);
  }
}

function spawnSparks(count=8){
  for(let i=0;i<count;i++){
    const s = document.createElement('div');
    s.className='spark';
    s.style.left = (btn.offsetLeft + btn.offsetWidth/2 + (Math.random()*160-80)) + 'px';
    s.style.top = (btn.offsetTop + btn.offsetHeight/2 + (Math.random()*80-40)) + 'px';
    s.style.background = ['#FFD166','#FF6B6B','#A0E7E5'][Math.floor(Math.random()*3)];
    effects.appendChild(s);
    s.animate([{opacity:1,transform:'translateY(0) scale(1)'},{opacity:0,transform:'translateY(-90px) scale(.4)'}],{duration:800+Math.random()*500,easing:'ease-out'});
    setTimeout(()=>s.remove(),1400);
  }
}

function spawnConfetti(count=60){
  const colors = ['#FF6B6B','#FFD166','#7AD3FF','#B8FFB0','#FFB6C1','#9B8CFF'];
  for(let i=0;i<count;i++){
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.background = colors[Math.floor(Math.random()*colors.length)];
    c.style.left = (btn.offsetLeft + btn.offsetWidth/2 + (Math.random()*300-150)) + 'px';
    c.style.top = (btn.offsetTop + btn.offsetHeight/2 + (Math.random()*60-30)) + 'px';
    c.style.transform = 'rotate(' + (Math.random()*360) + 'deg)';
    effects.appendChild(c);
    const fall = c.animate([
      {transform: c.style.transform + ' translateY(0) rotate(0deg)', opacity:1},
      {transform: c.style.transform + ' translateY(' + (300 + Math.random()*300) + 'px) rotate(' + (360+Math.random()*360) + 'deg)', opacity:0}
    ],{duration:1200+Math.random()*1200,easing:'cubic-bezier(.2,.7,.2,1)'});
    setTimeout(()=>c.remove(),2200);
  }
}

function typeMessage(text,klass=''){
  msg.className = 'message typewriter '+klass;
  msg.textContent = '';
  let i=0;
  const t = setInterval(()=>{
    msg.textContent += text[i++] || '';
    if(i>text.length){ clearInterval(t);} },18);
}

btn.addEventListener('click', ()=>{
  clearEffects();
  const entry = phrases[idx % phrases.length];
  if(entry.e === 'hearts') spawnHearts(10);
  if(entry.e === 'spark') spawnSparks(10);
  if(entry.e === 'shake') btn.classList.add('shake');
  if(entry.e === 'final'){
    btn.classList.add('final');
    spawnConfetti(90);
    // center the button and make it celebratory
    btn.style.left = 'calc(50% - ' + (btn.offsetWidth/2) + 'px)';
    btn.style.top = '50%';
    btn.textContent = 'Celebrate!';
  }
  typeMessage(entry.t, entry.e === 'final' ? 'final' : '');

  setTimeout(()=>{
    btn.classList.remove('shake');
  },600);

  // move button unless final
  if(entry.e !== 'final') moveButton();

  // progress index
  idx = (idx + 1) % phrases.length;
});

// initial placement, responsive reposition on resize
window.addEventListener('load', ()=>{
  // place button center-ish
  btn.style.left = 'calc(50% - 60px)';
  btn.style.top = '50%';
});
window.addEventListener('resize', ()=>{
  moveButton();
});
