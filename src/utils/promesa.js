
let is_ok = true;

let promise = (task) => {
  return new Promise((resolve, reject) => {
    if(is_ok) {
      setTimeout(() => {
        resolve(task);
      }, 1500);
    } else {
      reject("Error")
    }
  })
}

export default promise