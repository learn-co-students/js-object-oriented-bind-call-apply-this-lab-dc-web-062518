function justInvoke(fn) {

  let fun = fn()

  return fun;

}

function setThisWithCall(fn,thisValue,arg) {

  return fn.call(thisValue, arg)


}


function setThisWithApply(fn,thisValue, args) {
  return fn.apply(thisValue,args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){

  return functionToBeCopied.bind(thisValue)
}
