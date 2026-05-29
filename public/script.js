const form = document.getElementById("contactForm");
const successBox = document.getElementById("successBox");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {

    const response = await fetch("/submit-form", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name,
        email,
        message
      })

    });

    const data = await response.json();

    if (data.success) {

      successBox.style.display = "block";

      form.reset();

      setTimeout(() => {
        successBox.style.display = "none";
      }, 3000);

    }

  } catch (error) {

    alert("Something went wrong!");

  }

});