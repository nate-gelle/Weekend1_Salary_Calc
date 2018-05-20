console.log( 'JS' );

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
  console.log( 'JQ' );
  $('#button').on('click', addEmployee);
}

function  addEmployee(){
  console.log( 'in addEmployee' );
  // get user input
  // create a new employee
  let newEmployee = new Employee( $('#firstNameIn').val(),  $('#lastNameIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#salaryIn').val());
  console.log( newEmployee );
  // push new employee into array
  employees.push(newEmployee);
  console.log(employees);
  // update DOM
  displayEmployees();
} // end addEmployee

function displayEmployees(){
  console.log( 'in displayEmployees' );
  // target output element and save in a variable
  let el = $('#employeesOut');
  // empty output element
  el.empty();
  // loop through array
  for(employee of employees){
  // append each employee to DOM
    let outputString = '<li>';
        outputString += employee.firstName;
        outputString += ' ';
        outputString += employee.lastName;
        outputString += ' ';
        outputString += employee.id;
        outputString += ' ';
        outputString += employee.title;
        outputString += ' ';
        outputString += employee.salary;
    outputString += '</li>';
    el.append (outputString)
  }


}
