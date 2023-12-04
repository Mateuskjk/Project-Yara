const infotickets = JSON.parse(localStorage.getItem('pesquisaInfo'));

const from = document.getElementById('from')
from.textContent = infotickets.fromName;

const destiny = document.getElementById('to')
destiny.textContent = infotickets.toName;