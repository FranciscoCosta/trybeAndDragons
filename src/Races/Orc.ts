import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.count += 1;
  }

  static createdRacesInstances(): number {
    return Orc.count;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}   