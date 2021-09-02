import read from '../reader';
import readError from '../__mocks__/reader'

jest.mock('../__mocks__/reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('test resolve read()', async () => {
  const response = await read();
  expect(response).toEqual('Информация об уровне временно недоступна');
});

test('test reject read()', () => {
  readError.mockReturnValue('non data!!!');
  const response = readError();
  expect(response).toEqual('non data!!!');
});

it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});

// async/await can be used.
it('works with async/await', async () => {
  expect.assertions(1);
  const data = await user.getUserName(4);
  expect(data).toEqual('Mark');
});