// business.js
// simple helpers to save/load step data to localStorage

function saveStepData(step, data){
  try {
    localStorage.setItem('business_' + step, JSON.stringify(data));
  } catch(e){
    console.error('Failed to save step data', e);
  }
}

function loadStepData(step){
  const raw = localStorage.getItem('business_' + step);
  if(!raw) return;
  const obj = JSON.parse(raw);
  // fill known fields for each step (best-effort)
  if(step === 'step1'){
    if(obj.businessName) document.getElementById('businessName').value = obj.businessName;
    if(obj.ownerName) document.getElementById('ownerName').value = obj.ownerName;
    if(obj.businessType) document.getElementById('businessType').value = obj.businessType;
    if(obj.businessAddress) document.getElementById('businessAddress').value = obj.businessAddress;
    if(obj.tin) document.getElementById('tin').value = obj.tin;
    if(obj.contact) document.getElementById('contact').value = obj.contact;
  } else if(step === 'step2'){
    // we can't set file inputs programmatically for security reasons.
    // but we store filenames as a hint (handled in step2 page)
  } else if(step === 'step3'){
    if(obj.residential) document.getElementById('residential').value = obj.residential;
    if(obj.envNotes) document.getElementById('envNotes').value = obj.envNotes;
    if(typeof obj.complianceCheck !== 'undefined') document.getElementById('complianceCheck').checked = !!obj.complianceCheck;
  } else if(step === 'step4'){
    if(obj.paymentMethod) document.getElementById('paymentMethod').value = obj.paymentMethod;
    if(obj.paymentRef) document.getElementById('paymentRef').value = obj.paymentRef;
  } else if(step === 'step5'){
    if(obj.inspectionNeeded) document.getElementById('inspectionNeeded').value = obj.inspectionNeeded;
    if(obj.inspDate) document.getElementById('inspDate').value = obj.inspDate;
    if(obj.inspTime) document.getElementById('inspTime').value = obj.inspTime;
    if(obj.inspNotes) document.getElementById('inspNotes').value = obj.inspNotes;
  }
}

// raw loader used by some pages
function loadRaw(stepKey){
  try {
    return JSON.parse(localStorage.getItem('business_' + stepKey) || 'null');
  } catch(e){
    return null;
  }
}

// gather all step data into one object
function gatherAllData(){
  return {
    step1: loadRaw('step1') || {},
    step2: loadRaw('step2') || {},
    step3: loadRaw('step3') || {},
    step4: loadRaw('step4') || {},
    step5: loadRaw('step5') || {}
  };
}

// remove draft data (called after submission)
function clearDraft(){
  ['step1','step2','step3','step4','step5'].forEach(k => localStorage.removeItem('business_' + k));
}

// cancel flow
function cancelFlow(){
  if(confirm('Cancel application? All entered data will be lost.')){
    clearDraft();
    window.location.href = 'index.html';
  }
}

// helper to safely escape small text for innerHTML
function escapeHtml(str){
  if(!str) return '';
  return String(str)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#39;');
}

