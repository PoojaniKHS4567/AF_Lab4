const fs = require('fs');

const condition = true;

fs.readFile('motive.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});

const myPromise = new Promise((resolve, reject) => {
  if (condition) resolve("Success!");
  else reject("Failure!");
});



async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();
