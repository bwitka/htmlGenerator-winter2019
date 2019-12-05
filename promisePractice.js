let needToUpdate = 0;

let myFirstPromise0 = new Promise((resolve, reject) => {
  let saveThis = needToUpdate;

  setTimeout(resolve, 2000);
});

let myFirstPromise1 = new Promise((resolve, reject) => {
  let saveThis = needToUpdate;

  setTimeout(resolve, 2000);
});
