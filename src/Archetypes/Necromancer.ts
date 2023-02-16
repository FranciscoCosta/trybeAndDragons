import { EnergyType } from '../Energy';

import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyTpye: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    Necromancer.count += 1;
    this._energyTpye = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this.count;
  }

  get energyType(): EnergyType {
    return this._energyTpye;
  }
}
