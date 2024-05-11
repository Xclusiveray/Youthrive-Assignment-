// Firstly you open your Vscode after installing node in your computer 
// secondly you open a folder in your vscode and then open a file in that folder which must end with a prefer .js to indicate that its a javascipt file 
// Thirdly you open your terminal and type in node -v to confirm if node is install in your computer then type npm init in your terminal to get your package.json file which house the backend project, 
// Then you intall the neccessary depencies for the project by typing in your terminal npm install e.g express, mongoose, -D nodemon, dotenv etc where you will get your node modules for the depencies

// The purpose of installing express is because express help the server to run; express is the server  

// the importance of using dotenv in a node.js project
//ans; the env file simplifies the process and enhances the security of sensitive data, the dotenv package makes it easy to load envirent variables from a .env file into node.js applications
// How to configure a dotenv file
//ans; you go to your terminal and install a dotenv dependences just like you install express, then you invoke it in your project just thesame way you require express in setting up a server



//cloud host to deploy my server
// digitaloccean
//heroco
// AWS

const express = require("express")

const app = express()


app.listen(8000, ()=>{
    console.log("server started running...")
})


app.get("/users", (request, response)=>{
    let medicine = 'cardiology'
    let ict = 'software engineering'
    let accounting = 'accountant'
    let banking = 'finance'
    let IT = 'development'
    let numberOfCourses = 5
})

app.post("/users", fxn.handlePostRequest)


app.put("/class", (request, response)=>{
response.status(200).json({message: "Put Request Successful"})
})


const students = [
    {id: 1, name: 'Alice', age: 20, grade: 'A'},
    {id: 2, name: 'Bob', age: 22, grade: 'B'},
    {id: 3, name: 'Charlie', age: 21, grade: 'C'},
    {id: 4, name: 'David', age: 19, grade: 'B'},
    {id: 5, name: 'Eva', age: 23, grade: 'A'}
]

const students = [
    {name: 'Alice'},
    {name: 'Bob'},
    {name: 'Charlie'},
    {name: 'David'},
    {name: 'Eva'}
]

students.map("/users", ()=>{
console.log("students")
})

const student = [id: 1, names: 'Alice', age: 20, grade: 'A']
student.forEach("/" ()=>{
    console.log("student")
})

const student = [id: 1, names: 'Bob', age: 22, grade: 'B']
student.forEach("/" ()=>{
    console.log("student")
})

const student = [id: 1, names: 'Charlie', age: 21, grade: 'C']
student.forEach("/" ()=>{
    console.log("student")
})

const student = [id: 1, names: 'David', age: 19, grade: 'B']
student.forEach("/" ()=>{
    console.log("student")
})

const student = [id: 1, names: 'Eva', age: 23, grade: 'a']
student.forEach("/" ()=>{
    console.log("student")
})

// Filter()
 
const students = [
    {id: 1, name: 'Alice', age: 20, grade: 'A'},
    (id: 2, name: 'Bob', age: 22, grade: 'B'),
    (id: 3, name: 'Charlie', age: 21, grade: 'C'),
    (id: 4, name: 'David', age: 19, grade: 'B'),
    (id: 5, name: 'Eva', age: 23, grade: 'A')
topStudent.filter("/" ()=>{
    console.log("topStudent")
})]





const A = 90-100
const B = 80-89
const C = 70-79
const D = 60-69
const F = below 60

function classifyGrade("/user", if(grade=100 && grade >=90)=>{
console.log("A")
})

function classifyGrade("/user", if(grade>=80 && grade <=89)=>{
    console.log("B")
    })
    
    function classifyGrade("/user", if(grade>=70 && grade <=79)=>{
        console.log("C")
        })
        

        function classifyGrade("/user", if(grade>=60 && grade <=69)=>{
            console.log("D")
            })
        

            function classifyGrade("/user", if(grade <60)=>{
                console.log("F")
                })
           

                function toCelsius(fahrenheit){
                    return (5/9) * (f-32);
                    let value = toCelsius(77);
                }