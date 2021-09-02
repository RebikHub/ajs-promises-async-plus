export default function json(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const arrayBuffer = new Uint16Array(data);
      resolve(String.fromCharCode(...arrayBuffer));
    }, 500);
  });
}
