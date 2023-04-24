// banner iphone
var iphoneImages = ["/photos/banner-iphone1.png","/photos/banner-iphone2.png","/photos/banner-iphone3.png" ];
var currentIphoneImageIndex = 0;

function changeIphoneImage() {
  var banner = document.querySelector(".banner_product-iphone img");
  banner.src = iphoneImages[currentIphoneImageIndex];
  currentIphoneImageIndex++;
  if (currentIphoneImageIndex >= iphoneImages.length) {
    currentIphoneImageIndex = 0;
  }
}
setInterval(changeIphoneImage, 2000);

// banner ipad
var ipadImages = ["/photos/banner-ipad1.jpeg","/photos/banner-ipad2.jpeg", ];
var currentIpadImageIndex = 0;

function changeIpadImage() {
  var banner = document.querySelector(".banner_product-ipad img");
  banner.src = ipadImages[currentIpadImageIndex];
  currentIpadImageIndex++;
  if (currentIpadImageIndex >= ipadImages.length) {
    currentIpadImageIndex = 0;
  }
}
setInterval(changeIpadImage, 2000);

// banner mac
var macImages = ["/photos/banner-mac1.jpeg","/photos/banner-mac2.jpeg","/photos/banner-mac3.jpeg" ];
var currentMacImageIndex = 0;

function changeMacImage() {
  var banner = document.querySelector(".banner_product-mac img");
  banner.src = macImages[currentMacImageIndex];
  currentMacImageIndex++;
  if (currentMacImageIndex >= macImages.length) {
    currentMacImageIndex = 0;
  }
}
setInterval(changeMacImage, 2000);


//select_product
// Lắng nghe sự kiện onchange trên phần tử select
document.getElementById("product_sorting").onchange = function() {
  // Lấy giá trị đã chọn
  var sortValue = this.value;

  // Lấy danh sách các sản phẩm
  var productList = document.getElementsByClassName("project_items_body")[0];

  // Chuyển danh sách các sản phẩm thành một mảng
  var productArray = Array.prototype.slice.call(productList.children);

  // Sắp xếp mảng sản phẩm dựa trên giá trị đã chọn
  if (sortValue == "11") {
    // Sắp xếp giá cao đến thấp
    productArray.sort(function(a, b) {
      var aPrice = parseInt(a.querySelector(".price-1").textContent.replace(/\D/g,''));
      var bPrice = parseInt(b.querySelector(".price-1").textContent.replace(/\D/g,''));
      return bPrice - aPrice;
    });
  } else if (sortValue == "5") {
    // Sắp xếp sản phẩm theo tên A-Z
    productArray.sort(function(a, b) {
      var aName = a.querySelector(".project_details-name").textContent;
      var bName = b.querySelector(".project_details-name").textContent;
      return aName.localeCompare(bName);
    });
  } else if (sortValue == "6") {
    // Sắp xếp sản phẩm theo tên Z-A
    productArray.sort(function(a, b) {
      var aName = a.querySelector(".project_details-name").textContent;
      var bName = b.querySelector(".project_details-name").textContent;
      return bName.localeCompare(aName);
    });
  } else if (sortValue == "10") {
    // Sắp xếp giá thấp đến cao
    productArray.sort(function(a, b) {
      var aPrice = parseInt(a.querySelector(".price-1").textContent.replace(/\D/g,''));
      var bPrice = parseInt(b.querySelector(".price-1").textContent.replace(/\D/g,''));
      return aPrice - bPrice;
    });
  }

  // Xóa danh sách sản phẩm hiện tại
  while (productList.firstChild) {
    productList.removeChild(productList.firstChild);
  }

  // Thêm danh sách sản phẩm đã được sắp xếp vào phần tử cha
  for (var i = 0; i < productArray.length; i++) {
    productList.appendChild(productArray[i]);
  }
};
//end


