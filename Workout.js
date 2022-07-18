class Workout {
  id = crypto.randomUUID();
  date = new Date();

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

export class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence; // steps/min
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = +(this.duration / this.distance).toFixed(2);
    return this.pace;
  }
}

export class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = +elevationGain.toFixed(1); // in meters
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = +(this.distance / (this.duration / 60)).toFixed(2);
    return this.speed;
  }
}
