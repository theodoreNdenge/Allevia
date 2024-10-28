document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".category-button");
  const courseItems = document.querySelectorAll(".course-item");
  const coursesContainer = document.querySelector(".courses-list");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // Clear the container
      coursesContainer.innerHTML = "";

      // Add items back to container based on filter
      courseItems.forEach((item) => {
        if (
          category === "all" ||
          item.getAttribute("data-category") === category
        ) {
          coursesContainer.appendChild(item);
          item.style.display = "flex";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  const courseItems = document.querySelectorAll(".course-item");
  const coursesContainer = document.querySelector(".courses-list");

  searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value.toLowerCase();
    coursesContainer.innerHTML = "";

    courseItems.forEach((item) => {
      const courseTitle = item
        .querySelector(".course-title")
        .innerText.toLowerCase();
      if (courseTitle.includes(searchTerm)) {
        item.style.display = "flex";
        coursesContainer.appendChild(item);
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Handle continue button click
document.querySelectorAll(".continue-button").forEach((button) => {
  button.addEventListener("click", function () {
    const course = button.closest(".lesson-section").dataset.course;
    document.querySelector(
      `.lesson-section[data-course="${course}"]`
    ).style.display = "none";
    document.querySelector(
      `.quiz-section[data-course="${course}"]`
    ).style.display = "block";
  });
});

// Handle check button click
document.querySelectorAll(".check-button").forEach((button) => {
  button.addEventListener("click", function () {
    const course = button.closest(".quiz-section").dataset.course;
    const selectedOption = document.querySelector(
      `input[name="${course}-quiz"]:checked`
    );
    const feedback = button.nextElementSibling;

    if (selectedOption) {
      if (
        (course === "cpr" && selectedOption.value === "option2") ||
        (course === "basic-first-aid" && selectedOption.value === "option2")
      ) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        button.nextElementSibling.nextElementSibling.style.display = "block";
      } else {
        feedback.textContent = "Incorrect. Please try again.";
        feedback.style.color = "red";
      }
    } else {
      feedback.textContent = "Please select an answer.";
      feedback.style.color = "red";
    }
  });
});

// Handle next lesson button click
document.querySelectorAll(".next-lesson-button").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Next lesson logic here!");
  });
});
