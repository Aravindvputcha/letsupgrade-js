
// Create a Class User with properties as name, age & email.
// He can login and logout
// Create another class Moderator which has all the features of User, plus additional functionality to Add
// coins and remove coins.
// Create one more class Admin which has all the features of Moderator plus additional features like add a
// Course and delete a particular course for a user.




class User{
    constructor(name, age, email){
        this.name= name;
        this.age= age;
        this.email= email;
        this.course =[];
    }

    login(){
        console.log(`this is login method for ${this.name}`);
    }

    logout(){
        console.log(`this is logout method for ${this.name}`);
    }
}

class Moderator extends User{
    constructor(name, age, email , coins){
        super(name, age, email)
        this.coins = coins;

        
    }

    add_coins(){
        this.coins +=10;
        console.log(`coins acquired by user ${this.name} are ${this.coins}`);
    }

    remove_coins(){
        this.coins -=10;
        console.log(`coins acquired by user ${this.name} are ${this.coins}`);
    }
}

class Admin extends Moderator{
    constructor(name, age, email , coins, ){
        super(name, age, email, coins);
    }
    add_courses(coursename){

        this.course.push(coursename);
        console.log(`Courses user Aquires are ${this.course}`);

    }
    remove_courses(coursename){

        this.course.pop(coursename);
        console.log(`Courses user Aquires are ${this.course}`);

    }

}



let user1= new User("Aravind", 27, "ara@gmail.com");
let user2= new Moderator("Soundarya", 25, "sow@gmail.com", 50);
let user3= new Admin("Upgrade", 17, "lets@gmail.com", 50);

console.log(`the user class variables are ${user1.name} \n age ${user1.age} \n email ${user1.email}`);
console.log(`the user class variables are ${user2.name} \n age ${user2.age} \n email ${user2.email} \n ${user2.coins}`);
console.log(`the user class variables are ${user3.name} \n age ${user3.age} \n email ${user3.email} \n ${user3.coins}`);

user2.add_coins();

user3.add_courses("Java");
user3.add_courses("Python");
user3.add_courses("AIML");
user3.remove_courses("AIML");