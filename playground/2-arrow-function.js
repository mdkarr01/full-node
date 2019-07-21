// const square = x => {
//   return x * x;
// };

// console.log(square(6));

const event = {
  name: "Birthday Party",
  guestList: ["Mike", "Susie", "Amanda", "George"],
  printGuestList() {
    console.log("This is a " + this.name);
    this.guestList.forEach(guest => {
      console.log(guest + " will be attending a " + this.name);
    });
  }
};
event.printGuestList();
