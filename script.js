// ===== CAR 3D ASSETS =====

// model-viewer GLBs (used for non-Hyundai & as fallback)
const MODEL_DB = {
// Hyundai
creta:  'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/ToyCar/glTF-Binary/ToyCar.glb',
i20:    'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Buggy/glTF-Binary/Buggy.glb',
verna:  'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb',
venue:  'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoomBox/glTF-Binary/BoomBox.glb',
tucson: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb',
alcazar:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/FlightHelmet/glTF-Binary/FlightHelmet.glb',
kona:   'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF-Binary/Duck.glb',
elantra:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Lantern/glTF-Binary/Lantern.glb',
aura:   'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/2CylinderEngine/glTF-Binary/2CylinderEngine.glb',
santro: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/CesiumMan/glTF/CesiumMan.gltf',

// Maruti Suzuki
swift:  'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/VC/glTF-Binary/VC.glb',
baleno: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Cube/glTF-Binary/Cube.glb',
ciaz:   'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/WaterBottle/glTF-Binary/WaterBottle.glb',
brezza: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Corset/glTF-Binary/Corset.glb',

// Toyota
innova:   'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SciFiHelmet/glTF-Binary/SciFiHelmet.glb',
fortuner: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Suzanne/glTF-Binary/Suzanne.glb',

// Audi
audi_a4: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Chair/glTF-Binary/Chair.glb',
audi_q7: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/CesiumMilkTruck/glTF-Binary/CesiumMilkTruck.glb',

// Mercedes-Benz
merc_cclass: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AntiqueCamera/glTF-Binary/AntiqueCamera.glb',
merc_gla:    'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/MechArm/glTF-Binary/MechArm.glb',

// Tesla
tesla_model3: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Car/glTF-Binary/Car.glb',
tesla_modelx: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Stormtrooper/glTF-Binary/Stormtrooper.glb'
};

// Sketchfab UIDs per Hyundai model (IDs kept separate)
const SKETCHFAB_UIDS = {
creta:  'fa88bbdbe0df406b8eab167b9591d2f2',
i20:    '7f1995ef586a4621b65afccbc450f949',
verna:  '132840063af24357900df22baeefe5fb',
venue:  'c45a9aa25934477c83e4cf68aa9c1154',
tucson: '07a0a7d1a23f4225bb39d4e1f8319580',
alcazar:'b59e0a6a958841088950cad4ff39e338',
kona:   '26c27a6e061d4776b750e483b933df79',
elantra:'4ba1b1b0eb844e318cc708ada1f2f51f',
aura:   '064ab4fa32104628890b4b130c4db143',
santro: 'd43347a799a84674a7d1543e60732298'
};

// ===== ENGINE 3D ASSETS (IDs kept separate for each engine size) =====
// For now, all use the same UID; you can change each value later.pending...
const ENGINE_3D_UIDS = {
'1.0L': 'd440e8b6ec914b17b144a241ddbfa136',
'1.2L': 'df15e62a4ab948b6bc60877e71293040',
'1.5L': '39da7ae55dc141bca739239c4b59f1cf',
'2.0L': 'ce3ec4ee591245b986cee99edf927663',
'2.5L': 'bc71e9c4a44844b3b588cc35e59388fc',
'3.0L': 'b0084dc234584300a9b5b1a335161415'
};

// ===== TESLA BATTERY 3D ASSETS (IDs kept separate per range) =====
const BATTERY_3D_UIDS = {
'Standard Range (Approx. 430 km)': 'c34dda390fb84241beb79cf9bcee9f0c',
'Long Range (Approx. 580 km)':     '455c1b96e8214b45ac06bb2742d8b50d',
'Performance (Approx. 560 km)':    'b946c3d41f2d4493a59a41f3d8154ed2'
};

// ===== INTERIOR / SUSPENSION / BRAKES 3D ASSETS (same UID for now) =====
const INTERIOR_3D_UIDS = {
'Standard': 'c5f830a811af4917972de8fa47949de9',
'Luxury':   'af983437db7e4b33bde2c76b8895c3a4',
'Sport':    'b4627fc6d22f45c496ed548ba3c9be10'
};

// pending suspension...
const SUSPENSION_3D_UIDS = {
'Standard': '108faf69976747c09a21968727a13255',
'Comfort':  '80882d5984be45e49f4179ae8ce86599',
'Sport':    '5cf0120b9bca4fd6a20c9357f7e5efaf'
};

