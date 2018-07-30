import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Country } from '../../models/country';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { id: 1, name: 'Justin Bonomo', winnings: 43200000, country: Country[Country.USA] },
      { id: 2, name: 'Daniel Negreanu', winnings: 38600000, country: Country[Country.CAN] },
      { id: 3, name: 'Erik Seidel', winnings: 34600000, country: Country[Country.USA] },
      { id: 4, name: 'Fedor Holz', winnings: 33000000, country: Country[Country.DEU] },
      { id: 5, name: 'Daniel Colman', winnings: 27800000, country: Country[Country.USA] },
      { id: 6, name: 'Antonio Esfandiari', winnings: 27200000, country: Country[Country.USA] },
      { id: 7, name: 'Bryn Kenney', winnings: 26200000, country: Country[Country.USA] },
      { id: 8, name: 'Phil Ivey', winnings: 25900000, country: Country[Country.USA] },
      { id: 9, name: 'Dan Smith', winnings: 25800000, country: Country[Country.USA] },
      { id: 10, name: 'Scott Seiver', winnings: 24100000, country: Country[Country.USA] }
    ];
    return {players};
  }
}