export default class GameSaving {
  constructor(options) {
    const result = JSON.parse(options);
    this.id = result.id;
    this.created = result.created;
    this.userInfo = result.userInfo;
  }
}
