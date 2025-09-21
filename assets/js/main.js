// Visibility Button

function toggle(balance, button) {
  if (balance.dataset.showBalance === 'true') {
    balance.dataset.showBalance = 'false';
    balance.innerText = 'Rp. **********';
    button.classList.remove('icon-[material-symbols--visibility]');
    button.classList.add('icon-[material-symbols--visibility-off]');
  } else {
    balance.dataset.showBalance = 'true';
    balance.innerText = balance.dataset.balanceValue;
    button.classList.remove('icon-[material-symbols--visibility-off]');
    button.classList.add('icon-[material-symbols--visibility]');
  }
}

const balance = document.querySelector('#balance');
const eyeBtn = document.querySelector('#visibilityButton');

eyeBtn.addEventListener('click', function () {
  toggle(balance, this);
});
