import read from '../reader';
import responseData from '../__mocks__/response';

jest.mock('../__mocks__/response');

beforeEach(() => {
  jest.resetAllMocks();
});

test('test reject read()', async () => {
  responseData.mockReturnValue('error');
  try {
    await read();
  } catch (error) {
    expect(error).toEqual('non data!!!');
  }
});

it('test resolve read()', async () => {
  responseData.mockReturnValue('yes');
  const data = await read();
  expect(data).not.toEqual('non data!!!');
});
