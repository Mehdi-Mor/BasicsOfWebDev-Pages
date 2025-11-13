// index.js
// Author: Mehdi Tahari
// Date: 2025-11-04

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addCourseForm");
  const tableBody = document.getElementById("timetable").querySelector("tbody");
  const timestampField = document.getElementById("timestamp");

  const nameInput = document.getElementById("courseName");
  const nameError = document.getElementById("nameError");

  nameInput.addEventListener("invalid", () => {
    nameError.classList.remove("hidden");
  });

  nameInput.addEventListener("input", () => {
    nameError.classList.add("hidden");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    timestampField.value = new Date().toISOString();

    const name = document.getElementById("courseName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = form.querySelector('input[name="phone"]').value.trim();
    const birthdate = form.querySelector('input[name="birthdate"]').value;
    const accepted = form.querySelector('input[name="day"]').checked ? "✅" : "❌";
    const timestamp = timestampField.value;

    if (!name || !email || !phone || !birthdate) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create new row
    const row = document.createElement("tr");

    [name, email, phone, birthdate, accepted, timestamp].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    tableBody.appendChild(row);

    // Reset form
    form.reset();
  });
});
