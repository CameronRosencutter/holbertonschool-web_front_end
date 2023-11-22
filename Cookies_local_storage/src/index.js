function setCookies() {
    // Get values from input fields
    let firstname = document.getElementById(`firstname`).value;
    let email = document.getElementById('email').value;

    let date = new Date();
    date.setTime(date.getTime() + (10 * 24 * 60 * 60 * 1000));
    let expireDate = "expires=" + date.toUTCString();

    document.cookie = `firstname=${firstname}; ${expireDate}; path=/`;
    document.cookie = `email=${email}; ${expireDate}; path=/`;
}

function showCookies() {
    const paragraph = document.createElement('p');
  
    const cookieValue = document.cookie;
  
    paragraph.innerHTML = `${cookieValue}`;
  
    document.body.appendChild(paragraph);

    alert ('Cookies Aquired!')
  }

function getCookie () {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        if (cookie.indexOf(name + '=') === 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return '';
}

function showForm() {
    // Remove the welcome message if it exists
    var welcomeMessage = document.getElementById("welcomeMessage");
    if (welcomeMessage) {
      welcomeMessage.remove();
    }
  
    // Show the form
    var form = document.getElementById("myForm");
    if (form) {
      form.style.display = "block"; // Assuming you want to set the display style to "block"
    }
  }

  function hideForm() {
    // Assuming your form has an ID, let's say "myForm"
    var form = document.getElementById('myForm');
  
    // Check if the form exists before attempting to hide it
    if (form) {
      // Set the display style property to "none" to hide the form
      form.style.display = 'none';
    } else {
      console.error('Form not found. Make sure the form ID is correct.');
    }
  }

  function deleteCookiesAndShowForm() {
    // Function to delete cookies
    function deleteCookie(name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    // Remove two cookies (change 'cookie1' and 'cookie2' to your actual cookie names)
    deleteCookie('cookie1');
    deleteCookie('cookie2');

    // Function to show the form (replace with your actual showForm function)
    function showForm() {
        // Implement your showForm logic here
        console.log('Form is now visible.');
        // You may want to display the form by changing its style, for example:
        // document.getElementById('yourFormId').style.display = 'block';
    }

    // Call the showForm function
    showForm();
}

function showWelcomeMessageOrForm() {
    // Check if the user is logged in (You need to implement this part)
    const isLoggedIn = checkIfUserIsLoggedIn();
  
    if (!isLoggedIn) {
      // User is not logged in, show the form
      showForm();
    } else {
      // User is logged in, display the welcome message
      const firstName = getFirstName(); // You need to implement this part
  
      // Create the h1 element
      const welcomeMessage = document.createElement('h1');
      welcomeMessage.textContent = `Welcome ${firstName}`;
  
      // Create the logout link
      const logoutLink = document.createElement('a');
      logoutLink.href = '#'; // You can set the actual logout link here
      logoutLink.textContent = '(logout)';
      logoutLink.style.fontWeight = 'normal';
      logoutLink.style.fontStyle = 'italic';
      logoutLink.style.marginLeft = '10px';
  
      // Add click event listener to the logout link
      logoutLink.addEventListener('click', function () {
        // Call the function to delete cookies and show the form
        deleteCookiesAndShowForm();
  
        // Hide the welcome message and show the form
        welcomeMessage.style.display = 'none';
        showForm();
      });
  
      // Append the logout link to the welcome message
      welcomeMessage.appendChild(logoutLink);
  
      // Replace the body of the page with the welcome message
      document.body.innerHTML = '';
      document.body.appendChild(welcomeMessage);
    }
  }