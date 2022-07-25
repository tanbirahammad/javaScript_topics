// Class

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    run(){
        console.log(`${this.name} top Speed is 150kmph`);
    }
  }

  const car1=new Car("MT-15",2022); // Create actual object.
  const car2=new Car("R15-V3",2020); 
  const car3=new Car("R15-V4",2022);

 car1.run();
 car2.run();
 car3.run();
  