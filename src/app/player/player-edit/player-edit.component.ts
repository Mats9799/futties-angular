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

  id: string;
  editMode = false;
  recipeForm: FormGroup;

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
    const player = this.recipeForm.value;
    player._id = this.id;
    console.log(player);
    if (this.editMode) {
      this.playerService.updatePlayer(this.recipeForm.value);
    } else {
      this.playerService.addPlayer(this.recipeForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let playerName = '';
    let playerAge = 0;
    let playerCountry = '';
    let playerHeight = 0;
    let playerPosition = '';

    if (this.editMode) {
      const player = this.playerService.getPlayerById(this.id);
      playerName = player.name;
      playerAge = player.age;
      playerCountry = player.country;
      playerHeight = player.height;
      playerPosition = player.position;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(playerName, Validators.required),
      'age': new FormControl(playerAge, Validators.required),
      'country': new FormControl(playerCountry, Validators.required),
      'height': new FormControl(playerHeight, Validators.required),
      'position': new FormControl(playerPosition, Validators.required)
    });
  }
}
