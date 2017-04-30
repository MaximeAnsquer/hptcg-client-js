export class Deck {

  public name: string;
  public cards: string[];

  constructor(name: string) {
    this.name = name;
    switch(name) {
      case "Hermione's deck":
        this.cards = ['Epoximise', 'Epoximise', 'Transfiguration', 'Transfiguration', 'Transfiguration', 'Transfiguration', 'Transfiguration', 'Transfiguration', 'Transfiguration'];
        break;
      case "Draco's deck":
        this.cards = ['Charms', 'Charms', 'Charms', 'Charms', 'Charms', 'Charms', 'Charms', 'Charms', 'Charms'];
        break;
      default:
        break;
    }
  }

}
