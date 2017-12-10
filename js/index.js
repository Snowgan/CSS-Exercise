const CASES_DATA = {
  centerHor: '1',
};

document.addEventListener('DOMContentLoaded', e => {
  console.log('CSS Snippet Starting...');
  Object.keys(CASES_DATA).forEach(name => {
    const curCase = document.querySelectorAll(`input[name=${name}]`);
    for (let i = curCase.length; i--;) {
      curCase[i].addEventListener('change', this[name]);
    }
  })
}, false);

function centerHor(e) {
  if (e.target.value === CASES_DATA.centerHor) return;
  if (CASES_DATA.centerHor !== '0') {
    document.getElementById('case-1-p').classList.remove(`parent${CASES_DATA.centerHor}`);
    document.getElementById('case-1-c').classList.remove(`child${CASES_DATA.centerHor}`);
  }
  if (e.target.value !== '0') {
    document.getElementById('case-1-p').classList.add(`parent${e.target.value}`);
    document.getElementById('case-1-c').classList.add(`child${e.target.value}`);
  }
  CASES_DATA.centerHor = e.target.value;
}