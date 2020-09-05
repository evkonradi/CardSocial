function setSuccessFor(inputName) {
  const small = document.getElementById(inputName+"-error");
  small.className = "small-hidden";
	 small.innerText = "";
}

function setErrorFor(inputName, message) {
  const small = document.getElementById(inputName+"-error");
  small.className = "small-visible";
	small.innerText = message;
}
