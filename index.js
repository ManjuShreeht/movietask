function add(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    const expenseAmount = document.getElementById('expenseAmount').value;
    const expenseDescription = document.getElementById('expenseDescription').value;
    const expenseCategory = document.getElementById('expenseCategory').value;
  
    // Create new expense element
    const expenseElement = document.createElement('tr');
    // expenseElement.classList.add('mb-5', 'expense-item');
    expenseElement.innerHTML = `
    <td>${expenseAmount}</td>
    <td>${expenseDescription}</td>
    <td>${expenseCategory}</td>
    <td>
      <button class="btn btn-danger btn-sm delete-btn">Delete</button>
      <button class="btn btn-primary btn-sm edit-btn">Edit</button>
    </td>
    `;
  
    // Append new expense to expenses list
    const expensesList = document.getElementById('expensesList');
    expensesList.appendChild(expenseElement);
  
    // Clear form fields
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseDescription').value = '';
    document.getElementById('expenseCategory').value = 'Category';
  
    // Add event listener to delete button
    const deleteButton = expenseElement.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => deleteExpense(expenseElement));
  
    // Add event listener to edit button
    const editButton = expenseElement.querySelector('.edit-btn');
    editButton.addEventListener('click', () => editExpense(expenseElement));
  }
  
  function deleteExpense(expenseElement) {
    expenseElement.remove();
  }
  function editExpense(expenseElement) {
    const expenseFields = expenseElement.querySelectorAll('td');
    const expenseAmount = expenseFields[0].innerText;
    const expenseDescription = expenseFields[1].innerText;
    const expenseCategory = expenseFields[2].innerText;
  

    // const cells = row.querySelectorAll('td');
    // const expenseAmount = cells[0].innerText;
    // const expenseDescription = cells[1].innerText;
    // const expenseCategory = cells[2].innerText;

    // Set form fields with current expense values
    document.getElementById('expenseAmount').value = expenseAmount;
    document.getElementById('expenseDescription').value = expenseDescription;
    document.getElementById('expenseCategory').value = expenseCategory;
  
    // Remove expense from the list
    expenseElement.remove();
  }
  
  // Event listener for form submission
  //document.getElementById('submitBtn').addEventListener('click', add);
  