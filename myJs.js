let lastEntry = 0;

function submitFunc() {
  lastEntry++;
  let firstNameStr = document.myForm.firstName.value;
  let lastNameStr = document.myForm.lastName.value;
  let emailStr = document.myForm.email.value;
  let numberStr = document.myForm.number.value;
  let englishStr = document.myForm.eng.value;
  //-------------------
  let flag = true;

  //first name validation
  if (firstNameStr == "" || !isNaN(firstNameStr)) {
    flag = false;
    document.getElementById('nameO').innerHTML = "لطفا نام خود را وارد کنید";
  } else {
    document.getElementById('nameO').innerHTML = "";
  }
  //last name validtion
  if (lastNameStr == "" || !isNaN(lastNameStr)) {
    flag = false;
    document.getElementById('lastNameO').innerHTML = "لطفا نام خانوادگی خود را وارد کنید";
  } else {
    document.getElementById('lastNameO').innerHTML = "";
  }
  //email validation
  if (emailStr == "" || !isNaN(emailStr)) {
    flag = false;
    document.getElementById('emailO').innerHTML = "لطفا پست الکترونیک خود را وارد کنید";
  } else {
    document.getElementById('emailO').innerHTML = "";
  }
  //number validation
  if (numberStr == "" || !isNaN(numberStr) && numberStr.length < 8) {
    flag = false;
    document.getElementById('numberO').innerHTML = "لطفا تلفن خود را وارد کنید";
  } else {
    document.getElementById('numberO').innerHTML = "";
  }
  //english state validation
  if (englishStr == "انتخاب کنید") {
    flag = false;
    document.getElementById('stateO').innerHTML = "لطفا یک گزینه را انتخاب کنید";
  } else {
    document.getElementById('stateO').innerHTML = "";
  }
  //------------
  /*if (langChecked) {
    flag = false;
    document.getElementById('langO').innerHTML = "لطفا یک گزینه را انتخاب کنید";
  } else {
    document.getElementById('langO').innerHTML = "";
  }*/
  //-------------------
  if (flag = true) {
    const checkedLanguagesElements = document.querySelectorAll(".language-checkbox:checked");
    let checkedLanguagesTobeShown = '';
    if (checkedLanguagesElements && checkedLanguagesElements.length > 0) {
      checkedLanguagesElements.forEach(function (item) {
        checkedLanguagesTobeShown = checkedLanguagesTobeShown + ',' + item.value;
      });
    }


    let newRecord = "<th scope='row'>" + lastEntry +
      "</th><td>" + firstNameStr +
      "</td><td>" + lastNameStr +
      "</td><td>" + emailStr +
      "</td><td>" + numberStr +
      "</td><td>" + englishStr +
      "</td><td>" + checkedLanguagesTobeShown + "</td>";

    let newcontent = document.createElement('tr');

    newcontent.innerHTML = newRecord;
    let tableBody = document.getElementById('records');
    tableBody.appendChild(newcontent);

  }
}

//------------------------------------