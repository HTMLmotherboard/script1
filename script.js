const person = document.getElementById("person")

person = {
    firstName:"Devster",
    lastName: "Rocraften",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  // This will return "John Doe":
  person.fullName();  
  