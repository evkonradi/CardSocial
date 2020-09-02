async function connectHandler(event) {
    event.preventDefault();
  
    const card_code = document.querySelector('#connection-id').value.trim();
    document.location.replace('/card/'+ card_code);
}
  
document.querySelector('#connect').addEventListener('click', connectHandler);