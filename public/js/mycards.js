async function saveCardHandler(event) {
    event.preventDefault();

    const response = await fetch('/api/cards', {
        method: 'post',
        body: JSON.stringify({
            card_title: 'Test Card',
            font_id: document.querySelector('#perpetua font'),
            background_id: document.querySelector('#peach background'),
            icon_id: document.querySelector('#icon-one'),
            show_first_name: document.querySelector('#profile.first.name').checked = true,
            show_last_name: document.querySelector('#profile.last.name').checked = true,
            show_nickname: document.querySelector('#profile.nickname').checked = true,
            show_home_address: document.querySelector('#profile.home_address').checked = true,
            show_business_name: document.querySelector('#profile.business_name').checked = true,
            show_business_address: document.querySelector('#profile.business_address').checked = true,
            show_position: document.querySelector('#profile.position').checked = true,
            show_personal_phone: document.querySelector('#profile.personal_phone').checked = true,
            show_business_phone: document.querySelector('#profile.business_phone').checked = true,
            show_business_phone_ext: document.querySelector('#profile.business_phone_ext').checked = true,
            show_personal_email: document.querySelector('#profile.personal_email').checked = true,
            show_business_email: document.querySelector('#profile.business_email').checked = true,
            show_junk_email: document.querySelector('#profile.junk_email').checked = true,
            show_business_url: document.querySelector('#profile.business_url').checked = true,
            show_linkedin_url: document.querySelector('#profile.linkedin_url').checked = true,
            show_instagram_url: document.querySelector('#profile.instagram_url').checked = true,
            show_facebook_url: document.querySelector('#profile.facebook_url').checked = true,
            show_twitter_url: document.querySelector('#profile.twitter_url').checked = true,
            show_bio: document.querySelector('#profile.bio').checked = true,
            show_slogan: document.querySelector('#profile.slogan').checked = true
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