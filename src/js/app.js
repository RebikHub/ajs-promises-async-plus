import GameSavingLoader from './gameSaving';

console.log('app worked');

(async () => {
  try {
    const ret = await GameSavingLoader.load();
    return console.log(ret);
  } catch (error) {
    return console.log(error);
  }
})();
