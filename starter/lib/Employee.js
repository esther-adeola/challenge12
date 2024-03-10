// TODO: Write code to define and export the Employee class
class Employee{
    id
    name
    email

    constructor(id, name, email){
        this.id=id;
        this.name=name
        this.email=email
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
    
}
export default Employee