let videoBtn = document.querySelectorAll('.vid-btn');


videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src
    });
});


function handleSubmit(event) {
    
    event.preventDefault();

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    
    if (!name || !email || !phone || !message) {
        alert("Please fill in all fields.");
        return false; 
    }

    alert("Your message has been received. We will contact you shortly.");

    document.getElementById("form").reset();

    return false; 
}


