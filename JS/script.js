function newDate() { 
  var d = newDate();
  var date = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value) - 1;
  var year = parseInt(document.getElementById("year").value);


  if (date <= 0 || date > 31) {
      document.getElementsByClassName("dayerror").innerHtml = "Enter valid date";
      return false;
  } else if (date === "") {
      document.getElementsByClassName("dayerror").innerHtml = "This field cannot be empty";
      return false;
  } else {
      d.setDate(date);
  }
  if (month <= 0 || month > 12) {
      document.getElementsByClassName("montherror").innerHtml = "Enter valid month";
      return false;
  } else if (month === "") {
      document.getElementsByClassName("montherror").innerHtml = "This field cannot be empty";
      return false;
  } else {
      d.setMonth(month);
  }
  if (year <= 0) {
      document.getElementsByClassName("yearerror").innerHtml = "Enter valid year";
      return false;
  } else if (year === "") {
      document.getElementsByClassName("yearerror").innerHtml = "This field cannot be empty";
      return false;
  } else {
      d.setYear(year);
  }
 
function getAkan(male,female) {
  var isMale = document.getElementById('male').checked;
  var isFemale = document.getElementById('female').checked;
  var yearNumber= year%100;
  var centuryNumber= parseInt(year/100);
  var male = ["Kwasi", " Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let result = parseInt((date + ((13*(month +1))/5) + yearNumber + (yearNumber/4) + (5*centuryNumber))%7);

  if (isMale === true && isFemale === false) {
      if (result === 0) {
        alert("Your name is " + male[0]);
      } else if (result === 1) {
          alert("Your name is " + male[1]);
      } else if (result === 2) {
          alert("Your name is " + male[2]);
      } else if (result === 3) {
          alert("Your name is " + male[3]);
      } else if (result === 4) {
          alert("Your name is " + male[4]);
      } else if (result === 5) {
          alert("Your name is " + male[5]);
      } else if (result === 6) {
          alert("Your name is " + male[6]);
      

  } else if (ismale === false && isfemale === true) {
      if (result = 0) {
          // return male[0];
          alert("Your name is " + female[0]);
      } else if (result === 1) {
          alert("Your name is " + female[1]);
      } else if (result === 2) {
          alert("Your name is " + female[2]);
      } else if (result === 3) {
          alert("Your name is " + female[3]);
      } else if (result === 4) {
          alert("Your name is " + female[4]);
      } else if (result === 5) {
          alert("Your name is " + female[5]);
      } else if (result === 6) {
          alert("Your name is " + female[6]);
      } 
  }
}
