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

  public getAge(): number {
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
