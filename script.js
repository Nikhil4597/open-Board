    let canvasBoard = document.querySelector("canvas");
    canvasBoard.height = window.innerHeight;
    canvasBoard.width = window.innerWidth;
    let tool = canvasBoard.getContext("2d");
    //using tools
    // let rectTool = document.querySelector(".fa-square");
    // let lineTool = document.querySelector(".fa-grip-lines-vertical");
    let cTool = "rectTool";
    // //for boundary
    // tool.strokeStyle ="red"
    // tool.strokeRect(50,50,200,200);

    // for filling area  change
    // tool.fillRect(50,50,100,100);
    // // tool.fillStyle ="green";
    $(".fa-square").click(function(){
        cTool = "rectTool";
    });

    $(".fa-grip-lines-vertical").click(function(){
        cTool = "lineTool";
    });

    let ix,iy,fx,fy; 
    let border = canvasBoard.getBoundingClientRect();
    let delX = border.left; //dis between body and canvas in x & y
    let delY = border.top;
    let isPen = false;

    $("body").mouseup(function(e){
        isPen = false;
    });


    $("body").mousedown(function(e){
        isPen = true;
        tool.beginPath();
        ix = e.clientX-delX;
        iy = e.clientY-delY;
        tool.moveTo(ix,iy);
    });
    
    $("body").mousemove(function(e){
        if(isPen ==false)
        {
            return ;
        }
        fx = e.clientX-delX;
        fy = e.clientY-delY;
        tool.lineTo(fx,fy);
        tool.stroke();
        ix = fx;
        iy = fy;
    })
    // $("body").mousedown(function(e){
    //     ix = e.clientX;
    //     iy = e.clientY;
    // });
    // $("body").mouseup(function(e){
    //         fx = e.clientX;
    //         fy = e.clientY;

    //         let width = fx-ix;
    //         let height = fy-iy;

    //         // correctness  
    //         ix-=delX;iy-=delY;
    //         fx-=delX;fy-=delY;
    //         if(cTool == "rectTool"){
    //             tool.strokeRect(ix,iy,width,height);  
    //         }
    //         else{
    //             tool.beginPath();
    //             tool.moveTo(ix,iy);
    //             tool.lineTo(fx,fy);
    //             tool.stroke();

    //         }
    // });
    // color change
    $(".red").click(function(){
        tool.strokeStyle ="red";
    });
    $(".green").click(function(){
        tool.strokeStyle ="green";
    });
    $(".blue").click(function(){
        tool.strokeStyle = "blue";
    });