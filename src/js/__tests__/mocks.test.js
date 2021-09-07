import read from '../reader';
import json from '../parser';
import GameSavingLoader from '../GameSavingLoader';

jest.mock('../reader');
jest.mock('../parser');

afterEach(() => jest.resetAllMocks());

test('test reject read()', async () => {
  read.mockRejectedValue('error');
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toEqual('error');
  }
});

test('test resolve read()', async () => {
  json.mockResolvedValue('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  const data = await GameSavingLoader.load();
  expect(data).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});
