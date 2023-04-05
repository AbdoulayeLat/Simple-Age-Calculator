const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

function checkValidity() {
  let result = true;
  const day = document.getElementById("day-input");
  const month = document.getElementById("month-input");
  const year = document.getElementById("year-input");

  const day_title = document.getElementById("day-title");
  const month_title = document.getElementById("month-title");
  const year_title = document.getElementById("year-title");

  const day_error = document.getElementById("day-error");
  const month_error = document.getElementById("month-error");
  const year_error = document.getElementById("year-error");

  let present_year = new Date().getFullYear();
  let present_month = new Date().getMonth();
  let present_day = new Date().getDay();
  console.log(day.value);
  if (day.value === "") {
    day.style.borderColor = "hsl(0, 100%, 67%)";
    day_title.style.color = "hsl(0, 100%, 67%)";
    if ((day_error.style.display = "block")) {
      day_error.style.display = "none";
    }
    document.getElementById("day-empty-error").style.display = "block";
    result = false;
  }
  if (month.value === "") {
    month.style.borderColor = "hsl(0, 100%, 67%)";
    month_title.style.color = "hsl(0, 100%, 67%)";
    if ((month_error.style.display = "block")) {
      month_error.style.display = "none";
    }
    document.getElementById("month-empty-error").style.display = "block";
    result = false;
  }
  if (year.value === "") {
    year.style.borderColor = "hsl(0, 100%, 67%)";
    year_title.style.color = "hsl(0, 100%, 67%)";
    if ((year_error.style.display = "block")) {
      year_error.style.display = "none";
    }
    document.getElementById("year-empty-error").style.display = "block";
    result = false;
  }
  if (
    0 >= parseInt(day.value) ||
    parseInt(day.value) > 31 ||
    parseInt(day.value) >
      getDays(parseInt(present_year.value), parseInt(month.value))
  ) {
    day.style.borderColor = "hsl(0, 100%, 67%)";
    day_title.style.color = "hsl(0, 100%, 67%)";
    if ((document.getElementById("day-empty-error").style.display = "block")) {
      document.getElementById("day-empty-error").style.display = "none";
    }
    day_error.style.display = "block";
    result = false;
  }
  if (0 >= parseInt(month.value) || parseInt(month.value) > 12) {
    month.style.borderColor = "hsl(0, 100%, 67%)";
    month_title.style.color = "hsl(0, 100%, 67%)";
    if (
      (document.getElementById("month-empty-error").style.display = "block")
    ) {
      document.getElementById("month-empty-error").style.display = "none";
    }
    month_error.style.display = "block";
    result = false;
  }
  if (parseInt(year.value) > present_year) {
    year.style.borderColor = "hsl(0, 100%, 67%)";
    year_title.style.color = "hsl(0, 100%, 67%)";
    if ((document.getElementById("year-empty-error").style.display = "block")) {
      document.getElementById("year-empty-error").style.display = "none";
    }
    year_error.style.display = "block";
    result = false;
  }
  return result;
}

function calculateAge() {
  const day = document.getElementById("day-input");
  const month = document.getElementById("month-input");
  const year = document.getElementById("year-input");
  let present_year = new Date().getFullYear();
  let present_month = new Date().getMonth() + 1;
  let present_day = new Date().getDate();

  if (present_day < day.value) {
    present_day = present_day + (getDays(present_year, month.value) - 1);
    present_month -= 1;
  }

  if (month.value > present_month) {
    present_year -= 1;
    present_month += 12;
  }

  const result_year = present_year - year.value;
  const result_month = present_month - month.value;
  const result_day = present_day - day.value;

  if (checkValidity()) {
    document.getElementById("years-result").innerText = result_year;
    document.getElementById("months-result").innerText = result_month;
    document.getElementById("days-result").innerText = result_day;
  }
}

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    calculateAge();
  }
});
