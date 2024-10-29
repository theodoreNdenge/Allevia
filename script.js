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

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCourse = urlParams.get('course');

    console.log("Selected course:", selectedCourse); // Debugging log

    // Hide all courses initially
    document.querySelectorAll('.lesson-section, .quiz-section, .congratulations-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected course lesson section initially
    document.querySelectorAll(`.lesson-section[data-course="${selectedCourse}"]`).forEach(section => {
        section.style.display = 'block';
    });

    // Handle continue button click
    const continueButtons = document.querySelectorAll('.continue-button');
    if (continueButtons.length > 0) {
        continueButtons.forEach(button => {
            button.addEventListener('click', function () {
                const course = button.closest('.lesson-section').dataset.course;
                console.log("Continuing course:", course); // Debugging log
                const lessonSection = document.querySelector(`.lesson-section[data-course="${course}"]`);
                const quizSection = document.querySelector(`.quiz-section[data-course="${course}"]`);
                if (lessonSection && quizSection) {
                    lessonSection.style.display = 'none';
                    quizSection.style.display = 'block';
                }
            });
        });
    } else {
        console.log('No continue buttons found');
    }

    // Correct answers dictionary
    const correctAnswers = {
        'cpr': 'option2',
        'basic-first-aid': 'option2',
        'cpr-lesson2': 'option1'
    };

    // Handle check button click
    const checkButtons = document.querySelectorAll('.check-button');
    if (checkButtons.length > 0) {
        checkButtons.forEach(button => {
            button.addEventListener('click', function () {
                const course = button.closest('.quiz-section').dataset.course;
                const selectedOption = document.querySelector(`input[name="${course}-quiz"]:checked`);
                const feedback = button.nextElementSibling;

                console.log("Selected course in check:", course); // Debugging log
                console.log("Selected option:", selectedOption ? selectedOption.value : "None"); // Debugging log

                if (selectedOption) {
                    if (selectedOption.value === correctAnswers[course]) {
                        feedback.textContent = 'Correct!';
                        feedback.style.color = 'green';
                        button.nextElementSibling.nextElementSibling.style.display = 'block';

                        // Add logic to move to the next lesson or show the congratulations message
                        button.nextElementSibling.nextElementSibling.addEventListener('click', function () {
                            if (course === 'cpr-lesson2' || course === 'basic-first-aid') {
                                document.querySelector(`.quiz-section[data-course="${course}"]`).style.display = 'none';
                                document.querySelector('.congratulations-section').style.display = 'block';
                            } else {
                                const nextCourse = `cpr-lesson2`;
                                document.querySelector(`.quiz-section[data-course="${course}"]`).style.display = 'none';
                                document.querySelector(`.lesson-section[data-course="${nextCourse}"]`).style.display = 'block';
                            }
                        });
                    } else {
                        feedback.textContent = 'Incorrect. Please try again.';
                        feedback.style.color = 'red';
                    }
                } else {
                    feedback.textContent = 'Please select an answer.';
                    feedback.style.color = 'red';
                }
            });
        });
    } else {
        console.log('No check buttons found');
    }

    // Handle finish course button click
    const finishCourseButton = document.querySelector('.finish-course-button');
    if (finishCourseButton) {
        finishCourseButton.addEventListener('click', function () {
            window.location.href = 'courses.html'; // Change 'courses.html' to the actual URL of your courses page
        });
    }

    // Handle previous button click
    const previousButtons = document.querySelectorAll('.previous-button');
    if (previousButtons.length > 0) {
        previousButtons.forEach(button => {
            button.addEventListener('click', function () {
                window.location.href = 'courses.html'; // Change 'courses.html' to the actual URL of your courses page
            });
        });
    } else {
        console.log('No previous buttons found');
    }
});
