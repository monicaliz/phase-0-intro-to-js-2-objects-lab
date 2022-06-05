// Write your solution in this file!

//initialize employee object
const employee = {
    name: "mark",
    streetAddress: "123 lane",
}

//updateEmployeeWithKeyAndValue() -- spread operator
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ... employee }
    newObj [key] = value
    return newObj
}

//destructivelyUpdateEmployeeWithKeyAndValue()
function destructivelyUpdateEmployeeWithKeyAndValue(employee,  key, value) {
    employee [key] = value
     return employee
}

//deleteFromEmployeeByKey() == spread operator
function deleteFromEmployeeByKey(employee,  key, value) {
    const employeeNew = {...employee}
    employeeNew [key] = value
    return employeeNew
}

//destructivelyDeleteFromEmployeeByKey()
function destructivelyDeleteFromEmployeeByKey(employee,  key, value) {
    delete employee [key] 
    return employee
}