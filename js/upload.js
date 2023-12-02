// script2.js

const query = (obj) =>
  Object.keys(obj)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
    .join("&");

const colorThemes = document.querySelectorAll('[name="theme"]');
const markdown = window.markdownit();
const message_box = document.getElementById(`messages`);
const message_input = document.getElementById(`message-input`);
const box_conversations = document.querySelector(`.top`);
const spinner = box_conversations.querySelector(".spinner");
const stop_generating = document.querySelector(`.stop_generating`);
const send_button = document.querySelector(`#send-button`);
const pdfInput = document.querySelector("#pdf-input"); // File input for PDF upload

// ... (The rest of your existing JavaScript code above) ...

// Updated functionality for "Upload PDF's" button
uploadPDFButton.addEventListener("click", () => {
  pdfInput.click();
});

pdfInput.addEventListener("change", async (event) => {
  const selectedPDF = event.target.files[0];

  if (selectedPDF) {
    try {
      const formData = new FormData();
      formData.append("pdf", selectedPDF);

      // Make a POST request to upload the PDF to the server
      const response = await fetch("/upload-pdf-endpoint", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("PDF uploaded successfully.");
        // You can perform further actions here after successful upload
      } else {
        console.error("Error uploading PDF.");
        // Handle error case
      }
    } catch (error) {
      console.error("An error occurred while uploading the PDF:", error);
    }
  }
});

// ... (The rest of your existing JavaScript code below) ...