// pending brakes...
const BRAKES_3D_UIDS = {
'Standard':    '7c6e4d4b226040869e6c312b8bafe95d',
'ABS':         '416dd1ebbcbe45f5a648b3e389eb7bb8',
'Performance': 'a486158ad159436fbc4aaa4ad40dd224'
};

const state = { model:'creta', wheel:'standard', variant:null, finish:'shiny', color:'White', components:{}, price:0 };

const carViewer = document.getElementById('carViewer');
const sketchfabWrap = document.getElementById('sketchfabWrap');
const skfbFrame = document.getElementById('skfb-frame');

let skfbClient = null;
let skfbApi = null;

const modelSelect = document.getElementById('modelSelect');
const wheelSelect = document.getElementById('wheelSelect');
const finishSelect = document.getElementById('finishSelect');
const colorSwatches = document.getElementById('colorSwatches');
const variantSelect = document.getElementById('variantSelect');
const priceValue = document.getElementById('priceValue');
const confirmBtn = document.getElementById('confirmBtn');
const thankYou = document.getElementById('thankYou');
const speakerSelect = document.getElementById('speakerSelect');
const gearboxSelect = document.getElementById('gearboxSelect');
const selectedColor = document.getElementById('selectedColor');
const selectedColorName = document.getElementById('selectedColorName');

// components (page 3)
const engineSelect   = document.getElementById('engineSelect');
const interiorSelect = document.getElementById('interiorSelect');
const suspensionSelect = document.getElementById('suspensionSelect');
const brakesSelect   = document.getElementById('brakesSelect');

const engine3dWrap   = document.getElementById('engine3dWrap');
const engine3dFrame  = document.getElementById('engine3dFrame');
const engineImg      = document.getElementById('engineImg');

const interior3dWrap  = document.getElementById('interior3dWrap');
const interior3dFrame = document.getElementById('interior3dFrame');
const interiorImg     = document.getElementById('interiorImg');

const suspension3dWrap  = document.getElementById('suspension3dWrap');
const suspension3dFrame = document.getElementById('suspension3dFrame');
const suspensionImg     = document.getElementById('suspensionImg');

const brakes3dWrap  = document.getElementById('brakes3dWrap');
const brakes3dFrame = document.getElementById('brakes3dFrame');
const brakesImg     = document.getElementById('brakesImg');

let userInteracting = false;

function useSketchfabForCurrentModel(){
// Only Hyundai models use Sketchfab car viewer for now
return [
    'creta','i20','verna','venue','tucson',
    'alcazar','kona','elantra','aura','santro'
].includes(state.model);
}

function isTeslaModel(){
return ['tesla_model3','tesla_modelx'].includes(state.model);
}

function initSketchfabForModel(modelKey){
const uid = SKETCHFAB_UIDS[modelKey];
if(!uid || !skfbFrame || typeof Sketchfab === 'undefined') return;

skfbApi = null;
skfbClient = new Sketchfab(skfbFrame);
skfbClient.init(uid, {
    autostart: 1,
    autospin: 0.2,
    success: function(api){
    skfbApi = api;
    api.start();
    api.addEventListener('viewerready', function(){
        console.log('Sketchfab viewer ready for', modelKey);
    });
    },
    error: function(){
    console.error('Sketchfab viewer error for', modelKey);
    }
});
}

// navigation
function goTo(n){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
const page = document.getElementById('page'+n);
page.classList.add('active');

if(n===3) { loadComponentOptions(); }
if(n===4) buildSummary();
if(n===5) buildCheckout();
if(n===2) updateViewer();
}
window.goTo = goTo;

// init
modelSelect.value = state.model;
updateViewer();
updatePrice();
loadComponentOptions();

function updateViewer(){
const m = modelSelect.value;
state.model = m;

const useSf = useSketchfabForCurrentModel();

if (useSf) {
    // show Sketchfab, hide model-viewer
    sketchfabWrap.style.display = 'block';
    carViewer.style.display = 'none';
    variantSelect.innerHTML = '<option value="">Default</option>';
    initSketchfabForModel(m);
} else {
    // show model-viewer, hide Sketchfab
    sketchfabWrap.style.display = 'none';
    carViewer.style.display = 'block';

    const path = MODEL_DB[m] || MODEL_DB['creta'];
    carViewer.src = path;

    carViewer.addEventListener('load', ()=>{
    const variants = (carViewer.availableVariants && carViewer.availableVariants.length)
        ? carViewer.availableVariants
        : [];
    variantSelect.innerHTML = '<option value="">Default</option>' +
        variants.map(v=>`<option value="${v}">${v}</option>`).join('');
    }, { once:true });
}

updatePrice();
}

