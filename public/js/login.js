async function signupHandler(event) {
    event.preventDefault();
  
    const first_name = document.querySelector('#firstname-signup').value.trim();
    const last_name = document.querySelector('#lastname-signup').value.trim();
    const personal_email = document.querySelector('#email-signup').value.trim();
    const pwd = document.querySelector('#password-signup').value.trim();
  
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
  
document.querySelector('#btnRegister').addEventListener('click', signupHandler);
document.querySelector('#btnLogin').addEventListener('click', loginHandler);