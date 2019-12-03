import { Component, OnInit } from '@angular/core';
import { MatchModelService } from '../match-model.service';
import { AvatarModel } from '../avatar-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  avatar: AvatarModel;
  match: MatchModelService;

  constructor(match: MatchModelService, private router: Router) {
    this.match = match;
    this.avatar = this.match.getAvatarSelected();
    console.log(this.avatar);
  }

  ngOnInit() {
  }

  levelUp() {
    this.avatar.LevelUp();
  }

  levelDown() {
    this.avatar.LevelDown();
  }

  lifeUp() {
    this.avatar.LifeUp();
  }

  lifeDown() {
    this.avatar.LifeDown();
  }

  strengthUp() {
    this.avatar.StrengthUp();
  }

  strengthDown() {
    this.avatar.StrengthDown();
  }

  goBack() {
    console.log('hola');
    this.router.navigate(['/players-list']);
  }
}
