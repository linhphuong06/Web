function loadHeader(){
    fetch("../Header_Footer/Header.html")
        .then( response => response.text() )
        .then( data => {
            document.getElementById("Header").innerHTML = data

            const page = document.body.dataset.page
            const img = document.getElementById("Header-img")
            const h1 = document.getElementById("title");
            const p = document.getElementById("text");
            if(img){
                if(page === "Home"){
                    img.src = "../../images/Home.jpg"
                    h1.innerText ="Nhận nuôi"
                    p.innerText = "Trở thành 'ngôi nhà vĩnh viễn'"
                }
                if(page === "Contact"){
                    img.src = "../../images/contact.jpg"
                    h1.innerText ="Liên hệ"
                    p.innerText = "Hãy cùng nhau tạo nên sự khác biệt"
                }
                if(page === "Project"){
                    img.src ="../../images/Project.jpg"
                    h1.innerText ="Dự án của chúng tôi"
                     p.innerText = "Hãy xem hiện tại chũng tôi đang bận rộn với việc gì"
                }
                if(page === "Blogs"){
                     img.src ="../../images/blog.jpg"
                     h1.innerText ="Blog của chúng tôi"
                     p.innerText = "Tin mới nhất"
                }
                if(page === "Education"){
                    img.src ="../../images/Education.jpeg"
                    h1.innerText ="Tài Nguyên"
                    p.innerText = "Tài liệu giáo dục thanh thiếu niên"
                }
                if(page === "Team"){
                    img.src ="../../images/Our-Team.jpg"
                    h1.innerText ="Đội của chúng tôi"
                    p.innerText = "Gặp gỡ những người Paws"

                }
                if(page === "Education_Phuong"){
                    img.src ="../../images/edu.jpg"
                    h1.innerText ="Giáo Dục"
                    p.innerText = "Nuôi dưỡng lòng từ bi"
                }
                if(page === "event"){
                    img.src ="../../images/event.jpg"
                    h1.innerText ="Sự Kiện"
                    p.innerText = "Hãy vui vẻ một chút nhé"
                }
                if(page === "get_involved"){
                    img.src ="../../images/get_involed.jpg"
                    h1.innerText ="Tham Gia"
                    p.innerText = "Hãy giúp một tay"
                }
                if(page === "help"){
                    img.src ="../../images/help.jpg"
                    h1.innerText ="Cách khác để trợ giúp"
                    p.innerText = "Dù bạn ở đâu, bạn cũng có thể đóng góp."

                }
                if(page === "partner"){
                    img.src ="../../images/hoptac.jpeg"
                    h1.innerText ="Cộng sự"
                    p.innerText = "Hãy cộng tác"
                }
                if(page === "recruitmrnt"){
                    img.src ="../../images/recruimrnt.jpeg"
                    h1.innerText ="Việc làm tại Paws"
                    p.innerText = "Gia nhập đội ngũ của chúng tôi"
                }
                if(page === "volunteer"){
                    img.src ="../../images/volum.jpg"
                    h1.innerText ="Tình nguyện viên"
                    p.innerText = "Mang theo tình yêu và ánh sáng"
                }
                if(page === "Adopt"){
                    img.src ="../../images/BE-A-HERO-FOR-AN-ANIMAL-IN-NEED-Banniere-Canva.png"
                    h1.innerText ="Nhận con nuôi"
                    p.innerText = "Đừng mua sắm hãy áp dụng"
                }
                if(page === "Adopt2"){
                    img.src ="../../images/themecat.jpg"
                    h1.innerText ="Nhận nuôi"
                    p.innerText = "Đừng mua sắm"
                }
                if(page === "Adopt3"){
                    img.src ="../../images/themedog.jpg"
                    h1.innerText ="Nhận nuôi"
                    p.innerText = "Đừng mua sắm"
                }
                if(page === "awcat"){
                    img.src ="../../images/awtheme.jpg"
                    h1.innerText ="Sức khoẻ của mèo"
                    p.innerText = "Hướng dẫn chăm sóc mèo"
                }
                if(page === "awdog"){
                    img.src ="../../images/awdog.jpg"
                    h1.innerText ="Sắp ra mắt"
                    p.innerText = "hãy theo dõi trang này"
                }
                if(page === "Sar-lili"){
                    img.src ="../../images/Paws-Tilly.jpeg"
                    h1.innerText ="Anh hùng của Tilly!"
                    p.innerText = "Làm ơn giúp tôi"
                }
                if(page === "Sar-poppy"){
                    img.src ="../../images/poppy.jpg"
                    h1.innerText ="Anh hùng của Poppy!"
                    p.innerText = "Làm ơn giúp tôi"
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