var mypromise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve(10)
    },5000)
})



async function myf(){
    let val =await mypromise.then((msg)=>{return msg})

    console.log("result="+val)
    console.log("Ghada")

}

myf();
