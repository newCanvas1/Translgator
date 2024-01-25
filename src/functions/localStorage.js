function getFromLocalStorage(key) {
  return localStorage.getItem(key);
}

function setToLocalStorage(key, value) {
  return localStorage.setItem(key, value);
}

module.exports = {
  getFromLocalStorage,
  setToLocalStorage,
};
