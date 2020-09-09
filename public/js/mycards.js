
async function saveCardHandler(event) {
    event.preventDefault();
    if (document.querySelector('#light_background').checked) {
        background = 1;
    } else if (document.querySelector('#white_background').checked) {
        background = 2;
    } else if (document.querySelector('#orange_background').checked) {
        background = 3;
    } else {
        background = 4;
    };
    
    if (document.querySelector('#perpetua_font').checked) {
        font = 1;
    } else {
        font = 2;
    };

    if (document.querySelector('#icon-one').checked) {
        icon = 1;
    } else if (document.querySelector('#icon-two').checked) {
        icon = 2;
    } else if (document.querySelector('#icon-three').checked) {
        icon = 3;
    } else if (document.querySelector('#icon-four').checked) {
        icon = 4;
    } else if (document.querySelector('#icon-five').checked) {
        icon = 5;
    } else {
        icon = 6;
    };

    const response = await fetch('/api/cards', {
        method: 'post',
        body: JSON.stringify({
            card_title: document.querySelector('#card_title').value.trim(),
            font_id: font,
            background_id: background,
            icon_id: icon,
            show_first_name: document.querySelector('#profile_first_name').checked,
            show_last_name: document.querySelector('#profile_last_name').checked,
            show_nickname: document.querySelector('#profile_nickname').checked,
            show_home_address: document.querySelector('#profile_home_address').checked,
            show_business_name: document.querySelector('#profile_business_name').checked,
            show_business_address: document.querySelector('#profile_business_address').checked,
            show_position: document.querySelector('#profile_position').checked,
            show_personal_phone: document.querySelector('#profile_personal_phone').checked,
            show_business_phone: document.querySelector('#profile_business_phone').checked,
            show_business_phone_ext: document.querySelector('#profile_business_phone_ext').checked,
            show_personal_email: document.querySelector('#profile_personal_email').checked,
            show_business_email: document.querySelector('#profile_business_email').checked,
            show_junk_email: document.querySelector('#profile_junk_email').checked,
            show_business_url: document.querySelector('#profile_business_url').checked,
            show_linkedin_url: document.querySelector('#profile_linkedin_url').checked,
            show_instagram_url: document.querySelector('#profile_instagram_url').checked,
            show_facebook_url: document.querySelector('#profile_facebook_url').checked,
            show_twitter_url: document.querySelector('#profile_twitter_url').checked,
            show_bio: document.querySelector('#profile_bio').checked,
            show_slogan: document.querySelector('#profile_slogan').checked
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
