import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {

  private editMode = false;
  private id: string;
  private playerForm: FormGroup;

  constructor(private playerService: PlayerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    const player = this.playerForm.value;
    player._id = this.id;
    console.log(player);
    if (this.editMode) {
      this.playerService.updatePlayer(this.playerForm.value);
    } else {
      this.playerService.addPlayer(this.playerForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  private initForm() {
    let playerName = '';
    let playerAge = 0;
    let playerAssists = 0;
    let playerCountry = '';
    let playerGoals = 0;
    let playerHeight = 0;
    let playerPosition = '';

    if (this.editMode) {
      const player = this.playerService.getPlayerById(this.id);
      playerName = player.name;
      playerAge = player.age;
      playerAssists = player.assists;
      playerCountry = player.country;
      playerGoals = player.goals;
      playerHeight = player.height;
      playerPosition = player.position;
    }

    this.playerForm = new FormGroup({
      'name': new FormControl(playerName, Validators.required),
      'age': new FormControl(playerAge, Validators.required),
      'assists': new FormControl(playerAssists, Validators.required),
      'country': new FormControl(playerCountry, Validators.required),
      'goals': new FormControl(playerGoals, Validators.required),
      'height': new FormControl(playerHeight, Validators.required),
      'position': new FormControl(playerPosition, Validators.required)
    });
  }
}
