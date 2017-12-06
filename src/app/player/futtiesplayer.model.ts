import {Player} from './player.model';

export class FuttiesPlayer implements Player {

  private age: number;
  private assists: number;
  private country: string;
  private goals: number;
  private height: number;
  private name: string;
  private position: string;

  constructor(name: string, age: number, height: number, country: string, position: string, goals: number, assists: number) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.country = country;
    this.position = position;
    this.goals = goals;
    this.assists = assists;
  }

  getAge(): number {
    return this.age;
  }

  getAssists(): number {
    return this.assists;
  }

  getCountry(): string {
    return this.country;
  }

  getGoals(): number {
    return this.goals;
  }

  getHeight(): number {
    return this.height;
  }

  getName(): string {
    return this.name;
  }

  getPosition(): string {
    return this.position;
  }
}
