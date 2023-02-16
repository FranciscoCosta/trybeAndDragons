import { EnergyType } from '../Energy';

import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyTpye: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    Warrior.count += 1;
    this._energyTpye = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this.count;
  }

  get energyType(): EnergyType {
    return this._energyTpye;
  }
}
