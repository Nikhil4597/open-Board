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
    // tool.strokeRect(50,50,200,200);

    // for filling area  change
    // tool.fillRect(50,50,100,100);
    // tool.fillStyle = "green";
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
    let isPen = false;
    console.log($(".toolbar"));
    // $("#pencil").click(function(){
    //      let pix;
    //      let piy;
    //      let pfx;
    //      let pfy;
    //     $("body").mouseup(function(e){
    //         isPen = false;
    //     });

    //     $("body").mousedown(function(e){
    //         isPen = true;
    //         tool.beginPath();
    //         pix = e.clientX-delX;
    //         piy = e.clientY-delY;
    //         tool.moveTo(pix,piy);
    //     });
        
    //     $("body").mousemove(function(e){
    //         if(isPen == false)
    //         {
    //             return ;
    //         }
    //         pfx = e.clientX-delX;
    //         pfy = e.clientY-delY;
    //         tool.lineTo(pfx,pfy);
    //         tool.stroke();
    //         tix = pfx;
    //         tiy = pfy;
    //     })
    // });


    $("body").mousedown(function(e){
        ix = e.clientX-delX;
        iy = e.clientY-delY;
        if(cTool == "pencil")
        {
            isPen = true;
            tool.beginPath();
            tool.moveTo(ix,iy);
        }
    });
    $("body").mouseup(function(e){
        if(cTool =="pencil")
        {
            isPen = false;
        }
        else if(cTool  == "line" ||  cTool == "rect"){
            fx = e.clientX-delX;
            fy = e.clientY-delY;

            let width = fx-ix;
            let height = fy-iy;
            // correctness  
             
            
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
    $("body").mousemove(function(e){
        
        if(isPen ==false)
        {
            return;

        }
        else{
            fx = e.clientX-delX;
            fy = e.clientY-delY;
            tool.lineTo(fx,fy);
            tool.stroke();
            ix = fx;
            iy = fy;
        }
    });

    // --------------------------color change
    $(".red").click(function(){
        tool.strokeStyle = "#ff6347";
    });

    $(".blue").click(function(){
        tool.strokeStyle = "#4682b4";
    });

    $(".green").click(function(){
        tool.strokeStyle = "#32cd32";
    });
    $(".black").click(function(){
        tool.strokeStyle = "#343434";
    })
    $(".white").click(function(){
        tool.strokeStyle = "#F0FFFF";
    })
    $(".yellow").click(function(){
        tool.strokeStyle = "#FFC300 ";
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
    

     
  