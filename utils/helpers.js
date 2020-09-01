module.exports = {
    format_phone: phone => {

        if (!phone)
            return '';

        let formatted_phone = phone.substring(0,3).toString() + '-' + phone.substring(3,6).toString() + '-' + phone.substring(6,10).toString();
        return formatted_phone;
    }
  }