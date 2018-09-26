let driverId = 0;

class Driver {
  construstor(name){
    this.id = ++driverId;
    this.name = name
  }
}
