// code your solution here
function saturdayFun(actvity="roller-skate"){
  return   `This Saturday, I want to ${actvity}!`
}
function mondayWork(actvity="go to the office"){
    return `This Monday, I will ${actvity}.`
}

let wrapAdjective=function(style="*"){
    return function (adjective="special"){
       return `You are ${style}${adjective}${style}!`

    }

}
