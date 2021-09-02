export default function responseData(arg) {
  if (arg === 'yes') {
    return '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  }
  throw new Error('non data!!!');
}
