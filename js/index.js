// first synchronous code
// second asynchronous code
console.log("1");

setTimeout(() => (console.log("2"), 1));

console.log("3");
console.log("4");

// setTimeout(function, time);

const hello1 = () => {
  console.log("hello");
};

const timeout = setTimeout(hello1, 1000);

// clearTimeout(timeout);

// for example logic ads on video
const hello = () => {
  console.log("hello");
};

const setInt = setInterval(hello, 1000);

clearInterval(setInt);

// add buttons to HTML

const startBtn = document.querySelector("#start");
const stoptBtn = document.querySelector("#stop");

let time = null;

startBtn.addEventListener("click", () => {
  time = setInterval(() => {
    console.log("123");
  }, 1000);
});

stoptBtn.addEventListener("click", () => {
  clearInterval(time);
  console.log("stop");
});

// this
// classic function reference to obj{this}Window
// ()=>{} reference to obj{this}Object
const a = {
  classic() {
    setTimeout(function () {
      console.log(`${this}, classic in object`);
    });
  },
  arr() {
    setTimeout(() => {
      console.log(`${this}, arr in object`);
    });
  },
};

a.classic();
a.arr();

// setTimeout(variable, time 1-4); 1-4 work equally

// new Date();
// we can get a lot methods date

const data = new Date(2022, 4, 1, 10, 10, 0, 0); // year, month, day = required / time don't required
console.log(data);

const unixData = new Date(1677452273126);
console.log(unixData);

const newUnixDate = Date.now();
console.log(newUnixDate);

const date = new Date();

console.log(date.getDate());

console.log(date.getMonth());

console.log(date.getFullYear());

// we can find this on Google
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const ukr = date.toLocaleString("Uk-uk", options);
console.log(ukr);

/////////
// Promise || resolve & reject
// rosolve if OK
// reject if notOK
let prom = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("resolve"), 1000);
  setTimeout(() => reject("reject"), 1000);
});
// }).catch().then().finally();

// prom.then(
// (resolve) => console.log(resolve),
// (reject) => console.log(reject)
// );

prom.catch(alert); // for finding Errors

prom.finally(); // for clearing loader or sth

function load(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Err ${script}`));

    document.head.append(script);
  });
}

let promi = load(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promi.then((script) => console.log(`Download ${script}`));

promi.catch((error) => console.log(`Error ${error.message}`));

promi.finally(console.log("Finally"));

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(2), 1000);
})
  .then(function (result) {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result + 5), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result + 5), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
  });

// Required Promise && this