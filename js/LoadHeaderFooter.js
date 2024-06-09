function loadHeader(){
    fetch("Header.html")
        .then( response => response.text() )
        .then( data => {
            document.getElementById("Header").innerHTML = data

            const page = document.body.dataset.page
            const img = document.getElementById("Header-img")

            if(img){
                if(page === "Home"){
                    img.src = "../../images/Home.jpg"
                }
                if(page === "Contact"){
                    img.src = "../../images/contact.jpg"
                }
                if(page === "Project"){
                    img.src ="../../images/Project.jpg"
                }
                if(page === "Blogs"){
                     img.src ="../../images/blog.jpg"
                }
            }
            else{
                console.log("error")
            }
            
        })
        .catch(err => console.error("Error loading header: ",err))
}

function loadFooter() {
    fetch("Footer.html")
        .then(response => response.text())
        .then(data => {
            const footerElement = document.getElementById("Footer");
            if (footerElement) {
                footerElement.innerHTML = data;
            } else {
                console.error('Error: Footer element not found');
            }
        })
        .catch(err => console.error('Error loading footer:', err));
}

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});