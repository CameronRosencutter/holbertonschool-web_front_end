function setCookies () {
    var firstname = document.getElementById('firstname').value;
    var email = document.getElementById('email').value;

    document.cookie = 'firstname=' + encodeURIComponent(firstname);
    document.cookie = 'email=' + encodeURIComponent(email);

      alert('Welcome ' + firstname + ', have some cookies!');
}

function showCookies() {
    const paragraph = document.createElement('p');
  
    const cookieValue = document.cookie;
  
    paragraph.innerHTML = `${cookieValue}`;
  
    document.body.appendChild(paragraph);

    alert ('Cookies Aquired!')
  }