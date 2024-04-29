console.log("=============================");

function * generator () {
  console.log(1);
  console.log(2);
  yield;
}

const genResult = generator();

const variable = genResult.next();

console.log(variable)