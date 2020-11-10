var person1={
    firstname:"Ashu",
    lastname:"Ahlawat",
    age:17,
    hobbie:"watch Anime",
    fullname:function(){
    return this.firstname + " " +this.lastname;
    },

    introduction:function(){
    return "Myself " + this.fullname() + " and i'm " + this.age + " years old. I like to " + this.hobbie ;
    }
    };
 function myfunction1(){document.getElementById("person1").innerHTML=person1.introduction();}

var person2={
    firstname:"Hassan",
    lastname:"Ridoy",
    age:18,
    hobbie:"play video games",
    fullname:function(){
    return this.firstname + " " +this.lastname;
    },

    introduction:function(){
    return "Myself " + this.fullname() + " and i'm " + this.age + " years old. I like to " + this.hobbie ;
    }
    };
    function myfunction2(){document.getElementById("person2").innerHTML=person2.introduction();}

    var person3={
    firstname:"Ansh",
    lastname:"Rathoree",
    age:12,
    hobbie:"eat and poop",
    fullname:function(){
    return this.firstname + " " +this.lastname;
    },

    introduction:function(){
    return "Myself " + this.fullname() + " and i'm " + this.age + " years old. I like to " + this.hobbie ;
    }
    };
 function myfunction3(){document.getElementById("person3").innerHTML=person3.introduction();}
