function newFunc() {
    console.log("I'm very new")
}

newFunc()
function megaCool() {
  console.log("I might be the coolest ever")
  return 2 + 2;
}

function test(hi,bye,...rest){
  console.log(arguments)
}

test(0,1,2,3)

megaCool();
