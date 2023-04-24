//open-close menu mobile tablet
const openBTN = document.querySelector('.bx-menu');
const menu = document.querySelector('.menu2_tabphone');
const closeBTN =document.querySelector('.bx-x')
const openSearch = document.querySelector('.bx-search-alt');
const formSearch = document.querySelector('.search');
const closeSearch = document.querySelector('.container_input');
const searchInput = document.querySelector('.input-form-ip');


openBTN.addEventListener('click', function() {
	menu.style.display = 'block';
	openBTN.style.display = 'none';
    closeBTN.style.display='block';
});

closeBTN.addEventListener('click', function(){
    menu.style.display = 'none';
    openBTN.style.display= 'block';
    closeBTN.style.display='none';
});

openSearch.addEventListener('click', function(){
    formSearch.style.display='block';
});

closeSearch.addEventListener('click', function(){
    formSearch.style.display='none';
});

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const searchTerm = searchInput.value;
      window.location.href = '/HTML/main_layout.html';
    }
  });
//end


//banner list
var images = ["/photos/banner1.png", "/photos/banner2.png", "/photos/banner3.png", "/photos/banner4.png", "/photos/banner5.png" ,"/photos/banner6.png"];
var currentImageIndex = 0;

function changeImage() {
  var banner = document.getElementsByClassName("background-header-img")[0];
  banner.src = images[currentImageIndex];
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
}
setInterval(changeImage, 2000);
//end

//login
var loginForm = document.getElementById("login-form");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(event) {
    
    event.preventDefault(); // ngăn form submit mặc định của trình duyệt

    var username = usernameInput.value;
    var password = passwordInput.value;

    // Kiểm tra tính hợp lệ của dữ liệu đăng nhập (bỏ qua phần này nếu không cần)
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
      return;
    }

    // Chuyển hướng trang
    window.location.href = "/HTML/main_layout.html";
  });
//end
