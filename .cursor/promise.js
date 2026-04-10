function task(){
    setTimeout(()=>{
        console.log("wlaking")
    },3000);
}


function task2(){
    setTimeout(()=>{
        console.log("runing");
    },3000);
}
function task3(){
    setInterval(()=>{
        console.log("jumping");
    })
}
task();
task2();
task3();