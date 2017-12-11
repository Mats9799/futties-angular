import {Player} from './player.model';

export class FuttiesPlayer implements Player {

  public age: number;
  public assists: number;
  public country: string;
  public goals: number;
  public height: number;
  public name: string;
  public position: string;

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

  public getAssists(): number {
    return this.assists;
  }

  public getCountry(): string {
    return this.country;
  }

  public getGoals(): number {
    return this.goals;
  }

  public getHeight(): number {
    return this.height;
  }

  public getName(): string {
    return this.name;
  }

  public getPosition(): string {
    return this.position;
  }
}
