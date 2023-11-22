function setCookies () {
    var firstname = document.getElementById('firstname').value;
    var email = document.getElementById('email').value;

    document.cookie = 'firstname=' + encodeURIComponent(firstname);
    document.cookie = 'email=' + encodeURIComponent(email);

      alert('Welcome ' + firstname + ', have some cookies!');
}