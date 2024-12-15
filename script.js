document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for the 'Contact' link
  document.getElementById('contact-link').addEventListener('click', function() {
    var phoneNumber = document.getElementById('phone-number');
    
    // Toggle the visibility of the phone number
    if (phoneNumber.style.display === 'none' || phoneNumber.style.display === '') {
      phoneNumber.style.display = 'block'; // Show phone number
    } else {
      phoneNumber.style.display = 'none'; // Hide phone number
    }
  });
});