// color swatches click
colorSwatches.addEventListener('click', (e)=>{
const sw = e.target.closest('.swatch');
if(!sw) return;
applyColor(sw.dataset.color, sw.style.background);
});

// keyboard accessibility for swatches
Array.from(document.querySelectorAll('.swatch')).forEach(s=>{
s.addEventListener('keydown', (ev)=>{
    if(ev.key==='Enter' || ev.key===' '){
    ev.preventDefault();
    s.click();
    }
});
});

function applyColor(name, css){
state.color = name;
try{
    if(!useSketchfabForCurrentModel() && name && carViewer.variantName!==undefined) {
    carViewer.variantName = name;
    }
}catch(e){}
selectedColor.style.background = css || (
    name==='White' ? '#fff' :
    name==='Black' ? '#0b0b0b' :
    name==='Red'   ? '#d32f2f' :
    name==='Blue'  ? '#1976d2' :
    '#bdbdbd'
);
selectedColorName.textContent = ' ' + name;
updatePrice();
}

// variant select (only meaningful for model-viewer)
variantSelect.addEventListener('change', ()=>{
const v = variantSelect.value || null;
if (!useSketchfabForCurrentModel()) {
    try{ carViewer.variantName = v; }catch(e){}
}
state.variant = v;
});

wheelSelect.addEventListener('change', ()=>{
state.wheel = wheelSelect.value;
updateViewer();
updatePrice();
});
finishSelect.addEventListener('change', ()=>{
state.finish = finishSelect.value;
updatePrice();
});
modelSelect.addEventListener('change', ()=>{
updateViewer();
loadComponentOptions();
updatePrice();
});
if(speakerSelect) speakerSelect.addEventListener('change', updatePrice);
if(gearboxSelect) gearboxSelect.addEventListener('change', updatePrice);

// screenshot handler for BOTH model-viewer and Sketchfab
document.getElementById('snap').addEventListener('click', async ()=>{
if (useSketchfabForCurrentModel()) {
    if(!skfbApi){
    alert('3D viewer is still loading. Please try again in a moment.');
    return;
    }
    skfbApi.getScreenShot(function(err, result){
    if(err || !result){
        alert('Screenshot failed.');
        return;
    }
    const w = window.open('');
    w.document.write(`<img src="${result}" style="max-width:100%">`);
    });
} else {
    try{
    if(typeof carViewer.toDataURL === 'function'){
        const dataUrl = await carViewer.toDataURL();
        const w = window.open('');
        w.document.write(`<img src="${dataUrl}" style="max-width:100%">`);
    }else{
        alert('Screenshot not supported for this browser.');
    }
    }catch(e){
    alert('Screenshot failed: '+e.message);
    }
}
});

document.getElementById('resetCam').addEventListener('click', ()=>{
if (useSketchfabForCurrentModel()) {
    alert('Reset camera is controlled by the Sketchfab viewer for this model.');
    return;
}
try{ carViewer.cameraOrbit = '0deg 75deg 2.5m'; }catch(e){}
});

// pause auto-rotate while interacting (only for model-viewer)
if (carViewer) {
carViewer.addEventListener('pointerdown', ()=>{
    userInteracting = true;
    carViewer.autoRotate = false;
});
const stopInteract = ()=>{
    userInteracting = false;
    carViewer.autoRotate = true;
};
carViewer.addEventListener('pointerup', stopInteract);
carViewer.addEventListener('pointercancel', stopInteract);
}

