function changeuser() {
  var userhtml = document.getElementById("chang-user").textContent;
  let userinput = document.getElementById("user-value").value;
  document.getElementById("chang-user").innerHTML = userinput;
  document.getElementById("user-value").value = userhtml;

  var usdhtml = document.getElementById("USD").textContent;
  let usdinput = document.getElementById("USD-hidden").value;
  document.getElementById("USD").innerHTML = usdinput;
  document.getElementById("USD-hidden").value = usdhtml;

  let lsthtml = document.getElementsByClassName("logged-user-role");
  let lstinputhidden = document.getElementsByClassName("logged-hidden");
  let msthtml = lsthtml[0].textContent;
  let mstinpur = lstinputhidden[0].value;
  for (i = 0; i < lsthtml.length; i++) {
    lsthtml[i].innerHTML = mstinpur;
  }
  for (i = 0; i < lstinputhidden.length; i++) {
    lstinputhidden[i].value = msthtml;
  }

  let eye = document.getElementById("eye_click1");
  let eyecustom = "fa-eye";
  if (eye.classList[1] == "fa-eye") {
    eyecustom = "fa-eye-slash";
  }
  eye.classList.remove(eye.classList[1]);
  eye.classList.add(eyecustom);
}

function changeuser1() {
  var userhtml = document.getElementById("chang-user1").textContent;
  let userinput = document.getElementById("user-value1").value;
  document.getElementById("chang-user1").innerHTML = userinput;
  document.getElementById("user-value1").value = userhtml;

  var usdhtml = document.getElementById("USD").textContent;
  let usdinput = document.getElementById("USD-hidden").value;
  document.getElementById("USD").innerHTML = usdinput;
  document.getElementById("USD-hidden").value = usdhtml;

  let lsthtml = document.getElementsByClassName("logged-user-role");
  let lstinputhidden = document.getElementsByClassName("logged-hidden");
  let msthtml = lsthtml[0].textContent;
  let mstinpur = lstinputhidden[0].value;
  for (i = 0; i < lsthtml.length; i++) {
    lsthtml[i].innerHTML = mstinpur;
  }
  for (i = 0; i < lstinputhidden.length; i++) {
    lstinputhidden[i].value = msthtml;
  }

  let eye = document.getElementById("eye_click");
  let eyecustom = "fa-eye";
  if (eye.classList[1] == "fa-eye") {
    eyecustom = "fa-eye-slash";
  }
  eye.classList.remove(eye.classList[1]);
  eye.classList.add(eyecustom);
  console.log(eye.classList);
}

