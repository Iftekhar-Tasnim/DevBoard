//color wheel

const themeButton = document.getElementById("theme-btn");
themeButton.addEventListener("click", function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = randomColor;
});


// page link 

const discoverElement = document.getElementById("Discover");
  if (discoverElement) {
    discoverElement.addEventListener("click", function () {
      window.location.href = "./blog.html";
    });
    discoverElement.style.cursor = "pointer";
  }


// assign btn

const button1 = document.getElementById("complete-button-1");
const button2 = document.getElementById("complete-button-2");
const button3 = document.getElementById("complete-button-3");
const button4 = document.getElementById("complete-button-4");
const button5 = document.getElementById("complete-button-5");
const button6 = document.getElementById("complete-button-6");

//btn calling function
button1.addEventListener("click", function () {
  ButtonClicked(button1, "Integrate OpenAI API");
});

button2.addEventListener("click", function () {
  ButtonClicked(button2, "Add Dark Mode");
});

button3.addEventListener("click", function () {
  ButtonClicked(button3, "Optimize Home Page");
});

button4.addEventListener("click", function () {
  ButtonClicked(button4, "Add New Emoji 🤲");
});

button5.addEventListener("click", function () {
  ButtonClicked(button5, "Improve Job searching");
});

button6.addEventListener("click", function () {
  ButtonClicked(button6, "Fix Mobile Button Issue");
});

//clear history section 
const clearHistoryButton = document.querySelector(
  ".btn.btn-primary.rounded-lg"
);
clearHistoryButton.addEventListener("click", function () {
  const activityLogContainer = document.getElementById(
    "activity-log-container"
  );
  activityLogContainer.innerHTML = "";
});

//btn hidden 
function ButtonClicked(button, taskName) {
  button.disabled = true;
  updateCounter("task-assign-count", -1);
  updateCounter("completed-tasks-count", 1);
  addActivityLog(taskName);

  // Check if all tasks are completed.
  const taskAssignCountElement = document.getElementById("task-assign-count");
  let taskAssignCount = parseInt(taskAssignCountElement.textContent);

  if (taskAssignCount === 0) {
    alert("You have completed all tasks. Keep Rocking!");
  }

  alert("Board updated Successfully");
}

//counter ++
function updateCounter(counterId, change) {
  const counterElement = document.getElementById(counterId);
  let count = parseInt(counterElement.textContent);
  counterElement.textContent = count + change;
}

//update log
function addActivityLog(taskName) {
  const activityLogContainer = document.getElementById(
    "activity-log-container"
  );
  const logEntry = document.createElement("p");
  logEntry.className =
    "text-[16px] poppins h-24 w-auto color-2 text-left content-center px-4 rounded-lg my-5";
  const formattedTime = formatTime(new Date());
  logEntry.textContent = `You have Completed The Task ${taskName} at ${formattedTime}`;
  activityLogContainer.appendChild(logEntry);
}

//realtime function

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

//Dynamic Data in title

setInterval(updateDayAndDate, 1000);

function updateDayAndDate() {
  const now = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDay = daysOfWeek[now.getDay()];
  const currentMonth = months[now.getMonth()];
  const currentDate = now.getDate();
  const currentYear = now.getFullYear();

  const formattedDate = `${currentMonth} ${currentDate} ${currentYear}`;

  const currentDayElement = document.getElementById("Current-day");
  currentDayElement.textContent = `${currentDay},`;

  const currentDateElement = document.getElementById("current-date");
  currentDateElement.textContent = formattedDate;
}