function loadComponentOptions(){
if (!engineSelect) return;
const m = modelSelect.value;
engineSelect.innerHTML = '';

let engines = [];

if(isTeslaModel()){
    // Tesla: battery ranges instead of liter engines
    engines = [
    'Standard Range (Approx. 430 km)|0',
    'Long Range (Approx. 580 km)|250000',
    'Performance (Approx. 560 km)|400000'
    ];
} else {
    // ICE/hybrid style "liter" engines
    if(
    m==='santro' ||
    m==='aura' ||
    m==='swift' ||
    m==='baleno' ||
    m==='ciaz'
    ){
    engines = ['1.0L|0','1.2L|30000'];
    }
    else if(
    m==='i20' || m==='verna' ||
    m==='elantra' ||
    m==='audi_a4' ||
    m==='merc_cclass'
    ){
    engines = ['1.2L|0','1.5L|60000'];
    }
    // Compact / mid SUVs & MUVs & EV SUVs with "engine-style" config
    else if(
    m==='creta' || m==='venue' ||
    m==='brezza' ||
    m==='innova' ||
    m==='fortuner' ||
    m==='audi_q7' ||
    m==='merc_gla'
    ){
    engines = ['1.5L|0','2.0L|120000'];
    }
    else if(m==='alcazar'){
    engines = ['2.0L|0','2.5L|140000'];
    }
    else if(m==='tucson' || m==='kona'){
    engines = ['2.0L|0','3.0L|180000'];
    }
    else {
    engines = ['1.5L|0'];
    }
}

engines.forEach(str=>{
    const [val,extra] = str.split('|');
    engineSelect.insertAdjacentHTML(
    'beforeend',
    `<option value="${val}" data-extra="${extra}">${val}</option>`
    );
});

// reset placeholder images (even though they are hidden now)
engineImg.src     = `https://source.unsplash.com/800x480/?car-engine,${m}`;
interiorImg.src   = `https://source.unsplash.com/800x480/?car-interior,${m}`;
suspensionImg.src = `https://source.unsplash.com/800x480/?car-suspension,${m}`;
brakesImg.src     = `https://source.unsplash.com/800x480/?car-brake,${m}`;

// defaults
interiorSelect.value   = 'Standard';
suspensionSelect.value = 'Standard';
brakesSelect.value     = 'Standard';

// ensure 3D components are loaded
updateEngineVisual();
updateInteriorVisual();
updateSuspensionVisual();
updateBrakesVisual();

updatePrice();
}

// show 3D engine for ICE cars, 3D battery pack for Tesla
function updateEngineVisual(){
if(!engineSelect) return;
const currentOption = engineSelect.value;

let uid;
if(isTeslaModel()){
    uid = BATTERY_3D_UIDS[currentOption] || BATTERY_3D_UIDS['Standard Range (Approx. 430 km)'];
} else {
    uid = ENGINE_3D_UIDS[currentOption] || ENGINE_3D_UIDS['1.5L'];
}

if(engine3dWrap && engine3dFrame){
    engine3dWrap.style.display = 'block';
    if(engineImg) engineImg.style.display = 'none';

    const baseUrl = `https://sketchfab.com/models/${uid}/embed`;
    engine3dFrame.src = `${baseUrl}?autostart=1&autospin=0.3&ui_controls=1&ui_stop=0`;
}
}

function updateInteriorVisual(){
if(!interiorSelect) return;
const val = interiorSelect.value;
const uid = INTERIOR_3D_UIDS[val] || INTERIOR_3D_UIDS['Standard'];

if(interior3dWrap && interior3dFrame){
    interior3dWrap.style.display = 'block';
    if(interiorImg) interiorImg.style.display = 'none';

    const baseUrl = `https://sketchfab.com/models/${uid}/embed`;
    interior3dFrame.src = `${baseUrl}?autostart=1&autospin=0.3&ui_controls=1&ui_stop=0`;
}
}

function updateSuspensionVisual(){
if(!suspensionSelect) return;
const val = suspensionSelect.value;
const uid = SUSPENSION_3D_UIDS[val] || SUSPENSION_3D_UIDS['Standard'];

if(suspension3dWrap && suspension3dFrame){
    suspension3dWrap.style.display = 'block';
    if(suspensionImg) suspensionImg.style.display = 'none';

    const baseUrl = `https://sketchfab.com/models/${uid}/embed`;
    suspension3dFrame.src = `${baseUrl}?autostart=1&autospin=0.3&ui_controls=1&ui_stop=0`;
}
}

function updateBrakesVisual(){
if(!brakesSelect) return;
const val = brakesSelect.value;
const uid = BRAKES_3D_UIDS[val] || BRAKES_3D_UIDS['Standard'];

if(brakes3dWrap && brakes3dFrame){
    brakes3dWrap.style.display = 'block';
    if(brakesImg) brakesImg.style.display = 'none';

    const baseUrl = `https://sketchfab.com/models/${uid}/embed`;
    brakes3dFrame.src = `${baseUrl}?autostart=1&autospin=0.3&ui_controls=1&ui_stop=0`;
}
}

