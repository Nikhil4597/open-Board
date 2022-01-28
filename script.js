    let canvasBoard = document.querySelector("canvas");
    canvasBoard.height = window.innerHeight;
    canvasBoard.width = window.innerWidth;
    //using tools
    // let rectTool = document.querySelector(".fa-square");
    // let lineTool = document.querySelector(".fa-grip-lines-vertical");
    
    let tool = canvasBoard.getContext("2d");
    let cTool = "pencil";

    // //for boundary
    tool.strokeStyle ="#343434";
    //  --------------------tool selection------------------
    let box = $(".size-box");
    $("#pencil").click(function(){
        if(cTool =='pencil')
        {
            box[0].style.display ="flex";
        }
        else{
             removeBox();

            cTool="pencil";
        }
    });
    
    $(".eraser").click(function(){
        if(cTool =='erase')
        {
            box[1].style.display ="flex";
        }
        else{
             removeBox();
            cTool="erase";
        }
    });
    $(".rect").click(function(){

        if(cTool =='rect')
        {
            box[2].style.display ="flex";
        }
        else{
            removeBox();
            cTool="rect";
        }
    });

    $(".line").click(function(){
        if(cTool =='line')
        {
            box[3].style.display ="flex";
        }
        else{
              removeBox();
            cTool="line";
        }
    });
    function removeBox(){
        for(let i =0;i<4;i++)
             {
                box[i].style.display ="none";
             }
    }
    let ix,iy,fx,fy; 
    let border = canvasBoard.getBoundingClientRect();
    let delX = border.left; //dis between body and canvas in x & y
    let delY = border.top;
//  ---------------------------Drawing functions ----------------------------------------   
    let isMouseDown = false;

    $("#canvas").mousedown(function(e){
        ix = parseInt(e.clientX-delX);
        iy = parseInt(e.clientY-delY);
        fx = ix;
        fy = iy;
        isMouseDown =true;
    });
    $("#canvas").mouseup(function(e){
        
        if(cTool =="pencil" || cTool == "erase")
        {

            ix = parseInt(e.clientX-delX);
            iy = parseInt(e.clientY-delY);
            isMouseDown= false;

        }
        else if(cTool  == "line" ||  cTool == "rect"){
              
            let width = fx-ix;
            let height = fy-iy;
            
            if(cTool == "rect"){
                tool.strokeRect(ix,iy,width,height);  
            }
            else if(cTool ="line"){
                
                tool.beginPath();
                tool.moveTo(ix,iy);
                tool.lineTo(fx,fy);
                tool.stroke();
            }
        }
    });
    let eraseSize = 8;
    $("#canvas").mousemove(function(e){
      
        ix = parseInt(e.clientX-delX);
        iy = parseInt(e.clientY-delY);

        if(isMouseDown)
        {
            tool.beginPath();
            if(cTool == "pencil"){
                tool.globalCompositeOperation = "source-over";
                tool.moveTo(fx,fy);
                tool.lineTo(ix,iy);
                tool.stroke();
            }

            else if(cTool == "erase"){
                tool.globalCompositeOperation ="destination-out";
                tool.arc(fx,fy,eraseSize,0,Math.PI*2,false);
                tool.fill();
            }
            else{
                return ;
            }
            fx =ix;
            fy = iy;
        }

    });
    $("#canvas").mouseout((e)=>{

        ix = parseInt(e.clientX-delX);
        iy = parseInt(e.clientY-delY);
        isMouseDown = false;


    });

    // --------------------------color change--------------------
    $(".red").click(function(){
        tool.strokeStyle = "#ff6347";
        $(".size").css("background-color","#ff6347");
    });

    $(".blue").click(function(){
        tool.strokeStyle = "#4682b4";
        $(".size").css("background-color","#4682b4");

    });

    $(".green").click(function(){
        tool.strokeStyle = "#32cd32";
        $(".size").css("background-color","#32cd32");

    });
    $(".black").click(function(){
        tool.strokeStyle = "#343434";
        $(".size").css("background-color","#343434");

    })
    $(".white").click(function(){
        tool.strokeStyle = "#F0FFFF";
        $(".size").css({"background-color":"#F0FFFF","border":"1px solid #343434"});


    })
    $(".yellow").click(function(){
        tool.strokeStyle = "#FFC300 ";
        $(".size").css("background-color","#FFC300 ");

    })
    // ----------------------toogle effect -------------------
    let toogle =1;
    $(".pad-color").click(function(){
        if(toogle %2!=0){
        $(this).css("background-color","#F0FFFF");
        $("body").css("background-color","#28282B");
        $(".toolbar").css("background-color","#28282B");
        toogle++;
    }
    else{
        $(this).css("background-color","#28282B");
        $("body").css("background-color","#F0FFFF");
        $(".toolbar").css("background-color","#F0FFFF");
        toogle++;
    }

    })
    // -------------------- change size----------------
    $(".size1").click((e)=>{
        tool.lineWidth= 1.25;
    });
    $(".size2").click((e)=>{
        tool.lineWidth= 2.5;
    });
    $(".size3").click((e)=>{
        tool.lineWidth= 3.5;
    });
    $(".size4").click((e)=>{
        tool.lineWidth= 4.5;
    });
    // ------------------change eraser size-----------------------
    $("#erase1").click(()=>{
        eraseSize =10;
    })
    $("#erase2").click(()=>{
        eraseSize =16;
    })
    $("#erase3").click(()=>{
        eraseSize =22;
    })
    $("#erase4").click(()=>{
        eraseSize =27;
    })
    
    // ----------------------all clear -----------------
    $(".all-clear").click(()=>{
        tool.clearRect(0,0,border.width,border.height); 
    });

     
  