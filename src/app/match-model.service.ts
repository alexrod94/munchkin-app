import { Injectable } from '@angular/core';
import { AvatarModel } from './avatar-model';

@Injectable({
  providedIn: 'root'
})
export class MatchModelService {
  avatarsList: AvatarModel[];
  index: number;

  constructor() {
    this.avatarsList = [];
    this.avatarsList.push(new AvatarModel('Alex'));
    this.avatarsList.push(new AvatarModel('fffff'));
  }

  addAvatar(avatar: AvatarModel) {
    this.avatarsList.push(avatar);
  }

  delAvatar(index: number) {
    this.avatarsList.splice(index, 1);
}

setIndex(index: number) {
  this.index = index;
}

getAvatarSelected() {
  return this.avatarsList[this.index];
}
}
