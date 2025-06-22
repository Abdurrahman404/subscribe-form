const scriptURL = "https://script.google.com/macros/s/AKfycbwGOKlEyr8mqX-MzkVzSJxjAMzlNMZRkQf79KqIoC4uzdpMSaNYz76-gUOzSYWCh7pz/exec";
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("a");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "✅ Thank you for subscribing!";
      form.reset();
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
    })
    .catch(error => {
      console.error('Error!', error.message);
      msg.innerHTML = "❌ Submission failed. Please try again.";
    });
});
