let store = { drivers: [], passengers: [], trips: [] };
let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(t => t.driverId === this.id);
  }

  passengers() {
    let driverTrips = this.trips();
    return driverTrips.map(t => t.passenger());
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(t => t.passengerId === this.id);
  }

  driverss() {
    let passengerTrips = this.trips();
    return passengerTrips.map(t => t.passenger());
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  passenger(){
    return store.passengers.find(p => p.id === this.passengerId);
  }

  driver(){
    return store.drivers.find(d => d.id === this.driverId);
  }
}
