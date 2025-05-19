const images= document.querySelectorAll('.image');
const width = screen.availwidth;
const paracontent= document.querySelectorAll('.paras');
const welcomecontent= document.querySelectorAll('.welcome');
const aboutcontent= document.querySelectorAll('.about');
const webdevcontent= document.querySelectorAll('.heading-web');
const namecontent= document.querySelectorAll('.name');
const logocontent= document.querySelectorAll('.founder-logos');
const callcontent= document.querySelectorAll('.call-logo');
const contactcontent= document.querySelectorAll('.contact');
const buttontoggle=document.querySelector('.menu ul');
var cumulativeOffset = function(element) {
    var top = 0, left = 0;
    do {
        top += element.offsetTop ||0 ;
        left += element.offsetLeft||0;
        element = element.offsetParent;
    } while(element);

    return {
        top: top,
        left: left
    };
};

const showElements = (scrollTop, elements, animation) => {
  elements.forEach((element, i) => {
    const elemOffset = cumulativeOffset(element);
    if(elements==='paracontent'){
        element.classList.add(animation);
    }
    else{
      if (scrollTop + window.innerHeight > elemOffset.top ) {
        element.classList.add(animation);
      }
    }


  })
};
const revealImages=(scrollTop) =>{
  images.forEach(image =>{
    if(scrollTop +window.innerHeight >image.offsetTop+ image.offsetHeight ){
      image.classList.add('reveal');
    }
  });
}

/*let toggleNav =function(){
  if(toggleNavStatus===false){
    buttontoggle.style.opacity="1";
    buttontoggle.style.visibility="visible";
      //Stuff to do *after* the animation takes place
    })"
    toggleNavStatus=true;
  }
  else if(toggleNavStatus===true){
    toggleNavStatus=false;
    buttontoggle.style.opacity="0";
    buttontoggle.style.visibility="hiddem";
  }
};*/
revealImages(0);
showElements(0,paracontent, 'animate');
showElements(0, welcomecontent, 'animatew');
showElements(0, aboutcontent, 'animateab');
showElements(0,webdevcontent, 'animateweb');
showElements(0,namecontent, 'animatename');
showElements(0,logocontent, 'animatelogo');
showElements(0,callcontent, 'animatecall');
showElements(0,contactcontent, 'animatecontact');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  showElements(scrollTop, paracontent, 'animate');
  showElements(scrollTop, welcomecontent, 'animatew');
  showElements(scrollTop, aboutcontent, 'animateab');
  showElements(scrollTop, webdevcontent, 'animateweb');
  showElements(scrollTop, namecontent, 'animatename');
  showElements(scrollTop, logocontent, 'animatelogo');
  showElements(scrollTop, callcontent, 'animatecall');
  showElements(scrollTop, contactcontent, 'animatecontact');
  revealImages(scrollTop);
})
