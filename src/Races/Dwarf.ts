import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.count += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.count;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}   