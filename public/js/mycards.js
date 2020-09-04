
async function saveCardHandler(event) {
    event.preventDefault();
    first_name = document.querySelector('#profile_first_name').checked;
    console.log(first_name);
    console.log(document.querySelector('#profile_last_name').checked);
    const response = await fetch('/api/cards', {
        method: 'post',
        body: JSON.stringify({
            user_id: 0,
            card_title: 'Test Card',
            font_id: document.querySelector('#perpetua_font'),
            background_id: document.querySelector('#peach_background'),
            icon_id: document.querySelector('#icon-one'),
            show_first_name: document.querySelector('#profile_first_name').checked,
            show_last_name: document.querySelector('#profile_last_name').checked,
            show_nickname: document.querySelector('#profile_nickname').checked,
            show_home_address: document.querySelector('#profile_home_address').checked,
            show_business_name: document.querySelector('#profile_business_name').checked,
            show_business_address: document.querySelector('#profile_business_address').checked,
            show_position: document.querySelector('#profile_position').checked,
            show_personal_phone: false,
            show_business_phone: false,
            show_business_phone_ext: false,
            show_personal_email: false,
            show_business_email: false,
            show_junk_email: false,
            show_business_url: false,
            show_linkedin_url: false,
            show_instagram_url: false,
            show_facebook_url: false,
            show_twitter_url: false,
            show_bio: false,
            show_slogan: true
        }),
        headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
        document.location.replace('/dashboard', {loggedIn: true});
    } else {
        alert(response.statusText);
    }
};

  
document.querySelector('#cardSave').addEventListener('click', saveCardHandler);