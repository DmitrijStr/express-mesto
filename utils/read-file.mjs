import fsPromise from 'fs';

const read = (path) => fsPromise.promises
  .readFile(path, { encoding: 'utf-8' })
  .then((data) => {
    return JSON.parse(data);
  });

export default read;
