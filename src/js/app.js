import GameSavingLoader from './GameSavingLoader';

console.log('app worked');

(async () => {
  try {
    const ret = await GameSavingLoader.load();
    return console.log(ret);
  } catch (error) {
    return console.log(error);
  }
})();
