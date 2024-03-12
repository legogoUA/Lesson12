//setTimeout
function printNumber(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }

    current++;
  }, 1000);
}

// printNumber(1, 12);

//setInterval
function printNumberI(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

// printNumberI(5, 10);


// Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('виконалось через 3 секунди'));
