class App {
  constructor() {
    this.searchSubmit = document.getElementById("search-submit");
    this.carContainer = document.getElementById("search-result");
    this.driverType = document.getElementById("search-driver")
    this.date = document.getElementById("search-date")
    this.time = document.getElementById("search-time")
    this.passengerValue = document.getElementById("search-passenger")
  }

  async init() {
    await this.load()
    this.run()
  }


  run = () => {
    Car.list.forEach((car) => {
      const div = document.createElement('div');
      div.innerHTML = car.render();
      this.carContainer.appendChild(div);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
    console.log(cars);
  }

  async loadFilter() {
    const cars = await Binar.listCars((data) => {
      const pickupDate = new Date(data.availableAt).getTime()
      // Mengambil data date pada data
      const date = new Date(`${this.date.value} ${this.time.innerText}`).getTime()
      const timeCheck = pickupDate >= date
      const availableAt = (this.driverType.innerText === 'Dengan Sopir' && data.available ? true : false)
      const notAvailableAt = (this.driverType.innerText === 'Tanpa Sopir' && !data.available ? true : false)
      const passenger = data.capacity >= this.passengerValue.value
      if (this.driverType.innerText === 'Dengan Sopir') {
        return availableAt
      } else if (this.driverType.innerText === 'Tanpa Sopir') {
        return notAvailableAt && passenger
      } else {
        return timeCheck
      }
    });
    if(cars.length === 0) {
      alert('Tidak dapat menemukan mobil yang sesuai dengan kriteria!')
    }
    Car.init(cars);
  }


  clear = () => {
    let child = this.carContainer.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainer.firstElementChild;
    }
  };
}