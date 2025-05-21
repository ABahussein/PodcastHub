const buttons=document.querySelectorAll(".filter-btn");
const menuItem=document.querySelectorAll(".menu-item");

buttons.forEach((button )=>{
    button.addEventListener("click",()=>{
        const category =button.getAttribute("data-category");

        menuItem.forEach(item => {
            if(category==="all" ||category===item.getAttribute("data-category")){
                
            
            item.style.display="flex";
        }else{
            
            item.style.display="none";
            }

})
    })
});

/*
category=


*/