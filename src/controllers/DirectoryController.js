const klaw = require('klaw')
const homedir = require('os').homedir();

class DirectoryController {

  static async getAll(req, res, next) {
    const { path } = req.query
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Transfer-Encoding': 'chunked'
    })
    let items = []
    klaw(`${path}`)
    .on('readable', function () {
      let item
      while ((item = this.read())) {
        items.push(item)
      }
    })
    .on('data', (item) => {
      res.write(JSON.stringify(item))
    })
    .on('end', () => { 
      console.log('end');
      console.log(items.length);
      res.end()
    }) 
  }
}

module.exports = DirectoryController