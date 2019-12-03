import { Component, OnInit } from '@angular/core';
import { AvatarModel } from '../avatar-model';
import { MatchModelService } from '../match-model.service';
import { Router } from '@angular/router';
import { setIndex } from '@ionic-native/core/decorators/common';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.page.html',
  styleUrls: ['./players-list.page.scss'],
})
export class PlayersListPage implements OnInit {

  avatarsList: AvatarModel[];
  match: MatchModelService;

  constructor(match: MatchModelService, private router: Router) {
    this.match = match;
    this.avatarsList = this.match.avatarsList;
  }

  ngOnInit() {
  }

  modify(index) {
    this.match.setIndex(index);
    this.router.navigate(['/stats']);
  }
}
