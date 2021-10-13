const sections = document.querySelectorAll('.sections')
const callback = (entries)=>{
    entries.forEach(entry=>{
        const active= document.querySelector(`.${entry.target.id}`);
        //console.log(active)
        if (entry.isIntersecting){
           active.classList.add('link--active')
        }else{
            active.classList.remove('link--active')
        }
    })
    }

const options= {
   // root : define el elemento padre a vigilar, usualmente el viewport
   //rootMargin: '-50%',
threshold: 0.50  // es lo mismo usar threshold en 0.5 que rootmargin en -50%
}

const observer = new IntersectionObserver(callback,options) //callback obligatorio, options opcional
sections.forEach(element => observer.observe(element))