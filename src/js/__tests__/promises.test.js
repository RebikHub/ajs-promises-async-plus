import read from '../reader';
import responseData from '../__mocks__/response';

jest.mock('../__mocks__/response');

beforeEach(() => {
  jest.resetAllMocks();
});

test('test reject read()', async () => {
  responseData.mockReturnValue('non data!!!');
  const response = await read();
  expect(response).toThrow('non data!!!');
});

// it('works with promises', () => {
//   expect.assertions(1);
//   return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
// });

// async/await can be used.
// it('test reject read()', async () => {
//   expect.assertions(1);
//   const data = await readError();
//   expect(data).toEqual('non data!!!');
// });
// it('test reject read()', async () => {
//   expect.assertions(1);
//   const data = await readError();
//   expect(data).toEqual('non data!!!');
// });
