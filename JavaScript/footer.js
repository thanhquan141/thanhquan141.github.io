//gắn links footer vào các layout khác
const footerContainer = document.querySelector('#footer');
      const footerRequest = new XMLHttpRequest();
      footerRequest.open('GET', '/HTML/footer.html');
      footerRequest.onload = () => {
        footerContainer.innerHTML = footerRequest.responseText;
      };
      footerRequest.send();
//end

// const OpenLinksFooter = document.querySelector('.down_title')
// const LinksFooter = document.querySelector('.list_title')

// OpenLinksFooter.addEventListener('click', function() {
// 	LinksFooter.style.display = 'block';
// });