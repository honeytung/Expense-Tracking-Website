// REQUIRES: Function need to be called in the list
// MODIFIES: The expense-list
// EFFECTS: Deletes an expense from the expense list
function deleteExpense(currentNode) {
    // Get the parent node to remove entire section
    var nodeRemove = currentNode.parentNode.parentNode;

    nodeRemove.remove();
}

// REQUIRES: None
// MODIFIES: The expense-list
// EFFECTS: Adds a new expense to the expense list
function addExpense(currentNode) {
    // Get alert field id to display alerts
    var alertName = document.getElementById("expense-form-alert-name");
    var alertAmount = document.getElementById("expense-form-alert-amount");

    // Get all the input fields from the form
    var expenseName = document.getElementById("expense-form-name").value;
    var expenseCategory = document.getElementById("expense-form-category").value;
    var expenseAmount = Number(document.getElementById("expense-form-amount").value);
    var expenseDescription = document.getElementById("expense-form-description").value;

    // Get the expense list to add new expense
    var expenseList = document.getElementById("expense-list");

    alertName.innerHTML = "";
    alertAmount.innerHTML = "";

    // Check if user enters the name and the amount is valid
    // Display warning and return if invalid
    if (expenseName == "" && Number.isNaN(expenseAmount)) {
        alertName.innerHTML = "Name is required";
        alertAmount.innerHTML = "Amount is invalid";
        return;
    }
    else if (expenseName == "") {
        alertName.innerHTML = "Name is required";
        return;
    }
    else if (Number.isNaN(expenseAmount)) {
        alertAmount.innerHTML = "Amount is invalid";
        return;
    }

    // Converts amount to 2 decimal places and string
    var amount = expenseAmount.toFixed(2);

    // Prints out the elements that we need to add to expense list
    console.log("Expense Name: " + expenseName);
    console.log("Expense Category: " + expenseCategory);
    console.log("Expense Amount: " + expenseAmount);
    console.log("Expense Description: " + expenseDescription);

    // Constructs an article and store all information inside
    var addElement = `
    <article class="media">
        <div class="media-content">
            <p>
                <strong id="expense-name">${expenseName}</strong> <small id="expense-category">${expenseCategory}</small>
            <br>
            <p id="expense-description">${expenseDescription}</p>
        </p>
        </div>
        <div class="media-right">
            <strong id="expense-amount">$${amount}</strong>
        </div>
        <div class="media-right">
            <button class="delete" id="button-delete" onclick="deleteExpense(this)"></button>
        </div>
    </article>
    `;

    // Adds the article to the expense list
    expenseList.innerHTML += addElement;
}