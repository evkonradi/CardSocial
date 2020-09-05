
async function deleteCardHandler(event) {
    event.preventDefault();
    console.log("A delete button was pressed.")
    // const response = await fetch('/api/cards', {
    //     method: 'delete',
    // })
}



document.querySelector('#cardDelete').addEventListener('click', deleteCardHandler);