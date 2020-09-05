$('#businessPhone').keyup(function(){
    $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'$1-$2-$3'))
});

$('#personalPhone').keyup(function(){
    $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'$1-$2-$3'))
});

var formatPhoneForSave = function(phone) {
    if (!phone)
    return '';

    console.log(phone);
    const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    let formatted_phone = phone.split('').filter(num => numbers.indexOf(num)>=0).join('').toString();

    return formatted_phone;
};

async function saveProfileHandler(event) {
    event.preventDefault();
  
    let personalPhone = formatPhoneForSave(document.querySelector('#personalPhone').value.trim());
    
    let businessPhone = formatPhoneForSave(document.querySelector('#businessPhone').value.trim());
    let personalEmail = document.querySelector('#personalEmail').value.trim();
    let businessEmail = document.querySelector('#businessEmail').value.trim();
    let junkEmail = document.querySelector('#junkEmail').value.trim();
    let businessWebsite = document.querySelector('#businessWebsite').value.trim();
    let linkedinUrl = document.querySelector('#linkedinUrl').value.trim();
    let instagramUrl = document.querySelector('#instagramUrl').value.trim();
    let facebookUrl = document.querySelector('#facebookUrl').value.trim();
    let twitterUrl = document.querySelector('#twitterUrl').value.trim();

    const response = await fetch('/api/users/user', {
        method: 'put',
        body: JSON.stringify({
          first_name: document.querySelector('#firstName').value.trim(),
          last_name: document.querySelector('#lastName').value.trim(),
          nickname: document.querySelector('#nickname').value.trim(),
          home_address: document.querySelector('#homeAddress').value.trim(),
          business_name: document.querySelector('#businessName').value.trim(),
          business_address: document.querySelector('#businessAddress').value.trim(),
          position: document.querySelector('#position').value.trim(),
          personal_phone: (personalPhone ? personalPhone : null),
          business_phone: (businessPhone ? businessPhone : null),
          business_phone_ext: document.querySelector('#businessPhoneExt').value.trim(),
          personal_email: (personalEmail ? personalEmail : null),
          business_email: (businessEmail ? businessEmail : null),
          junk_email: (junkEmail ? junkEmail : null),
          business_url: (businessWebsite ? businessWebsite : null),
          linkedin_url: (linkedinUrl ? linkedinUrl : null),
          instagram_url: (instagramUrl ? instagramUrl : null),
          facebook_url: (facebookUrl ? facebookUrl : null),
          twitter_url: (twitterUrl ? twitterUrl : null),
          bio: document.querySelector('#bio').value.trim(),
          slogan: document.querySelector('#slogan').value.trim()
        }),
        headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
        document.location.replace('/dashboard', {loggedIn: true});
    } else {
        alert(response.statusText);
    }
};

var viewMyCardHandler = function(event){
    var targetEl = event.target;

    if (targetEl.hasAttribute("data-qr-card-code")){
        //clicked on the QR button
        var cardCode = event.target.getAttribute("data-qr-card-code");
        var background_name = event.target.getAttribute("data-bg");
        document.location.replace('/qr-code/'+ cardCode + '/' + background_name);
    }
    else{
        //clicked on the card itself
        var closestEl = targetEl.closest("#cardCodeDiv");

        if (closestEl){
            if (closestEl.hasAttribute("data-card-code")) {
                var cardCode = closestEl.getAttribute("data-card-code");
                document.location.replace('/card/'+ cardCode);
            } 
        }
    }

};

document.querySelector('#profileSave').addEventListener('click', saveProfileHandler);
document.querySelector('#profileSave').addEventListener('click', saveProfileHandler);
document.querySelector('#mycards-list').addEventListener("click", viewMyCardHandler);



