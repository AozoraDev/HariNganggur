let count = document.querySelector(".sign");
const today = new Date();
const date = new Date(2023, 5, 20);

const timeDiff = today.getTime() - date.getTime();
const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

count.innerText = totalDays;