function updatePrice(){
const base = {
    // Hyundai
    creta:1200000, i20:800000, verna:1100000, venue:950000,
    tucson:2000000, alcazar:1800000, kona:2300000,
    elantra:1500000, aura:750000, santro:500000,
    // Maruti
    swift:650000, baleno:800000, ciaz:950000, brezza:950000,
    // Toyota
    innova:2000000, fortuner:3200000,
    // Audi
    audi_a4:4600000, audi_q7:8500000,
    // Mercedes
    merc_cclass:5500000, merc_gla:4500000,
    // Tesla
    tesla_model3:5000000, tesla_modelx:9000000
};
const m = modelSelect.value;
let total = base[m] || 1000000;

// main extras on page2
if(wheelSelect){
    const wOpt = wheelSelect.options[wheelSelect.selectedIndex];
    total += parseInt(wOpt?.dataset.extra || 0);
}
if(finishSelect){
    const fOpt = finishSelect.options[finishSelect.selectedIndex];
    total += parseInt(fOpt?.dataset.extra || 0);
}
if(state.color==='Red' || state.color==='Blue') total += 25000;

if(speakerSelect){
    const sp = speakerSelect.options[speakerSelect.selectedIndex];
    total += parseInt(sp.dataset.extra || 0);
}
if(gearboxSelect){
    const gb = gearboxSelect.options[gearboxSelect.selectedIndex];
    total += parseInt(gb.dataset.extra || 0);
}

// components extra cost (page3)
if(engineSelect){
    const eOpt = engineSelect.options[engineSelect.selectedIndex];
    total += parseInt(eOpt?.dataset.extra || 0);
}
if(interiorSelect){
    const iOpt = interiorSelect.options[interiorSelect.selectedIndex];
    total += parseInt(iOpt?.dataset.extra || 0);
}
if(suspensionSelect){
    const sOpt = suspensionSelect.options[suspensionSelect.selectedIndex];
    total += parseInt(sOpt?.dataset.extra || 0);
}
if(brakesSelect){
    const bOpt = brakesSelect.options[brakesSelect.selectedIndex];
    total += parseInt(bOpt?.dataset.extra || 0);
}

state.components = {
    engine: engineSelect ? engineSelect.value : '-',
    interior: interiorSelect ? interiorSelect.value : '-',
    suspension: suspensionSelect ? suspensionSelect.value : '-',
    brakes: brakesSelect ? brakesSelect.value : '-'
};

priceValue.textContent = total.toLocaleString('en-IN');
state.price = total;
}

function buildSummary(){
updatePrice();
const s = {
    Model: modelSelect.options[modelSelect.selectedIndex].text,
    Wheels: wheelSelect.value,
    Color: state.color,
    Finish: finishSelect.value,
    Speaker: speakerSelect ? speakerSelect.options[speakerSelect.selectedIndex].text : 'Standard',
    Gearbox: gearboxSelect ? gearboxSelect.options[gearboxSelect.selectedIndex].text : 'Manual',
    'Engine / Battery': state.components.engine,
    Interior: state.components.interior,
    Suspension: state.components.suspension,
    Brakes: state.components.brakes,
    Price: `₹ ${state.price.toLocaleString('en-IN')}`
};
let html = '<div style="display:grid;gap:10px">';
for(const k in s){
    html += `<div><strong>${k}:</strong> ${s[k]}</div>`;
}
html += '</div>';
document.getElementById('summaryBox').innerHTML = html;

buildCheckout();
}

