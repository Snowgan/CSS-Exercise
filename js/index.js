document.addEventListener('DOMContentLoaded', e => {
  console.log('CSS Snippet Starting...');
  Object.keys(CASES_DATA).forEach(name => {
    const curIdx = this[`${name}Data`].caseIdx;
    createCodeSnippet(name, curIdx);
    const curCase = document.querySelectorAll(`input[name=${name}]`);
    for (let i = curCase.length; i--;) {
      curCase[i].addEventListener('change', this.applyStyle.bind(this, name, curIdx));
    }
  })
}, false);

function createCodeSnippet(caseName, caseIdx) {
  const curIdx = this[`${caseName}Data`].caseIdx;
  const curCodeDom = document.getElementById(`case-${curIdx}-code`);
  this[`${caseName}Data`].methods.forEach((method, idx) => {
    const newDom = document.createElement('div');
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const codeText = document.createElement('pre');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', caseName);
    radio.setAttribute('id', `case-${curIdx}-opt${method.value}`);
    radio.setAttribute('value', method.value);
    if (idx === 0) {
      radio.setAttribute('checked', true);
    }
    label.setAttribute('for', `case-${curIdx}-opt${method.value}`);
    label.setAttribute('class', 'code-label');
    codeText.innerText = method.code;
    label.appendChild(codeText);
    newDom.appendChild(radio);
    newDom.appendChild(label);
    curCodeDom.appendChild(newDom);
  });
}

function applyStyle(caseName, caseIdx, e) {
  if (e.target.value === CASES_DATA[caseName]) return;
  if (CASES_DATA[caseName] !== '0') {
    document.getElementById(`case-${caseIdx}-p`).classList.remove(`parent${CASES_DATA[caseName]}`);
    document.getElementById(`case-${caseIdx}-c`).classList.remove(`child${CASES_DATA[caseName]}`);
  }
  if (e.target.value !== '0') {
    document.getElementById(`case-${caseIdx}-p`).classList.add(`parent${e.target.value}`);
    document.getElementById(`case-${caseIdx}-c`).classList.add(`child${e.target.value}`);
  }
  CASES_DATA[caseName] = e.target.value;
}