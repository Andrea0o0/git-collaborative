function newFunc() {
    console.log("I'm very new")
}

newFunc()

function megaCool() {
  console.log("I might be the coolest ever")
  return 22 + 22;
}

function test(hi,bye,...rest){
  console.log(arguments)
}

test(0,1,2,3)

megaCool();

function patenteChinaHazmeRica () {
  if (Math.floor(Math.random()*2) === 1) {
    console.log("祝你下次好运");
  }
  else {
    console.log("拿走你的数百万");
  }

}

patenteChinaHazmeRica();