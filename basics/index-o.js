var employee=[
    {firstname:"Firstname",
    lastname:"Lastname",
    email:"Firstname@gmail.com",
    age:0},
    {firstname:"Ashwani",
    lastname:"Ahlawat",
    email:this.firstname + "@gmail.com",
    age:17},
    {firstname:"Manav",
    lastname:"Dabas",
    email:this.firstname + "@gmail.com",
    age:19},
    {firstname:"Mohit",
    lastname:"Sangwan",
    email:this.firstname + "@gmail.com",
    age:18}
    ];
    employee[8]={firstname:"Lakshay",
                     lastname:"Panwar",
                     email:this.firstname + "@gmail.com",
                     age:16};
    console.log(employee[0].firstname);
    document.getElementById("info").innerHTML=employee[1].firstname + " " + employee[1].lastname;