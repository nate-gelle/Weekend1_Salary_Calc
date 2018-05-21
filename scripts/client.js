console.log('JS');

$(document).ready(readyNow);

employees = [];

class Employee{
  constructor( firstName, lastName, id, title, salary ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.title = title;
    this.salary = salary;
  }
} // end Employee

function readyNow(){
  console.log('JQ');
  $('#submitButton').on('click', addEmployee);
}

function addEmployee(){
  console.log('in addEmployee');
  // get user input
  // create a new employee
  let newEmployee = new Employee( $('#firstNameIn').val(),  $('#lastNameIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#salaryIn').val());
  console.log( newEmployee );
  // push new employee into array
  employees.push(newEmployee);
  console.log(employees);
  // let employeeData = employees.data();
  // console.log(employeeData);
  // update DOM
  // call function to display array of employees
  displayEmployees();
  // call clear input fields function
  clearFields();
  // call monthly cost calculation function
  monthlyCost();
  // target delete button on click event and call function to remove row
  // $('.removeRowButton').on('click', removeRow);
} // end addEmployee

function displayEmployees(){
  console.log('in displayEmployees');
  // target output element and save in a variable
  let display = $('#tableBody');
  // empty output element
  display.empty();
  // call a function to display headers which is defined later
  displayHeaders();
  // loop through array
  let i = 0;
  for(employee of employees){
  // display table on DOM
    let outputString = '<tr class="removable" id=' + i + '>';
      outputString += '<td>' + employee.firstName + '</td>';
      outputString += '<td>' + employee.lastName + '</td>';
      outputString += '<td>' + employee.id + '</td>';
      outputString += '<td>' + employee.title + '</td>';
      outputString += '<td>' + employee.salary + '</td>';
      outputString += '<td><button id="removeRowButton">Delete</button></td>';
      outputString += '</tr>';
    console.log(outputString);
    i++;
    display.append(outputString)
  }
  $('#removeRowButton').on('click', function(){
    $(this).parents('tr').first().remove();
    console.log('remove row clicked');
  });

}

// define function to display headers
function displayHeaders(){
  let headerDisplay = $('#tableHeader')
  let headerString = '<tr>';
    headerString += '<th>First Name</th>';
    headerString += '<th>Last Name</th>';
    headerString += '<th>ID</th>';
    headerString += '<th>Title</th>';
    headerString += '<th>Salary</th>';
    headerString += '</tr>';
  console.log(headerString);
  headerDisplay.empty();
  headerDisplay.append(headerString);
}

// define function to clear input clearFields
function clearFields(){
  console.log('in clearFields');
  $('#firstNameIn').val('');
  $('#lastNameIn').val('');
  $('#idIn').val('');
  $('#titleIn').val('');
  $('#salaryIn').val('');
}

// define function to get monthly cost from employee.salary(s)
function monthlyCost(){
  let salaryCostSum = 0;
  for (employee of employees){
    salaryCostSum += (employee.salary/12);
  }
  console.log(salaryCostSum);
  // append to DOM
  $('#totalDisplay').empty();
  $('#totalDisplay').append('Total Monthly: $' + (salaryCostSum.toFixed(2)));
  salaryCostSum = parseInt(salaryCostSum);
  // if monthly cost over 20,000, red background
  if ( salaryCostSum >= 20000){
    $('#total').attr("id", "red");
  }
}
