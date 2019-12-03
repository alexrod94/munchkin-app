export class AvatarModel {
  name: string;
  level: number;
  life: number;
  strength: number;

  constructor(name: string) {
    this.name = name;
    this.level = 1;
    this.life = 10;
    this.strength = 1;
  }

  LevelUp() {
    this.level += 1;
  }

  LifeUp() {
    this.life += 1;
  }

  StrengthUp() {
    this.strength += 1;
  }

  LevelDown() {
    this.level -= 1;
  }

  LifeDown() {
    this.life -= 1;
  }

  StrengthDown() {
    this.strength -= 1;
  }
}
