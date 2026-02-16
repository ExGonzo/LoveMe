const btn = document.getElementById('loveBtn');
const msg = document.getElementById('message');
const area = document.getElementById('gameArea');
const effects = document.getElementById('effects');

const phrases = [
  {t: "Hey princess — did you know every click makes me fall a little harder.",e:"hearts"},
  {t: "Mermaid mode: you just summoned a pocket of butterflies.",e:"hearts"},
  {t: "Babe, your 'game skills' are adorable — I still carry you in co-op.",e:"spark"},
  {t: "We argue about the silliest things and I love you anyway.",e:"shake"},
  {t: "You acting sexy in front of bears will be our next wildlife documentary.",e:"hearts"},
  {t: "You: 'Is pizza a breakfast?' Me: 'Yes, for my queen.'",e:"spark"},
  {t: "Your questions are cute and slightly dangerous — ask more.",e:"hearts"},
  {t: "If loving you were a sport I'd still let you play on my team.",e:"spark"},
  {t: "I forgive your lack of aim — your hugs always land though.",e:"hearts"},
  {t: "When we argue about socks, you still win my heart every time.",e:"shake"},
  {t: "You call me out and I call you mine. Truce?",e:"hearts"},
  {t: "You make stupid questions sound like secret invitations to giggle.",e:"spark"},
  {t: "Princess, come here — I have a crown made of bad jokes.",e:"hearts"},
  {t: "Mermaid warning: splashing may cause sudden kisses.",e:"hearts"},
  {t: "Sometimes you win arguments by being extra dramatic — works every time.",e:"shake"},
  {t: "I love how you try to look intimidating in front of bears — it's sexy.",e:"hearts"},
  {t: "Babe, your 'one more round' face is my favorite cliffhanger.",e:"spark"},
  // grand finale will be added as last entry below
  {t: "Finale: Sarah — I'm crazy about you. You are my favorite person, my best friend, my secret-keeper and my forever. Will you be mine today, tomorrow, and every silly argument after? ❤️❤️❤️",e:"final"}
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
    h.style.left = (50 + (Math.random()*200-100)) + 'px';
    h.style.top = (300 + Math.random()*80) + 'px';
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
  if(entry.e === 'final') btn.classList.add('final');
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
