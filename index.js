let driverId = 0;

class Driver {
  construstor(name){
    this.name = name;
    this.id = ++driverId;
  }
}
