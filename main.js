class Person {
    firstName;
    lastName;
    phoneNumber;
    email;
    age;

    constructor(firstName,lastName,phoneNumber,email,age){
        this.firstName = firstName ,
        this.lastName=lastName,
        this.phoneNumber=phoneNumber,
        this.email=email,
        this.age =age
    }
    get firstName(){
        return this.firstName;
    }
    get lastName(){
        return this.lastName;
    }
    get phoneNumber(){
        return this.phoneNumber;
    }
    get email(){
        return this.email;
    }
    get age(){
        return this.age;
    }
    set firstName(firstName){
        this.firstName=firstName;
    }
    set lastName(lastName){
        this.lastName=lastName;
    }
    set phoneNumber(phoneNumber){
        this.phoneNumber=this.phoneNumber;
    }
    set email(email){
        this.email=email;
    } 
    set age(age){
        this.age=age;
    }
}
class Instructor extends Person{
    major;
    yearsOfExperience;
    numberOfStudents;
    salary
    constructor(firstName,lastName,phoneNumber,email,age,major ,yearsOfExperience, numberOfStudents , salary){
        super(firstName,lastName,phoneNumber,email,age);
        this.major=major;
        this.yearsOfExperience=yearsOfExperience;
        this.numberOfStudents=numberOfStudents;
        this.salary=salary;
    }
    get major(){
        return this.major;
    }
    get yearsOfExperience(){
        return this.yearsOfExperience;
    }
    get numberOfStudents(){
        return this.numberOfStudents;
    }
    get salary(){
        return this.salary;
    }
    set major(major){
        this.major=major;
    }
    set yearsOfExperience(yearsOfExperience){
        this.yearsOfExperience=yearsOfExperience;
    }
    set numberOfStudents(numberOfStudents){
        this.numberOfStudents=numberOfStudents;
    }
    set salary(salary){
        this.salary=salary;
    }
    calculateSalary(numberOfWorkingHours , hourRate){
        if ( numberOfWorkingHours>100){
            let salaryWithoutBonus = numberOfWorkingHours*hourRate;
            let bonus = salaryWithoutBonus*0.1;
            return salaryWithoutBonus+bonus;

        }
        return numberOfWorkingHours*hourRate;

    }
    printInstructorDetails(instructor){
        console.log(instructor.firstName+" "+instructor.lastName+
        " is an instructor of age "+instructor.age+" with experience "
        +instructor.yearsOfExperience+" years in the major "+
        instructor.major +" with a salary of "+instructor.salary+".");
    }
}

let Roy = new Instructor("Roy","Mix",71710303,"nomail@nomail.com",30,"OS",5,50,2000);
Roy.printInstructorDetails(Roy);
console.log(Roy.calculateSalary(120,10));