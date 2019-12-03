import { Component, OnInit } from '@angular/core';
import { AvatarModel } from '../avatar-model';
import { MatchModelService } from '../match-model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  avatarsList: AvatarModel[];
  newAvatar: AvatarModel;
  match: MatchModelService;

  constructor(private router: Router, match: MatchModelService) {
    this.match = match;
    this.avatarsList = this.match.avatarsList;
    this.newAvatar = new AvatarModel('');
  }
  ngOnInit() {
  }

  addAvatar() {
    this.match.addAvatar(this.newAvatar);
    this.newAvatar = new AvatarModel('');
  }

  deleteAvatar(i) {
    this.match.delAvatar(i);
  }

  begin() {
    this.router.navigate(['/players-list']);
  }

}
