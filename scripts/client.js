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
  // update DOM
  displayEmployees();
  monthlyCost();
} // end addEmployee

function displayEmployees(){
  console.log('in displayEmployees');
  // target output element and save in a variable
  let display = $('#employeesOut');
  // empty output element
  display.empty();
  // call a function to display headers which is defined later
  displayHeaders();
  // loop through array
  let i = 0;
  for(employee of employees){
  // display table on DOM
    i++;
    let outputString = '<tr class="removable" id= row' + i + '>';
      outputString += '<td>' + employee.firstName + '</td>';
      outputString += '<td>' + employee.lastName + '</td>';
      outputString += '<td>' + employee.id + '</td>';
      outputString += '<td>' + employee.title + '</td>';
      outputString += '<td>' + employee.salary + '</td>';
      outputString += '<td><button id="removeRowButton">Delete</button></td>';
      outputString += '</tr>';
    console.log(outputString);
    display.append (outputString)
  }
}

// define function to display headers
function displayHeaders(){
  let headerDisplay = $('#employeesOut')
  let headerString = '<tr>';
    headerString += '<th>First Name</th>';
    headerString += '<th>Last Name</th>';
    headerString += '<th>ID</th>';
    headerString += '<th>Title</th>';
    headerString += '<th>Salary</th>';
    headerString += '</tr>';
  console.log(headerString);
  headerDisplay.append(headerString);
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
  if (salryCostSum > 20000){
    // figure out how to change id of #total to #red
    //$('#total').attr('id','red');
  }
}

// if monthly cost over 20,000, red background

// $('#removeRowButton').on('click', removeRow());
// function removeRow(){
//   console.log('in remove row');
// }
