function loadHeader(){
    fetch("../Header_Footer/Header.html")
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
                if(page === "Education"){
                     img.src ="../../images/Education.jpeg"
                }
                if(page === "Team"){
                     img.src ="../../images/Our-Team.jpg"
                }
                if(page == "Education_Phuong"){
                    img.src ="../../images/edu.jpg"
                }
                if(page == "event"){
                    img.src ="../../images/event.jpg"
                }
                if(page == "get_involved"){
                    img.src ="../../images/get_involed.jpg"
                }
                if(page == "help"){
                    img.src ="../../images/help.jpg"
                }
                if(page == "partner"){
                    img.src ="../../images/hoptac.jpeg"
                }
                if(page == "recruitmrnt"){
                    img.src ="../../images/recruimrnt.jpeg"
                }
                if(page == "volunteer"){
                    img.src ="../../images/volum.jpg"
                }
                
                
            }
            else{
                console.log("error")
            }
            
        })
        .catch(err => console.error("Error loading header: ",err))
}

function loadFooter() {
    fetch("../Header_Footer/Footer.html")
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