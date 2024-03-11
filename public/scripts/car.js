class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="car-card">
        <img src="${this.image}" alt="mobil_1" class="car-card__image">
        <div class="mt-3">
          <p class="fs-6 mb-2"> ${this.manufacture} / ${this.model} </p>
          <p class="fw-bold fs-5 mb-2"> Rp ${this.rentPerDay} / hari </p>
          <p class="fs-6 m-0 car-card__description"> ${this.description} </p>
        <div class="mt-2">
            <p> <img src="./images/icon/icon_peoples.svg" alt=""> ${this.capacity} Orang  </p>
            <p> <img src="./images/icon/icon_gear.svg" alt=""> ${this.transmission}  </p>
            <p> <img src="./images/icon/icon_calendar.svg" alt=""> Tahun ${this.year}  </p>
        </div>
          <button class="btn btn-success col-12 rounded-1 mt-2"> Pilih Mobil </button>
        </div>
      </div>   
  `;
  }
}