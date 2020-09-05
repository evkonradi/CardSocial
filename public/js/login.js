async function signupHandler(event) {
    event.preventDefault();
  
    const first_name = document.querySelector('#firstname-signup').value.trim();
    const last_name = document.querySelector('#lastname-signup').value.trim();
    const personal_email = document.querySelector('#email-signup').value.trim();
    const pwd = document.querySelector('#password-signup').value.trim();

    SetAllFieldsForSuccess();

    if(first_name === '') 
      setErrorFor("firstname-signup", 'First Name cannot be blank!');

    if(last_name === '') 
      setErrorFor("lastname-signup", 'Last Name cannot be blank!');

    if(personal_email === '') 
      setErrorFor("email-signup", 'Email cannot be blank!');

    if(pwd.length < 6) 
      setErrorFor("password-signup", 'Password should be at least 6 characters!');
  
    if (first_name && last_name && personal_email && pwd) {
      const response = await fetch('/api/users/signup', {
        method: 'post',
        body: JSON.stringify({
          first_name,
          last_name,
          personal_email,
          pwd
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        document.location.replace('/dashboard', {loggedIn: true});
      } else {
        alert(response.statusText);
      }
    }
}

async function loginHandler(event) {
  event.preventDefault();

  const personal_email = document.querySelector('#email-login').value.trim();
  const pwd = document.querySelector('#password-login').value.trim();

  SetAllFieldsForSuccess();

  if(personal_email === '') 
    setErrorFor("email-login", 'Email cannot be blank!');

  if(pwd.length === 0) 
    setErrorFor("password-login", 'Password cannot be blank!');

  if (personal_email && pwd) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        personal_email,
        pwd
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard', {loggedIn: true});
    } else {
      alert(response.statusText);
    }
  }
}

function SetAllFieldsForSuccess(){
  setSuccessFor("email-login");
  setSuccessFor("password-login");
  setSuccessFor("firstname-signup");
  setSuccessFor("lastname-signup");
  setSuccessFor("email-signup");
  setSuccessFor("password-signup");
}

document.querySelector('#btnRegister').addEventListener('click', signupHandler);
document.querySelector('#btnLogin').addEventListener('click', loginHandler);