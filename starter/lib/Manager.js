// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    officeNumber
    getofficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

export default Manager