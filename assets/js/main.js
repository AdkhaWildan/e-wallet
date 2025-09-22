//Show Hide Modals
const openButtons = document.querySelectorAll('.open');
const closeButtons = document.querySelectorAll('.close');
const dialog = document.querySelector('dialog');

openButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const idModalTarget = button.getAttribute('data-modal-target');
    const modal = document.getElementById(idModalTarget);
    modal.showModal();
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const idModalTarget = button.getAttribute('data-modal-target');
    const modal = document.getElementById(idModalTarget);
    modal.close();
  });
});

//Change Modal View
const modalContent = {
  idCheck: document.getElementById('id-check'),
  searchContact: document.getElementById('search-contact'),
  inputNominal: document.getElementById('input-nominal'),
};

const backButton = document.getElementById('back');
const historyStack = [];
let currentPage = 'idCheck';

const toggleModalContent = (showKey) => {
  Object.keys(modalContent).forEach((key) => {
    if (key === showKey) {
      modalContent[key].classList.remove('hidden');
      modalContent[key].classList.add('flex');
    } else {
      modalContent[key].classList.add('hidden');
      modalContent[key].classList.remove('flex');
    }
  });

  currentPage = showKey;

  if (currentPage === 'idCheck') {
    backButton.classList.add('invisible', 'pointer-events-none');
  } else {
    backButton.classList.remove('invisible', 'pointer-events-none');
  }
};

const navigateTo = (showKey) => {
  if (currentPage !== 'idCheck') {
    historyStack.push(currentPage);
  }
  toggleModalContent(showKey);
};

// Back button
const goBack = () => {
  const lastPage = historyStack.pop();
  if (lastPage) {
    toggleModalContent(lastPage);
    currentPage = lastPage;
  } else {
    toggleModalContent('idCheck');
    currentPage = 'idCheck';
  }
};

backButton.addEventListener('click', goBack);

toggleModalContent('idCheck');

const nominal = document.getElementById('nominal');
nominal.addEventListener('keydown', (e) => {
  if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
    e.preventDefault();
  }
});

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
