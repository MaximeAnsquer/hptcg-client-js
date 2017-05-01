export class Deck {

  public name: string;
  public cards: string[];

  constructor(name: string) {
    this.name = name;
    switch(name) {
      case "Hermione's deck":
        this.cards = [
          'Transfiguration', 'Transfiguration', 'Transfiguration', 'Transfiguration',
          'Transfiguration', 'Transfiguration', 'Transfiguration',
          'CareOfMagicalCreatures', 'CareOfMagicalCreatures', 'CareOfMagicalCreatures', 'CareOfMagicalCreatures',
          'CareOfMagicalCreatures', 'CareOfMagicalCreatures', 'CareOfMagicalCreatures', 'CareOfMagicalCreatures',
          'CareOfMagicalCreatures', 'CareOfMagicalCreatures', 'CareOfMagicalCreatures', 'CareOfMagicalCreatures',
          'Epoximise', 'Epoximise',
        ];
        break;
      case "Draco's deck":
        this.cards = [
          'Charms', 'Charms', 'Charms', 'Charms',
          'Charms', 'Charms', 'Charms', 'Charms',
          'Charms',
          'CareOfMagicalCreatures', 'CareOfMagicalCreatures', 'CareOfMagicalCreatures', 'CareOfMagicalCreatures',
          'CareOfMagicalCreatures', 'CareOfMagicalCreatures', 'CareOfMagicalCreatures', 'CareOfMagicalCreatures',
          'CareOfMagicalCreatures', 'CareOfMagicalCreatures'
        ];
        break;
      default:
        break;
    }
  }

}
