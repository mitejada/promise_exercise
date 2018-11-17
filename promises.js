function testNum (num) {
  return new Promise ((resolve, reject) => {
    resolve(num > 10);
  }).then (bool => {
    console.log(bool);
  })
}

// testNum(8)


function whisperShout (str) {
  console.log(str);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str.toUpperCase());
    }, 3000);
  }).then(upStr => {
    console.log(upStr);
    // return upStr
  })
}

// whisperShout('hello')

function waitFact(arr) {
  let ind = 0;

  let interval = setInterval(() => {
    if(ind < arr.length){
      new Promise((resolve, reject) => {
        console.log(arr[ind]);
        ind++;
        resolve();
      });
    } else {
    clearInterval(interval);
    }
  }, 3000)
}

waitFact([1,2,3,4])
