(()=>{
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const P={search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',close:'<path d="M5 5l14 14M19 5 5 19"/>',bell:'<path d="M6 17v-6a6 6 0 0 1 12 0v6l1.500 2h-15z"/><path d="M10 21h4"/>',grid:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" stroke-width="2.600"/>',plus:'<path d="M12 5v14M5 12h14"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.500 9.500a2.500 2.500 0 1 1 3.500 2.300c-.7.400-1 .900-1 1.700M12 17v.1"/>',gear:'<path d="M19.08 10.23L21.48 10.50L21.48 13.50L19.08 13.77L18.26 15.76L19.77 17.64L17.64 19.77L15.76 18.26L13.77 19.08L13.50 21.48L10.50 21.48L10.23 19.08L8.24 18.26L6.36 19.77L4.23 17.64L5.74 15.76L4.92 13.77L2.52 13.50L2.52 10.50L4.92 10.23L5.74 8.24L4.23 6.36L6.36 4.23L8.24 5.74L10.23 4.92L10.50 2.52L13.50 2.52L13.77 4.92L15.76 5.74L17.64 4.23L19.77 6.36L18.26 8.24Z"/><circle cx="12" cy="12" r="3.2"/>',pen:'<path d="M16.500 3.500l4 4L8 20H4v-4z"/><path d="m14 6 4 4"/>',draft:'<path d="M3.500 7h8M3.500 11h5.500M3.500 15h3.500"/><path d="M18.500 3.500l2.500 2.500-9.500 9.500-3.500 1 1-3.500z"/><path d="M5 20h6"/>',mail:'<rect x="2.500" y="5.500" width="19" height="13" rx="2.500"/><path class="k" d="m3.500 7.500 8.500 6 8.500-6" stroke-width="1.500"/>',mailopen:'<path d="M3 10v9h18v-9L12 3z"/><path d="m3 10 9 6 9-6"/>',cal:'<rect x="4" y="5" width="16" height="16" rx="2.500"/><path d="M8 3v4M16 3v4"/><path class="k" d="M9.500 11h5l-3 6.500"/>',apps:'<rect x="3.500" y="3.500" width="17" height="17" rx="3.500"/><rect class="k" x="7" y="7" width="3.500" height="3.500" rx=".8"/><rect class="k" x="13.500" y="7" width="3.500" height="3.500" rx=".8"/><rect class="k" x="7" y="13.500" width="3.500" height="3.500" rx=".8"/><rect class="k" x="13.500" y="13.500" width="3.500" height="3.500" rx=".8"/>',file:'<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5"/>',people:'<circle cx="9" cy="8" r="3.500"/><path d="M2 20c0-4 3-6 7-6s7 2 7 6"/><path d="M16 5a3.500 3.500 0 0 1 0 7M18 14c2.500.6 4 2.500 4 6"/>',plusbox:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 7v10M7 12h10" stroke-width="2.200"/>',inbox:'<rect x="3" y="3" width="18" height="18" rx="3"/><path class="w" d="M6 12h3.600c.5 0 .8.5 1 1.200h2.800c.2-.7.5-1.200 1-1.200H18v3.500a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/>',archive:'<rect x="4" y="3.500" width="16" height="4.500" rx="1"/><path d="M5.500 8v10.500A1.500 1.500 0 0 0 7 20h10a1.500 1.500 0 0 0 1.500-1.500V8M10 12h4"/>',send:'<path d="M3 4.500l18 7.500-18 7.500 2.500-7.500z"/><path d="M5.500 12H13"/>',trash:'<path d="M4 6.500h16M9 6.500V4.200h6v2.300M6 6.500l1 12.500a1.500 1.500 0 0 0 1.500 1.500h7a1.500 1.500 0 0 0 1.500-1.500l1-12.500M10 10.500v6.500M14 10.500v6.500"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9.500h18"/>',foldblock:'<path d="M3 18V7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v3M3 18a2 2 0 0 0 2 2h6"/><circle cx="17" cy="17" r="4"/><path d="m14.200 19.800 5.600-5.600"/>',back:'<path d="M20 12H4M10 6l-6 6 6 6"/>',reply:'<path d="M10 7 4 12l6 5M4 12h10c4 0 6 2 6 6"/>',replyall:'<path d="M8 7 2 12l6 5M12 7 6 12l6 5M6 12h8c4 0 6 2 6 6"/>',fwd:'<path d="m14 7 6 5-6 5M20 12H10c-4 0-6 2-6 6"/>',more:'<circle cx="5" cy="12" r="1.300"/><circle cx="12" cy="12" r="1.300"/><circle cx="19" cy="12" r="1.300"/>',clip:'<path d="m20 11-8 8a5 5 0 0 1-7-7l9-9a3.500 3.500 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8"/>',save:'<path d="M5 3h12l3 3v15H5z"/><path d="M8 3v5h8M8 21v-7h8v7"/>',check:'<path d="m5 12 5 5 9-10" stroke-width="2.200"/>',compose:'<path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/><path d="M10 15l1-4 8-8 3 3-8 8z"/>',calplus:'<path d="M19 12V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h6M4 10h15M8 3v4M15 3v4"/><circle cx="18" cy="18" r="4.500" fill="#fff"/><path d="M18 15.500v5M15.500 18h5"/>',star:'<path d="m12 3 2.800 5.800 6.200.9-4.500 4.400 1 6.200L12 17.300 6.500 20.300l1-6.200L3 9.700l6.200-.9z"/>',brush:'<rect x="9" y="3" width="6" height="8" rx="1"/><path d="M8 11h8v3H8zM12 14v7"/>',sign:'<path d="M4 20c4-1 2-8 6-8s0 8 4 5 3-3 6-3"/><path d="m14 4 3 3-6 6-3 1 1-3z"/>',auto:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="m3 8 9 6 9-6"/><circle cx="5" cy="6" r="3" fill="#fff"/>',acct:'<circle cx="9" cy="8" r="3.500"/><path d="M3 20c0-4 3-6 6-6"/><rect x="14" y="15" width="7" height="6" rx="1"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.500" cy="11" r="2"/><path d="M13 10h5M13 14h5M5.500 16c1-2 5-2 6 0"/>',lang:'<path d="M3 6h8M7 4v2M4 10c2 4 4 5 6 6M10 6c-1 5-3 8-6 10M13 20l4-10 4 10M14 17h6"/>',access:'<circle cx="12" cy="5" r="2"/><path d="M4 9l8 1 8-1M12 10v5l-3 6M12 15l3 6"/>',shield:'<path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',share:'<circle cx="6" cy="12" r="2.500"/><circle cx="18" cy="6" r="2.500"/><circle cx="18" cy="18" r="2.500"/><path d="m8 11 8-4M8 13l8 4"/>',ms:'<rect x="3" y="3" width="8.500" height="8.500" fill="#F25022" stroke="none"/><rect x="12.500" y="3" width="8.500" height="8.500" fill="#7FBA00" stroke="none"/><rect x="3" y="12.500" width="8.500" height="8.500" fill="#00A4EF" stroke="none"/><rect x="12.500" y="12.500" width="8.500" height="8.500" fill="#FFB900" stroke="none"/>',imp:'<path d="M12 5v9M12 18v1"/>'};
const ic=(n,c='')=>`<svg class="${c}" viewBox="0 0 24 24">${P[n]||''}</svg>`;
const mk=(id,name,mail,sub,body,time,col,o={})=>({id,name,mail,sub,body,time,col,read:false,fav:false,imp:false,att:null,folder:'inbox',tab:'focused',...o});
const GS='Você compartilhou alguns dados da sua Conta do Google',GP='Tenha controle sobre os dados da sua Conta do Google e saiba como eles são usados.';
let E=[
mk(1,'Google','no-reply@accounts.google.com','Alerta de segurança','Você permitiu que o app Microsoft apps & services acesse sua Conta do Google. Se foi você, não é necessário fazer nada.','10:09','#F2C811'),
mk(2,'Samsung','news@samsungbr.com','É a última semana da App Week. Vem!','Confira os produtos com até R$ 5.000 OFF em celulares, TVs e eletrodomésticos.','10:00','#E8473B'),
mk(3,'Google','privacy@google.com',GS,GP,'09:52','#52BEC9'),
mk(4,'Canva','hello@canva.com','O Homem-Aranha invadiu o Canva!','E vai ficar por aqui. Descubra os novos modelos e elementos para os seus designs.','09:05','#3B97DF'),
mk(5,'YouVersion','news@youversion.com','Caso você tenha perdido...','Ainda dá tempo de participar. App da Bíblia Que Você Ama para um plano de leitura novo.','08:04','#F26DB1'),
mk(6,'Google','privacy@google.com',GS,GP,'08:01','#52BEC9'),
mk(7,'Google','privacy@google.com',GS,GP,'07:47','#52BEC9'),
mk(8,'Equipe de conta Microsoft','account-security@microsoft.com','Atividade de entrada incomum','Detectamos uma entrada recente na sua conta a partir de um novo dispositivo. Revise a atividade.','07:20','#7A5FC0'),
mk(9,'Mercado Livre','envios@mercadolivre.com','Seu pedido saiu para entrega','Seu pacote chega hoje. Acompanhe a entrega em tempo real pelo aplicativo.','06:58','#E6A800'),
mk(10,'Duolingo','hello@duolingo.com','Sua sequência está em risco','Faça uma lição hoje para manter sua sequência de dias e continuar aprendendo.','06:30','#58A700'),
mk(11,'LinkedIn','news@linkedin.com','5 vagas de desenvolvedor para você','Novas vagas que combinam com o seu perfil: Desenvolvedor Full-Stack, Engenheiro Java.','Ontem','#0A66C2',{read:true,tab:'other'}),
mk(12,'Nubank','avisos@nubank.com.br','Sua fatura está disponível','A fatura com vencimento em 10/10 já está disponível no aplicativo.','Ontem','#8A05BE',{read:true,tab:'other'}),
mk(13,'Marina Duarte','marina.duarte@contoso.com','Revisão do planejamento do Q4','Olá Davi,\n\nSegue o resumo da reunião de hoje. Precisamos fechar as metas até sexta-feira.\n\nAbraço,\nMarina','Ontem','#CA5010',{read:true,imp:true,att:'Planejamento_Q4.xlsx'}),
mk(14,'Rafael Nogueira','rafael.n@fabrikam.com','Re: Proposta comercial','Obrigado pelo envio da proposta. Gostaríamos de agendar uma call na quinta, às 15h.','Seg','#038387',{read:true,fav:true}),
mk(15,'Davi Souza','davi@outlook.com','Lembretes da semana','Rascunho: revisar PRs, enviar proposta.','24 set','#0F62B3',{folder:'drafts',read:true}),
mk(16,'Marina Duarte','marina.duarte@contoso.com','Re: Revisão do planejamento do Q4','Perfeito, Marina. Vou revisar e retorno ainda hoje.','Ontem','#CA5010',{folder:'sent',read:true}),
mk(17,'Suporte TI','ti@contoso.com','Redefinição de senha concluída','Sua senha foi redefinida com sucesso.','18 set','#498205',{folder:'archive',read:true}),
mk(18,'Promoções Online','ofertas@promo.com','Você ganhou um prêmio!!!','Clique aqui para resgatar.','20 set','#B146C2',{folder:'spam',read:true})];
let nid=100,selMode=false,lp;
const S={folder:'inbox',tab:'focused',q:'',filter:'all',sel:new Set(),view:'mail'};
const FOLD=[['inbox','Caixa de Entrada','inbox'],['archive','Arquivo Morto','archive'],['drafts','Rascunhos','draft'],['sent','Enviado','send'],['trash','Excluído','trash'],['hist','Histórico da Conversa','folder'],['spam','Lixo Eletrônico','foldblock']];
const NAME=Object.fromEntries(FOLD.map(f=>[f[0],f[1]]));
const MES=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
function icons(r=document){$$('[data-i]',r).forEach(e=>{e.innerHTML=ic(e.dataset.i)})}
function toast(m,undo){const t=$('#toast');t.innerHTML=`<span>${m}</span>`+(undo?'<button>Desfazer</button>':'');t.classList.add('on');if(undo)$('button',t).onclick=()=>{undo();t.classList.remove('on')};clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('on'),3500)}
function vis(){const q=S.q.trim().toLowerCase();return E.filter(e=>{if(q?(e.folder==='trash'||!(e.name+e.sub+e.body+e.mail).toLowerCase().includes(q)):(e.folder!==S.folder||(S.folder==='inbox'&&e.tab!==S.tab)))return false;return S.filter==='unread'?!e.read:S.filter==='att'?!!e.att:S.filter==='flag'?e.fav:true})}
function renderFolders(){const n=E.filter(e=>e.folder==='inbox'&&!e.read).length;
$('#folders').innerHTML=FOLD.map(([k,t,i])=>`<button class="row ${S.folder===k?'on':''}" data-f="${k}">${ic(i,i==='inbox'?'fi':'')}<span>${t}</span>${k==='inbox'&&n?`<span class="n">${n}</span>`:''}</button>`).join('')}
function renderList(){const r=vis(),q=S.q.trim();
$('#list').innerHTML=r.length?r.map(e=>{const s=S.sel.has(e.id);return`<li data-id="${e.id}" class="${e.read?'':'unread'} ${s?'sel':''}"><span class="av" style="background:${s?'#0F62B3':e.col}">${s?ic('check'):e.name[0].toUpperCase()}</span><div class="mb"><div class="l1"><span class="from">${e.name}</span>${e.fav?ic('star','ic star'):''}${e.att?ic('clip','ic'):''}<time>${e.time}</time></div><span class="sub">${e.sub}</span><span class="pv">${e.body.replace(/\s+/g,' ')}</span></div></li>`}).join(''):`<div class="empty"><p>${q?'Nenhum resultado':'Nada por aqui'}</p></div>`;
renderFolders();$('#selbar').hidden=!selMode;$('#top').hidden=selMode;$('#selCount').textContent=S.sel.size;
$('#sub').hidden=S.view!=='mail'||S.folder!=='inbox'||!!q||$('#top').classList.contains('srch');
if(S.view==='mail')$('#title').textContent=NAME[S.folder]}
function setView(v){S.view=v;$('#view-mail').hidden=v!=='mail';$('#view-cal').hidden=v!=='cal';$('#wk').hidden=v!=='cal';
$('#bell').hidden=v!=='mail';$('#todayBtn').hidden=v!=='cal';$('#fab').innerHTML=ic(v==='cal'?'calplus':'compose');
$$('#bottom button').forEach(b=>b.classList.toggle('on',b.dataset.nav===v));
if(v==='cal'){calTitle();$('#sub').hidden=true}else renderList()}
/* Calendário */
function buildCal(){const n=new Date(),f=new Date(n.getFullYear(),n.getMonth(),1),st=new Date(f);st.setDate(1-f.getDay());let h='';
for(let w=0;w<20;w++){h+='<div class="wr">';for(let d=0;d<7;d++){const x=new Date(st);x.setDate(st.getDate()+w*7+d);const one=x.getDate()===1,td=x.toDateString()===n.toDateString(),ev=(d===4||d===5)&&x>=f&&x<new Date(f.getTime()+37*864e5);
h+=`<div class="dc ${one?'fm':''} ${td?'td':''}"><span>${one?MES[x.getMonth()].slice(0,3)+'. 1':x.getDate()}</span></div>`}h+='</div>'}
$('#grid').innerHTML=h;$('#grid').dataset.st=st.getTime()}
function calTitle(){const r=Math.floor($('#view-cal').scrollTop/100),x=new Date(+$('#grid').dataset.st);x.setDate(x.getDate()+r*7+6);$('#title').textContent=MES[x.getMonth()]}
$('#view-cal').onscroll=calTitle;
$('#todayBtn').onclick=()=>{const t=$('.td'),v=$('#view-cal');if(t)v.scrollTo({top:Math.max(0,t.parentElement.offsetTop-0),behavior:'smooth'})};
/* Navegação */
const dr=o=>{$('#drawer').classList.toggle('open',o);$('#scrim').classList.toggle('on',o)};
$('#menuBtn').onclick=()=>dr(true);$('#scrim').onclick=()=>dr(false);
$('#folders').onclick=e=>{const b=e.target.closest('.row');if(!b)return;S.folder=b.dataset.f;S.q='';$('#q').value='';S.sel.clear();selMode=false;setView('mail');dr(false);$('#view-mail').scrollTop=0};
$('#editF').onclick=()=>toast('Editar pastas (simulado)');$('#addAcc').onclick=()=>toast('Adicionar conta (simulado)');$('#helpBtn').onclick=()=>toast('Ajuda (simulado)');
const apps=o=>{$('#appsheet').classList.toggle('on',o);$('#appscrim').classList.toggle('on',o);$$('#bottom button').forEach(b=>b.classList.toggle('on',o?b.dataset.nav==='apps':b.dataset.nav===S.view))};
$('#bottom').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.nav==='apps'){apps(!$('#appsheet').classList.contains('on'))}else{apps(false);setView(b.dataset.nav)}};
$('#appscrim').onclick=()=>apps(false);
$('#appsheet').onclick=e=>{const b=e.target.closest('[data-app]');if(b){toast(b.dataset.app+' (simulado)');apps(false)}else if(e.target.id==='reord')toast('Reordenar (simulado)')};
$('#tabs,.seg').onclick=e=>{const b=e.target.closest('button');if(!b)return;S.tab=b.dataset.tab;$$('.seg button').forEach(x=>x.classList.toggle('on',x===b));renderList()};
$('#fab').onclick=()=>S.view==='cal'?toast('Novo evento (simulado)'):compose();
/* Pesquisa */
const q=$('#q'),top=$('#top');
$('#sBtn').onclick=()=>{if(S.view==='cal'){toast('Pesquisa de eventos (simulado)');return}top.classList.add('srch');$('#sBtn').hidden=true;$('#sClose').hidden=false;renderList();q.focus()};
$('#sClose').onclick=()=>{q.value='';S.q='';top.classList.remove('srch');$('#sBtn').hidden=false;$('#sClose').hidden=true;renderList()};
q.oninput=()=>{S.q=q.value;renderList()};
/* Filtro */
$('#filterBtn').onclick=()=>{const o=[['all','Todas'],['unread','Não lidas'],['att','Com anexos'],['flag','Sinalizadas']];sheet('<h2>Filtrar</h2>'+o.map(([k,t])=>`<button class="row ${S.filter===k?'on':''}" data-flt="${k}">${t}</button>`).join(''),e=>{const b=e.target.closest('[data-flt]');if(b){S.filter=b.dataset.flt;$('#filterBtn').textContent=b.dataset.flt==='all'?'Filtrar':b.textContent;$('#sheet').hidden=true;renderList()}})};
/* Lista */
const ul=$('#list');
function toggleSel(id){S.sel.has(id)?S.sel.delete(id):S.sel.add(id);if(!S.sel.size)selMode=false;renderList()}
ul.onclick=e=>{const li=e.target.closest('li');if(!li)return;if(li.dataset.lp){delete li.dataset.lp;return}const id=+li.dataset.id;selMode?toggleSel(id):openMail(id)};
ul.addEventListener('touchstart',e=>{const li=e.target.closest('li');if(!li)return;lp=setTimeout(()=>{selMode=true;toggleSel(+li.dataset.id);const n=$(`[data-id="${li.dataset.id}"]`);if(n)n.dataset.lp=1},550)},{passive:true});
['touchend','touchmove','touchcancel'].forEach(t=>ul.addEventListener(t,()=>clearTimeout(lp),{passive:true}));
ul.addEventListener('contextmenu',e=>{const li=e.target.closest('li');if(li){e.preventDefault();selMode=true;toggleSel(+li.dataset.id)}});
$('#selCancel').onclick=()=>{selMode=false;S.sel.clear();renderList()};
function act(ids,a){const prev=ids.map(i=>({...E.find(e=>e.id===i)}));
ids.forEach(i=>{const m=E.find(e=>e.id===i);if(a==='delete')m.folder='trash';if(a==='archive')m.folder='archive';if(a==='read')m.read=true;if(a==='unread')m.read=false;if(a==='spam')m.folder='spam'});
const msg={delete:'Mensagem excluída',archive:'Mensagem arquivada',read:'Marcada como lida',unread:'Marcada como não lida',spam:'Movida para Lixo Eletrônico'}[a];
selMode=false;S.sel.clear();renderList();toast(msg,()=>{prev.forEach(p=>Object.assign(E.find(e=>e.id===p.id),p));renderList()})}
$('#selbar').onclick=e=>{const b=e.target.closest('[data-bulk]');if(b&&S.sel.size)act([...S.sel],b.dataset.bulk)};
/* Leitura */
function openMail(id){const m=E.find(x=>x.id===id);if(m.folder==='drafts'){compose({to:m.mail,sub:m.sub,text:m.body});return}
m.read=true;renderList();const R=$('#reader');
R.innerHTML=`<div class="r-bar"><button class="ib" id="rBack" aria-label="Voltar">${ic('back')}</button><span class="grow"></span><button class="ib" data-a="archive" aria-label="Arquivar">${ic('archive')}</button><button class="ib" data-a="delete" aria-label="Excluir">${ic('trash')}</button><button class="ib" data-a="unread" aria-label="Não lida">${ic('mailopen')}</button><button class="ib" id="rMore" aria-label="Mais">${ic('more')}</button></div>
<div class="r-body"><h2 class="r-sub">${m.sub}</h2><div class="r-from"><span class="av" style="background:${m.col}">${m.name[0]}</span><div class="who"><b>${m.name}</b><small>${m.mail}</small></div><button class="star-b ${m.fav?'on':''}" id="rStar" aria-label="Sinalizar">${ic('star')}</button></div>
<div class="r-meta">Para: mim · ${m.time.includes(':')?'Hoje, '+m.time:m.time}</div><div class="r-text">${m.body.replace(/</g,'&lt;')}</div>${m.att?`<div class="att"><div class="chip">${ic('clip')}<div><div>${m.att}</div><small>248 KB</small></div></div></div>`:''}</div>
<div class="r-act"><button data-r="reply">${ic('reply')}Responder</button><button data-r="all">${ic('replyall')}Resp. a todos</button><button data-r="fwd">${ic('fwd')}Encaminhar</button></div>`;
R.classList.add('open');$('#rBack').onclick=()=>R.classList.remove('open');
$('#rStar').onclick=e=>{m.fav=!m.fav;e.currentTarget.classList.toggle('on',m.fav);renderList()};
$$('[data-a]',R).forEach(b=>b.onclick=()=>{act([id],b.dataset.a);R.classList.remove('open')});
$$('[data-r]',R).forEach(b=>b.onclick=()=>{const k=b.dataset.r;compose({to:k==='fwd'?'':m.mail,sub:(k==='fwd'?'Enc: ':'Re: ')+m.sub.replace(/^(Re|Enc): /,''),text:'\n\n———\nDe: '+m.name+'\n'+m.body})});
$('#rMore').onclick=e=>{e.stopPropagation();menu([['spam','Marcar como spam',()=>{act([id],'spam');R.classList.remove('open')}],['star','Sinalizar',()=>{m.fav=true;renderList();toast('Mensagem sinalizada')}]])}}
function menu(items){const m=$('#menu');m.innerHTML=items.map(([i,t],n)=>`<button class="mi" data-n="${n}">${ic(i)}${t}</button>`).join('');m.hidden=false;m.onclick=e=>{const b=e.target.closest('.mi');if(b){m.hidden=true;items[b.dataset.n][2]()}}}
document.addEventListener('click',e=>{if(!e.target.closest('#menu')&&!e.target.closest('#rMore'))$('#menu').hidden=true});
function sheet(h,fn){const s=$('#sheet');s.innerHTML=`<div class="sh"><div class="grip"></div>${h}</div>`;s.hidden=false;s.onclick=e=>{if(e.target===s)s.hidden=true;else fn&&fn(e)}}
/* Páginas: Configurações e Notificações */
const bar=t=>`<div class="ph-bar"><button class="hi" data-back aria-label="Voltar">${ic('back')}</button>${t}</div>`;
const SET=[['Configurações Rápidas'],['brush','Exibição & Aparência','Sistema / Azul / Amplo'],['sign','Assinaturas'],['auto','Respostas automáticas','DESATIVADO'],['bell','Notificações','','notif'],['Geral'],['acct','Contas'],['mail','Email'],['grid','Calendário'],['card','Contatos'],['lang','Idioma','Automático'],['access','Acessibilidade'],['shield','Configurações de Privacidade'],['lock','Bloqueio de aplicativo','','tg'],['Integrações e suplementos'],['globe','Abrir Links no'],['Mais'],['help','Ajuda e comentários'],['share','Conte a seus amigos sobre o Outlook'],['ms','Explorar os aplicativos da Microsoft']];
function renderSet(f=''){const x=f.toLowerCase();$('#sList').innerHTML=SET.map(([a,b,c,d])=>b===undefined?`<div class="sh2">${a}</div>`:(!x||b.toLowerCase().includes(x))?`<button class="si" data-k="${d||''}" data-t="${b}">${ic(a)}<div><b>${b}</b>${c?`<small>${c}</small>`:''}</div>${d==='tg'?'<span class="tg"></span>':''}</button>`:'').join('')}
$('#settings').innerHTML=bar('Configurações')+'<div class="pb"><label class="sbox">'+ic('search')+'<input id="sSearch" placeholder="Buscar"></label><div id="sList"></div></div>';
$('#notif').innerHTML=bar('Notificações')+`<div class="nz"><svg width="210" height="185" viewBox="0 0 210 185"><defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FD3EE"/><stop offset="1" stop-color="#8ADFF3"/></linearGradient></defs><g transform="rotate(-18 100 95) translate(0 8)"><ellipse cx="100" cy="132" rx="11" ry="9" fill="#17B8CE"/><circle cx="100" cy="24" r="8" fill="#6FD3EE"/><path d="M70 106C70 64 80 40 100 40s30 24 30 66l14 14H56z" fill="url(#bg)"/><path d="M58 106h84l2 14H56z" fill="#9BE4F6" opacity=".9"/></g><path d="M100 14h34l-34 44h36" fill="none" stroke="#FFB93C" stroke-width="14" stroke-linejoin="miter" opacity=".62"/><path d="M146 96h22l-22 28h24" fill="none" stroke="#FFB93C" stroke-width="10" stroke-linejoin="miter" opacity=".62"/><path d="M62 160l-4-10M82 166l-1-10M104 160l5-9" stroke="#FBCB72" stroke-width="3.500" stroke-linecap="round" fill="none"/></svg><b>Sem notificações</b><p>Verifique novamente mais tarde para ver se há novas notificações.</p></div>`;
$$('.page').forEach(p=>p.onclick=e=>{if(e.target.closest('[data-back]'))p.classList.remove('open')});
$('#sList').onclick=e=>{const b=e.target.closest('.si');if(!b)return;if(b.dataset.k==='notif')$('#notif').classList.add('open');else if(b.dataset.k==='tg')$('.tg',b).classList.toggle('on');else toast(b.dataset.t+' (simulado)')};
$('#sSearch').oninput=e=>renderSet(e.target.value);
$('#openSettings').onclick=()=>{dr(false);renderSet();$('#settings').classList.add('open')};
$('#bell').onclick=()=>$('#notif').classList.add('open');
/* Composição */
const C=$('#composer');let atts=[];
function compose(o={}){$('#cTo').value=o.to||'';$('#cCc').value=$('#cBcc').value='';$('#cSub').value=o.sub||'';$('#cText').value=o.text||'';atts=[];renderAtts();$$('.cc').forEach(x=>x.hidden=true);C.classList.add('open');setTimeout(()=>(o.to?$('#cText'):$('#cTo')).focus(),260)}
function renderAtts(){$('#cAtts').innerHTML=atts.map(a=>`<div class="chip">${ic('clip')}<span>${a}</span></div>`).join('')}
const dirty=()=>$('#cTo').value||$('#cSub').value||$('#cText').value.trim();
const closeC=()=>{C.classList.remove('open');document.activeElement.blur()};
function saveDraft(){E.unshift(mk(++nid,'Davi Souza',$('#cTo').value||'—',$('#cSub').value||'(sem assunto)',$('#cText').value,'Agora','#0F62B3',{folder:'drafts',read:true}));renderList()}
$('#ccToggle').onclick=()=>$$('.cc').forEach(x=>x.hidden=!x.hidden);
$('#cAttach').onclick=()=>{atts.push(['Documento.docx','Imagem.png','Relatório.pdf'][atts.length%3]);renderAtts()};
$('#cDraft').onclick=()=>{saveDraft();closeC();toast('Rascunho salvo')};
$('#cClose').onclick=()=>{if(dirty())sheet('<h2>Descartar mensagem?</h2><button class="row" data-x="s">Salvar rascunho</button><button class="row" data-x="d">Descartar</button>',e=>{const b=e.target.closest('[data-x]');if(!b)return;if(b.dataset.x==='s'){saveDraft();toast('Rascunho salvo')}closeC();$('#sheet').hidden=true});else closeC()};
$('#cSend').onclick=()=>{const to=$('#cTo').value.trim();if(!to){toast('Adicione pelo menos um destinatário');$('#cTo').focus();return}
E.unshift(mk(++nid,'Para: '+to,to,$('#cSub').value||'(sem assunto)',$('#cText').value,'Agora','#0F62B3',{folder:'sent',read:true,att:atts[0]||null}));closeC();renderList();toast('Mensagem enviada')};
/* Init */
icons();buildCal();setView('mail');
})();
