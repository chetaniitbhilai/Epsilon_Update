window.addEventListener('load',()=>{
    const preloader=document.querySelector('.robot');
    preloader.classList.add('preload-finish');
  });
  
  function change_display(){
          const disp=document.getElementById("suggestion");
          const qry=document.getElementById("qry");
          if(disp.style.display=='inline'){
                  disp.style.display='none';
                  qry.innerHTML="Queries ? &#9660;"}
       else{
  disp.style.display='inline';
  disp.style.width='100%';
  disp.style.height='500px';
  qry.innerHTML="Queries ? &#9650;";
  }
  }
  
  