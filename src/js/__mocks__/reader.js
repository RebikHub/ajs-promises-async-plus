export default function readError() {
  return new Promise((resolve, reject) => {
    reject(new Error('non data!!!'));
  });
}
