// Rest operator

// Rest parameter must be last formal parameter 

function restApi(a, ...param){
    console.log(param)
    console.log(a)
}


restApi(1,2,3,4,5)