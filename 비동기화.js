function asyncFunction1() {
  setTimeout(function() {
    console.log(1)
  }, 1000)
}

function syncFunction1() {
  console.log(2)
}

function syncFunction2() {
  console.log(3)
}

asyncFunction1()
syncFunction1()
syncFunction2()
