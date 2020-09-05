var editCardHandler = function(event) {
    var targetEl = event.target;
    if (targetEl.hasAttribute("data-delete-card-code")) {
    console.log("A delete button was pressed.");
    // const response = await fetch('/api/cards', {
    //     method: 'delete',
    // })
    } else if (targetEl.hasAttribute("data-edit-card-code")) {
        console.log("An edit button was pressed.");
    }
};



document.querySelector('#mycards-list').addEventListener("click", editCardHandler);