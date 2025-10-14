
interface Teacher {
  readonly firstName: string; 
  readonly lastName: string;  
  fullTimeEmployee: boolean;  
  yearsOfExperience?: number;
  location: string;           
  [key: string]: any;       
}


const teacher1: Teacher = {
  firstName: "Grace",
  lastName: "Mwangi",
  fullTimeEmployee: true,
  location: "Nairobi",
  contract: false, 
};

const teacher2: Teacher = {
  firstName: "James",
  lastName: "Odhiambo",
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: "Mombasa",
  department: "Sciences", 
};

console.log(teacher1);
console.log(teacher2);


