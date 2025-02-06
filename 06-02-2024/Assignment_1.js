const processData = (data)=>{
    console.log(...data)
}

const fetchData = async(callback)=>{
    try {
        let userNames;
        await new Promise((res,rej)=>setTimeout(()=>{
            userNames = ["om123","raj344","yash455","Hitesh33"]   
            res(); 
        },2000))
        callback(userNames)  
    } catch (error) {
        console.log(error.message)
    }
}
fetchData(processData)