function buildCheckout(){
const checkoutBox = document.getElementById('checkoutBox');
checkoutBox.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:8px">
    <div><strong>Model:</strong> ${modelSelect.options[modelSelect.selectedIndex].text}</div>
    <div><strong>Color:</strong> ${state.color}</div>
    <div><strong>Finish:</strong> ${finishSelect.value}</div>
    <div><strong>Engine / Battery:</strong> ${state.components.engine}</div>
    <div><strong>Interior:</strong> ${state.components.interior}</div>
    <div><strong>Suspension:</strong> ${state.components.suspension}</div>
    <div><strong>Brakes:</strong> ${state.components.brakes}</div>
    <div><strong>Total Price:</strong> ₹ ${state.price.toLocaleString('en-IN')}</div>
    <div style="margin-top:8px;font-size:13px;color:var(--muted)">
        Review your configuration before confirming. You can still go back and tweak components.
    </div>
    </div>
`;
}

function confirmOrder(){
document.getElementById('confirmBtn').style.display = 'none';
showThankYou();
}

function showThankYou(){
thankYou.classList.add('show');
thankYou.setAttribute('aria-hidden','false');

// simple confetti illusion
for(let i=0;i<32;i++){
    const el=document.createElement('div');
    el.textContent=['🎉','✨','🎊','✅'][Math.floor(Math.random()*4)];
    el.style.position='fixed';
    el.style.left=Math.random()*100+'%';
    el.style.top='-10%';
    el.style.fontSize=(12+Math.random()*22)+'px';
    el.style.opacity=0.95;
    el.style.zIndex=25;
    document.body.appendChild(el);
    const dur=2000+Math.random()*2000;
    el.animate(
    [
        {transform:`translate3d(0,0,0) rotate(0deg)`,opacity:1},
        {transform:`translate3d(${(Math.random()-.5)*120}px,${80+Math.random()*500}px,0) rotate(${Math.random()*720}deg)`,opacity:0}
    ],
    {duration:dur,easing:'cubic-bezier(.2,.7,.2,1)'}
    );
    setTimeout(()=>{ try{ el.remove(); }catch(e){} },dur+60);
}
}

function backToHome(){
thankYou.classList.remove('show');
thankYou.setAttribute('aria-hidden','true');
document.getElementById('confirmBtn').style.display = 'inline-block';
goTo(1);
}
window.backToHome = backToHome;

// attach confirm
if(confirmBtn) confirmBtn.addEventListener('click', confirmOrder);

// wire price + 3D triggers
wheelSelect.addEventListener('change', updatePrice);
finishSelect.addEventListener('change', updatePrice);
modelSelect.addEventListener('change', updatePrice);

if (engineSelect) engineSelect.addEventListener('change', ()=>{
updateEngineVisual();
updatePrice();
});
if (interiorSelect) interiorSelect.addEventListener('change', ()=>{
updateInteriorVisual();
updatePrice();
});
if (suspensionSelect) suspensionSelect.addEventListener('change', ()=>{
updateSuspensionVisual();
updatePrice();
});
if (brakesSelect) brakesSelect.addEventListener('change', ()=>{
updateBrakesVisual();
updatePrice();
});

// set default selected color UI
applyColor('White','#ffffff');

// ===== Smooth 120fps-feel utilities =====

// 1. Tiny parallax on header + main using requestAnimationFrame (lerped)
const headerWrap = document.querySelector('header .wrap');
const mainWrap = document.querySelector('main.wrap');
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

window.addEventListener('mousemove', (e)=>{
const nx = (e.clientX / window.innerWidth - 0.5);
const ny = (e.clientY / window.innerHeight - 0.5);
targetX = nx * 10;
targetY = ny * 6;
});

function parallaxLoop(){
currentX += (targetX - currentX) * 0.12;
currentY += (targetY - currentY) * 0.12;
if(headerWrap) headerWrap.style.transform = `translate3d(${currentX * 0.4}px,${currentY * 0.3}px,0)`;
if(mainWrap) mainWrap.style.transform   = `translate3d(${currentX}px,${currentY}px,0)`;
requestAnimationFrame(parallaxLoop);
}
requestAnimationFrame(parallaxLoop);

// 2. Subtle continuous wobble of the camera orbit for depth feel (only when model-viewer visible)
let orbitT = 0;
function smoothOrbit(){
orbitT += 0.012;
const y = 70 + Math.sin(orbitT) * 4;
try{
    if(carViewer && !document.hidden && !userInteracting && !useSketchfabForCurrentModel()){
    carViewer.cameraOrbit = `0deg ${y}deg 2.5m`;
    }
}catch(e){}
requestAnimationFrame(smoothOrbit);
}
requestAnimationFrame(smoothOrbit);

// 3. Pointer trail for high-refresh illusion
let lastTrailTime = 0;
window.addEventListener('pointermove',(e)=>{
const now = performance.now();
if(now - lastTrailTime < 35) return;
lastTrailTime = now;
const dot = document.createElement('div');
dot.className = 'trail-dot';
dot.style.left = e.clientX + 'px';
dot.style.top  = e.clientY + 'px';
document.body.appendChild(dot);
setTimeout(()=>{ dot.remove(); },400);
});