document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let schoolName = document.getElementById('schoolName').value;
  let repName = document.getElementById('repName').value;
  let email = document.getElementById('email').value;

  alert("Welcome " + repName + " from " + schoolName + "! Your institution is now part of NARES.");

  window.location.href = "index.html";
});