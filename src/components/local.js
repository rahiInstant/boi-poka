function getData(key) {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

function saveToLs(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function setData(key, data) {
  const existingData = getData(key);
  existingData.push(data);
  saveToLs(key, existingData);
}

function removeData(key, data) {
  console.log(data);
  const existingData = getData(key);
  const newData = existingData.filter((item) => item.bookId !== data.bookId);
  saveToLs(key, newData);
}



export { getData, setData, saveToLs, removeData };
