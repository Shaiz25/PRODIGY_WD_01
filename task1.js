
document.addEventListener('DOMContentLoaded', () => {
   
    const navbar = document.querySelector('.navbar');

    
    window.addEventListener('scroll', () => {
      
        if (window.scrollY > 50) {
           
            navbar.style.backgroundColor = '#222';
        } else {
    
            navbar.style.backgroundColor = '#333';
        }
    });

   
    const navLinks = document.querySelectorAll('.nav-item a');

  
    navLinks.forEach(link => {
       
        link.addEventListener('mouseover', () => {

            link.style.color = '#FFD700'; 
        });

  
        link.addEventListener('mouseout', () => {
         
            link.style.color = 'white';
        });
    });
});
