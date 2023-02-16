import { EnergyType } from '../Energy';

import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyTpye: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    Mage.count += 1;
    this._energyTpye = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this.count;
  }

  get energyType(): EnergyType {
    return this._energyTpye;
  }
}
