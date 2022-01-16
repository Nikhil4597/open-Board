    let canvasBoard = document.querySelector("canvas");
    let body = document.querySelector("body");
    canvasBoard.height = window.innerHeight;
    canvasBoard.width = window.innerWidth;
    let tool = canvasBoard.getContext("2d");
    //using tools
    let rectTool = document.querySelector(".fa-square");
    let lineTool = document.querySelector(".fa-grip-lines-vertical");
    let cTool = "rectTool";
    // //for boundary
    // tool.strokeStyle ="red"
    // tool.strokeRect(50,50,200,200);

    // for filling area  change
    // tool.fillRect(50,50,100,100);
    // tool.fillStyle ="green";
    rectTool.addEventListener("click",function(){

        cTool = "rectTool";
    })
    lineTool.addEventListener("click",function(){
        cTool = "lineTool";     
    })
    
    let ix,iy,fx,fy; 
    body.addEventListener("mousedown",function(e){
            ix =e.clientX;
            iy= e.clientY;
    })
    body.addEventListener("mouseup",function(e){
            fx = e.clientX;
            fy = e.clientY;
            let width = fx-ix;
            let height = fy-iy;
            if(cTool == "rectTool"){
                tool.strokeRect(ix-12,iy-36,width,height);  
            }
            else{
                tool.beginPath();
                tool.moveTo(ix-10,iy-37);
                tool.lineTo(fx-10,fy-37);
                tool.stroke();

            }
    })
    
    