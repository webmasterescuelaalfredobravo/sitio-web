const converter = require('json-2-csv');
//const requestPromise = require('request-promise');


class Parser {

  constructor() {
    this.allowedContentType = ['csv', 'json'];
  }

  async parseEvent(event) {
    let data, type;
    let options = event.options || {};

    if (event.url) {
      type = this.getFileType(event.url);
      try {
        data =  await readFile(event.target.files[0]);//await requestPromise(event.url);
        if (type == 'json') {
          data = JSON.parse(data);
        }
      } catch (err) {
        throw (`failed to download csv file: ${err}`);
      }
    } else {
      data = event.content;
      type = event.type;
      options = event.options;
    }

    if (this.allowedContentType.indexOf(type) == -1) {
       throw('Invalid content type');
    }

    if (type == 'csv') {
      return await this.csv2json(data.replace("D.N.I.","D_N_I_"), options);
    } if (type == 'json') {
      let csv = await this.json2csv(data, options);
      return csv.replace(/(.*)\n$/, '$1'); // Remove last newline
    }
  }

  getFileType(file) {
    const pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
    return file.match(pattern)[1];
  }

  csv2json(data, opts) {
    return new Promise((resolve, reject) => {
      converter.csv2json(data, (err, json) => {
        if (err) {
          return reject(err);
        }

        return resolve(json);
      }, opts)
    });
  }

  json2csv(data, opts) {
    return new Promise((resolve, reject) => {
      converter.json2csv(data, (err, csv) => {
        if (err) {
          return reject(err);
        }

        return resolve(csv);
      }, opts)
    });
  }
}

module.exports = Parser;