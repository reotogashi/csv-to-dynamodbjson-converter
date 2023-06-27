# csv-to-dynamodbjson-converter

This project provides a conversion tool from csv to DynamoDB json.

## Requirements

* Volta or Node `16.19.0`.

## Installation

Install the project with Volta or Node `16.19.0` using your host machine.

```
npm install
```

## How to use this script

- Prepare input csv file. You can refer the sample csv file in `./devfiles/sample.csv`

- Update `index.js` based on input csv file

- Update the following parts in `package.json` to specify input csv file path and output json file path.

```
"start": "node index.js \"./devfiles/sample.csv\" \"./devfiles/output.json\"",
```

- Run `npm run start`

## NPM Scripts

* `lint`
  * Lint the project without modifying files.
* `format`
  * Lint and automatically modify files.
