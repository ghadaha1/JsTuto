var mypromise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("Ghada")
        resolve("done")
    },2000)
})

mypromise.then((msg)=>console.log(msg)).catch((err)=>console.log(err))
