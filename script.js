// // let input = document.getElementById("input");

// // function searchFn(event) {
// //   console.log(event.target.value);
// // }

// // function debounceFn(normalFn, delay) {
// //   let timerId;
// //   return function (...args) {
// //     if (timerId) {
// //       clearTimeout(timerId);
// //     }

// //     timerId = setTimeout(() => {
// //       normalFn(...args);
// //     }, delay);
// //   };
// // }

// // let optimizedFn = debounceFn(searchFn, 1000);

// // optimizedFn();

// ////// throttle

// let machineCount = 0;
// let shotgunCount = 0;

// let normalCountDisplay = document.getElementById("normal-count");
// let throttleCountDisplay = document.getElementById("throttle-count");

const trigger = document.getElementById("trigger");

// function ShotgunFireHandle() {
//   shotgunCount++;
//   throttleCountDisplay.innerText = shotgunCount;

// }

// const throttlefn = (callbackFn, coolDownTime) => {
//   let lastExeFnTime = 0;
//   return function (...args) {
//     let currentTime = new Date().getTime();

//     if (currentTime - lastExeFnTime < coolDownTime) {
//       // console.log(currentTime-lastExeFnTime)
//       return;
//     } else {
//       callbackFn(...args);
//       lastExeFnTime = currentTime;
//     }
//   };
// };

// const actualShotGun = throttlefn(ShotgunFireHandle, 300);

// trigger.addEventListener("click", () => {
//   machineCount++;
//   normalCountDisplay.innerText = machineCount;
//   actualShotGun();
// });

// //throttlesecondmethd

const throttleFn2 = function (cBFn, delay) {
  let sai = true;
  return function (...args) {
    if (sai) {
      setTimeout(() => {
        cBFn(...args);
        sai = true;
      }, delay);
      sai = false;
    } else {
      return;
    }
  };
};

let hi = throttleFn2(cBFn, 1000);

function cBFn() {
  console.log("hi");
}

trigger.addEventListener("click", hi);
