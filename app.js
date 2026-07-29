
(() => {
  const Q = window.QUESTION_BANK || [];
  const LETTERS = ['A','B','C','D'];
  const STORAGE_KEY = 'flutterRecall_v1';
  const todayKey = () => new Date().toISOString().slice(0,10);
  const defaultState = {xp:0, streak:0, lastStudy:'', sound:true, correct:0, attempts:0, daily:{date:todayKey(),count:0}, cards:{}};
  let state = loadState();
  let flashSession=[], flashIndex=0, currentFlash=null;
  let quizSession=[], quizIndex=0, quizCorrect=0, quizXP=0, combo=0, answered=false, timer=null, timeLeft=20;

  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const cardState = id => state.cards[id] || {level:0, due:0, seen:0, correct:0, wrong:0};
  const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  function loadState(){
    try { return {...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}; }
    catch { return structuredClone(defaultState); }
  }
  function normalizeDaily(){ if(state.daily?.date!==todayKey()) state.daily={date:todayKey(),count:0}; }
  normalizeDaily(); updateStreak(false); save();

  // Navigation
  function showView(name){
    clearInterval(timer);
    $$('.view').forEach(v=>v.classList.remove('active'));
    const view=$(`#${name}View`); if(view) view.classList.add('active');
    $$('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===name));
    window.scrollTo({top:0,behavior:'smooth'});
    if(name==='dashboard') renderDashboard();
    if(name==='mistakes') renderMistakes();
    if(name==='bank') renderBank();
  }
  $$('[data-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));

  // Sound synthesizer: no external audio files required.
  let audioCtx;
  function sound(type){
    if(!state.sound) return;
    audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();
    const t=audioCtx.currentTime, o=audioCtx.createOscillator(), g=audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    const map={flip:[330,'sine',.055],correct:[660,'sine',.12],wrong:[180,'sawtooth',.13],click:[440,'triangle',.04],complete:[880,'sine',.25]};
    const [f,w,d]=map[type]||map.click; o.type=w; o.frequency.setValueAtTime(f,t);
    if(type==='correct'||type==='complete') o.frequency.exponentialRampToValueAtTime(f*1.45,t+d);
    if(type==='wrong') o.frequency.exponentialRampToValueAtTime(90,t+d);
    g.gain.setValueAtTime(.08,t); g.gain.exponentialRampToValueAtTime(.001,t+d); o.start(t); o.stop(t+d);
  }
  $('#soundToggle').addEventListener('click',()=>{state.sound=!state.sound; $('#soundToggle').textContent=state.sound?'🔊':'🔇'; save(); sound('click'); toast(state.sound?'Đã bật âm thanh':'Đã tắt âm thanh')});
  $('#soundToggle').textContent=state.sound?'🔊':'🔇';

  function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
  function updateStreak(studied=true){
    if(!studied) return;
    const today=todayKey(); if(state.lastStudy===today) return;
    const y=new Date(); y.setDate(y.getDate()-1); const yesterday=y.toISOString().slice(0,10);
    state.streak=state.lastStudy===yesterday?state.streak+1:1; state.lastStudy=today;
  }
  function addProgress(id, correct){
    const cs=cardState(id); cs.seen++; if(correct) cs.correct++; else cs.wrong++;
    state.cards[id]=cs; state.attempts++; if(correct) state.correct++;
    normalizeDaily(); state.daily.count++; updateStreak(true); save();
  }
  function dueCards(){
    const now=Date.now(); const due=Q.filter(q=>!cardState(q.id).due||cardState(q.id).due<=now);
    return shuffle(due.length?due:Q).slice(0,20);
  }

  // Dashboard
  function renderDashboard(){
    normalizeDaily();
    const mastered=Q.filter(q=>cardState(q.id).level>=4).length;
    $('#masteredStat').textContent=mastered; $('#xpStat').textContent=state.xp.toLocaleString('en-US');
    $('#streakStat').textContent=state.streak; $('#accuracyStat').textContent=state.attempts?Math.round(state.correct/state.attempts*100)+'%':'—';
    $('#levelText').textContent=Math.floor(state.xp/250)+1; $('#dailyCount').textContent=Math.min(state.daily.count,10);
    $('#questRing').style.background=`conic-gradient(var(--cyan) ${Math.min(state.daily.count/10,1)*360}deg,rgba(255,255,255,.07) 0deg)`;
    const cats=[...new Set(Q.map(q=>q.category))];
    const icons=['⌘','◈','▦','↻','⚿','⇄','✓','✦','F'];
    $('#categoryProgress').innerHTML=cats.map((c,i)=>{
      const all=Q.filter(q=>q.category===c), done=all.filter(q=>cardState(q.id).level>=4).length, p=Math.round(done/all.length*100);
      return `<div class="category-row"><div class="category-icon">${icons[i%icons.length]}</div><div><div class="category-info"><span>${c}</span><span>${done}/${all.length}</span></div><div class="bar"><i style="width:${p}%"></i></div></div><div class="category-percent">${p}%</div></div>`
    }).join('');
  }

  // Flashcards
  function startFlash(cards=dueCards(),title='Ôn tập thông minh'){
    if(!cards.length){toast('Chưa có câu nào để ôn');return}
    flashSession=shuffle(cards); flashIndex=0; $('#flashTitle').textContent=title; showView('flashcards'); renderFlash();
  }
  function renderFlash(){
    currentFlash=flashSession[flashIndex]; if(!currentFlash){completeSession('flash');return}
    $('#flashcard').classList.remove('flipped');
    $('#flashCategory').textContent=currentFlash.category; $('#flashNumber').textContent='#'+String(currentFlash.id).padStart(2,'0');
    $('#flashQuestion').textContent=currentFlash.question;
    $('#flashOptions').innerHTML=currentFlash.options.map((o,i)=>`<div class="mini-option"><b>${LETTERS[i]}.</b> ${o}</div>`).join('');
    $('#flashAnswerLetter').textContent=LETTERS[currentFlash.answer]; $('#flashAnswerText').textContent=currentFlash.options[currentFlash.answer]; $('#flashExplanation').textContent=currentFlash.explanation;
    $('#flashProgressText').textContent=`${flashIndex+1} / ${flashSession.length}`; $('#flashProgressBar').style.width=`${flashIndex/flashSession.length*100}%`;
  }
  $('#flashcard').addEventListener('click',()=>{$('#flashcard').classList.toggle('flipped');sound('flip')});
  $$('.rating').forEach(b=>b.addEventListener('click',()=>rateFlash(b.dataset.rating)));
  function rateFlash(rating){
    const cs=cardState(currentFlash.id); const now=Date.now();
    const configs={again:[0,60_000,4,false],hard:[Math.max(1,cs.level),21_600_000,8,false],good:[Math.min(5,cs.level+1),86_400_000*Math.max(1,cs.level+1),14,true],easy:[Math.min(5,cs.level+2),259_200_000*Math.max(1,cs.level+1),20,true]};
    const [lv,gap,xp,ok]=configs[rating]; cs.level=lv; cs.due=now+gap; state.cards[currentFlash.id]=cs; state.xp+=xp; addProgress(currentFlash.id,ok);
    sound(ok?'correct':'click'); if(rating==='easy') burst(innerWidth/2,innerHeight*.72,18);
    flashIndex++; renderFlash();
  }

  // Quiz
  function startQuiz(cards=shuffle(Q).slice(0,10)){
    quizSession=shuffle(cards).slice(0,Math.min(10,cards.length)); quizIndex=0; quizCorrect=0; quizXP=0; combo=0; showView('quiz'); renderQuiz();
  }
  function renderQuiz(){
    clearInterval(timer); answered=false; const q=quizSession[quizIndex];
    if(!q){completeSession('quiz');return}
    $('#quizCategory').textContent=q.category; $('#quizQuestion').textContent=q.question; $('#quizScore').textContent=quizXP+' XP';
    $('#quizProgressText').textContent=`${quizIndex+1} / ${quizSession.length}`; $('#quizProgressBar').style.width=`${quizIndex/quizSession.length*100}%`; $('#comboText').textContent='×'+combo;
    $('#quizFeedback').hidden=true; $('#quizFeedback').classList.remove('show');
    $('#quizOptions').innerHTML=q.options.map((o,i)=>`<button class="quiz-option" data-index="${i}"><span class="option-letter">${LETTERS[i]}</span><span>${o}</span></button>`).join('');
    $$('.quiz-option').forEach(b=>b.addEventListener('click',()=>answerQuiz(+b.dataset.index)));
    startTimer();
  }
  function startTimer(){
    timeLeft=20; updateTimer(); timer=setInterval(()=>{timeLeft--;updateTimer();if(timeLeft<=0){clearInterval(timer);answerQuiz(-1)}},1000)
  }
  function updateTimer(){
    $('#timerText').textContent=timeLeft; $('#timerCircle').style.strokeDashoffset=270*(1-timeLeft/20); $('#timerCircle').style.stroke=timeLeft<=5?'var(--red)':'var(--cyan)';
  }
  function answerQuiz(index){
    if(answered)return; answered=true; clearInterval(timer); const q=quizSession[quizIndex], correct=index===q.answer;
    $$('.quiz-option').forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add('correct');if(i===index&&!correct)b.classList.add('wrong')});
    if(correct){combo++;quizCorrect++;const gain=10+Math.min(combo,5)*2+Math.ceil(timeLeft/5);quizXP+=gain;state.xp+=gain;sound('correct');burst(innerWidth*.46,innerHeight*.45,22)}
    else{combo=0;sound('wrong')}
    const cs=cardState(q.id); if(correct){cs.level=Math.min(5,cs.level+1);cs.due=Date.now()+86_400_000*Math.max(1,cs.level)} else {cs.level=Math.max(0,cs.level-1);cs.due=Date.now()+60_000} state.cards[q.id]=cs; addProgress(q.id,correct);
    $('#feedbackIcon').textContent=correct?'✓':'×'; $('#feedbackTitle').textContent=correct?'Chính xác!':'Chưa đúng'; $('#feedbackExplanation').textContent=q.explanation; $('#quizScore').textContent=quizXP+' XP'; $('#comboText').textContent='×'+combo;
    $('#quizFeedback').hidden=false; $('#quizFeedback').classList.add('show'); save();
  }
  $('#nextQuizBtn').addEventListener('click',()=>{quizIndex++;renderQuiz()});

  // Lists
  function statusOf(q){const s=cardState(q.id);return s.level>=4?'mastered':s.seen?'learning':'new'}
  function statusLabel(s){return s==='mastered'?'Đã thuộc':s==='learning'?'Đang học':'Chưa học'}
  function itemHTML(q){const s=statusOf(q);return `<article class="question-item"><div class="question-index">${String(q.id).padStart(2,'0')}</div><div class="question-copy"><h3>${escapeHTML(q.question)}</h3><p>${escapeHTML(q.category)} • Đáp án ${LETTERS[q.answer]}: ${escapeHTML(q.options[q.answer])}</p></div><span class="status-pill ${s}">${statusLabel(s)}</span></article>`}
  function renderMistakes(){
    const wrong=Q.filter(q=>cardState(q.id).wrong>0).sort((a,b)=>cardState(b.id).wrong-cardState(a.id).wrong);
    $('#mistakesList').innerHTML=wrong.length?wrong.map(itemHTML).join(''):'<div class="empty-state">🎉 Bạn chưa có câu sai nào. Hãy làm một bài quiz trước nhé!</div>';
    $('#reviewMistakesBtn').disabled=!wrong.length;
  }
  function renderBank(){
    const query=$('#searchInput').value.trim().toLowerCase(), cat=$('#categoryFilter').value, status=$('#statusFilter').value;
    const list=Q.filter(q=>(!query||(q.question+' '+q.explanation+' '+q.options.join(' ')).toLowerCase().includes(query))&&(cat==='all'||q.category===cat)&&(status==='all'||statusOf(q)===status));
    $('#bankList').innerHTML=list.length?list.map(itemHTML).join(''):'<div class="empty-state">Không tìm thấy câu hỏi phù hợp.</div>';
  }
  const categories=[...new Set(Q.map(q=>q.category))]; $('#categoryFilter').innerHTML+=[...categories].sort().map(c=>`<option>${c}</option>`).join('');
  ['searchInput','categoryFilter','statusFilter'].forEach(id=>$('#'+id).addEventListener(id==='searchInput'?'input':'change',renderBank));
  $('#reviewMistakesBtn').addEventListener('click',()=>startFlash(Q.filter(q=>cardState(q.id).wrong>0).sort((a,b)=>cardState(b.id).wrong-cardState(a.id).wrong),'Ôn lại câu sai'));

  // Completion
  function completeSession(type){
    sound('complete'); burst(innerWidth/2,innerHeight*.35,80); showView('complete');
    const total=type==='quiz'?quizSession.length:flashSession.length, correct=type==='quiz'?quizCorrect:total, xp=type==='quiz'?quizXP:0;
    $('#completeSummary').textContent=type==='quiz'?`Bạn đã trả lời đúng ${correct}/${total} câu. Những câu sai đã được đưa vào lịch ôn.`:`Bạn đã đánh giá xong ${total} flashcard. Lịch ôn tiếp theo đã được cập nhật.`;
    $('#completeCorrect').textContent=correct; $('#completeXP').textContent=xp; $('#completeAccuracy').textContent=Math.round(correct/Math.max(total,1)*100)+'%'; renderDashboard();
  }

  // Buttons and keyboard
  $('#startDueBtn').addEventListener('click',()=>startFlash()); $('#continueBtn').addEventListener('click',()=>startFlash()); $('#startQuizBtn').addEventListener('click',()=>startQuiz());
  $('#studyAgainBtn').addEventListener('click',()=>startFlash());
  document.addEventListener('keydown',e=>{
    const flashActive=$('#flashcardsView').classList.contains('active'); const quizActive=$('#quizView').classList.contains('active');
    if(flashActive&&e.code==='Space'){e.preventDefault();$('#flashcard').click()}
    if(flashActive&&['1','2','3','4'].includes(e.key)) $$('.rating')[+e.key-1].click();
    if(quizActive&&!answered&&['1','2','3','4'].includes(e.key)) $$('.quiz-option')[+e.key-1]?.click();
    if(quizActive&&answered&&e.key==='Enter') $('#nextQuizBtn').click();
  });

  // UI helpers
  function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
  function escapeHTML(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
  $$('.magnetic').forEach(b=>b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.06}px,${(e.clientY-r.top-r.height/2)*.08}px)`}));
  $$('.magnetic').forEach(b=>b.addEventListener('mouseleave',()=>b.style.transform=''));

  // Ambient particles
  const pc=$('#particles'), px=pc.getContext('2d'); let particles=[];
  function resizeParticles(){pc.width=innerWidth*devicePixelRatio;pc.height=innerHeight*devicePixelRatio;pc.style.width=innerWidth+'px';pc.style.height=innerHeight+'px';px.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);particles=Array.from({length:Math.min(70,innerWidth/18)},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.5+.3,v:Math.random()*.22+.05,a:Math.random()*.35+.08}))}
  function drawParticles(){px.clearRect(0,0,innerWidth,innerHeight);for(const p of particles){p.y-=p.v;if(p.y<0){p.y=innerHeight;p.x=Math.random()*innerWidth}px.beginPath();px.fillStyle=`rgba(121,187,255,${p.a})`;px.arc(p.x,p.y,p.r,0,Math.PI*2);px.fill()}requestAnimationFrame(drawParticles)}
  addEventListener('resize',resizeParticles);resizeParticles();drawParticles();

  // Confetti
  const cc=$('#confetti'), cx=cc.getContext('2d'); let bits=[];
  function burst(x,y,n=35){cc.width=innerWidth*devicePixelRatio;cc.height=innerHeight*devicePixelRatio;cc.style.width=innerWidth+'px';cc.style.height=innerHeight+'px';cx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);for(let i=0;i<n;i++)bits.push({x,y,vx:(Math.random()-.5)*10,vy:-Math.random()*8-2,g:.18+Math.random()*.12,r:Math.random()*5+2,a:1,h:Math.random()*260+160});if(bits.length===n)animateConfetti()}
  function animateConfetti(){cx.clearRect(0,0,innerWidth,innerHeight);bits=bits.filter(b=>b.a>.02&&b.y<innerHeight+30);for(const b of bits){b.vy+=b.g;b.x+=b.vx;b.y+=b.vy;b.a-=.012;cx.save();cx.globalAlpha=b.a;cx.fillStyle=`hsl(${b.h} 90% 65%)`;cx.translate(b.x,b.y);cx.rotate(b.y*.03);cx.fillRect(-b.r,-b.r/2,b.r*2,b.r);cx.restore()}if(bits.length)requestAnimationFrame(animateConfetti)}

  renderDashboard(); renderBank();
})();
