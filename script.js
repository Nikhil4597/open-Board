    let canvasBoard = document.querySelector("canvas");
    canvasBoard.height = window.innerHeight;
    canvasBoard.width = window.innerWidth;
    //using tools
    // let rectTool = document.querySelector(".fa-square");
    // let lineTool = document.querySelector(".fa-grip-lines-vertical");
    
    let tool = canvasBoard.getContext("2d");
    let cTool = "rectTool";

    // //for boundary
    tool.strokeStyle ="grey";
    // tool.strokeRect(50,50,200,200);

    // for filling area  change
    // tool.fillRect(50,50,100,100);
    // tool.fillStyle = "green";
   
    $(".rect").click(function(){

        cTool = "rectTool";
    });

    $(".line").click(function(){
        cTool = "lineTool";
    });

    let ix,iy,fx,fy; 
    let border = canvasBoard.getBoundingClientRect();
    let delX = border.left; //dis between body and canvas in x & y
    let delY = border.top;
    let isPen = false;
    console.log($(".toolbar"));
    let isBox = false;
    $("#pencil").click(function(){
    if(!isBox){
        $(this).html(`
        <img src="./NewIcons/Black_Pencil.svg" alt="" class="tool-img">

        <div class="size-box">
        <div class="size1 size"></div>
        <div class="size2 size"></div>
        <div class="size3 size"></div>
        <div class="size4 size"></div>
    </div>`);
        isBox =true;
        
        }
        else{
            $(this).html(`
            <img src="./NewIcons/Black_Pencil.svg" alt="" class="tool-img">
     `);
            
            isBox = false;
        }
    });

    $(".eraser").click(function(){
        isBox = false;
    if(!isBox){
        $(this).html(`
        <img src="./NewIcons/Eraser.svg" alt="" class="tool-img">

        <div class="size-box">
        <div class="size1 size"></div>
        <div class="size2 size"></div>
        <div class="size3 size"></div>
        <div class="size4 size"></div>
    </div>`);
        isBox =true;
        
        }
        else{
            $(this).html(`
            <img src="./NewIcons/Eraser.svg" alt="" class="tool-img">
     `);
            
            isBox = false;
        }});

    $(".rect").click(function(){
        isBox = false;
        if(!isBox){
            $(this).html(`
            <img src="./NewIcons/simple-green-rectangle.svg" alt="" class="tool-img">

            <div class="size-box">
            <div class="size1 size"></div>
            <div class="size2 size"></div>
            <div class="size3 size"></div>
            <div class="size4 size"></div>
        </div>`);
            isBox =true;
            
            }
            else{
                $(this).html(`
            <img src="./NewIcons/simple-green-rectangle.svg" alt="" class="tool-img">
 `);
                
                isBox = false;
            }
    }); 
    $(".line").click(function(){
        isBox = false;
        if(!isBox){
        $(this).html(`
        <img src="./NewIcons/line.svg" alt=""class="tool-img">

        <div class="size-box">
        <div class="size1 size"></div>
        <div class="size2 size"></div>
        <div class="size3 size"></div>
        <div class="size4 size"></div>
    </div>`);
        isBox =true;
        
        }
        else{
            $(this).html(`
            <img src="./NewIcons/line.svg" alt=""class="tool-img">    
            `);
            
            isBox = false;
        }
    });
    $("#pencil").click(function(){
         let pix;
         let piy;
         let pfx;
         let pfy;
        $("body").mouseup(function(e){
            isPen = false;
        });

        $("body").mousedown(function(e){
            isPen = true;
            tool.beginPath();
            pix = e.clientX-delX;
            piy = e.clientY-delY;
            tool.moveTo(pix,piy);
        });
        
        $("body").mousemove(function(e){
            if(isPen == false)
            {
                return ;
            }
            pfx = e.clientX-delX;
            pfy = e.clientY-delY;
            tool.lineTo(pfx,pfy);
            tool.stroke();
            tix = pfx;
            tiy = pfy;
        })
    });
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

    // --------------------------color change
     
  