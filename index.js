const fs = require('fs');

const { marshall } = require('@aws-sdk/util-dynamodb');
const csv = require('csvtojson');

const INPUT_CSV_FILE_PATH_ARG_INDEX = 2;
const OUTPUT_JSON_FILE_PATH_ARG_INDEX = 3;
const inputCsvFilePath = process.argv[INPUT_CSV_FILE_PATH_ARG_INDEX];
const outputJsonFilePath = process.argv[OUTPUT_JSON_FILE_PATH_ARG_INDEX];

let formattedJson = '';

// Delete output file if it already exists since the items will be appended if the file exists and results in data inconsistency.
if (fs.existsSync(outputJsonFilePath)) {
  fs.unlinkSync(outputJsonFilePath);
}

csv()
  .fromFile(inputCsvFilePath)
  .then((rows) => {
    console.info(`Total number of csv rows:${rows.length}`);
    rows.forEach((row, index) => {
      // Show progress in log
      const currentRow = index + 1;
      console.info(`Processing csv rows:${currentRow}/${rows.length}`);

      // Convert csv to DynamoDB json
      const newRow = {
        col1_str: String(row.col1_str),
        col2_num: Number(row.col2_num),
        col3_num: Boolean(row.col3_bool),
      };

      const ddbJson = {};
      ddbJson.Item = marshall(newRow);

      // concatenate each DynamoDB json
      formattedJson += `${JSON.stringify(ddbJson, null, 2)}\n`;
    });
    // Write json content to json file
    fs.appendFile(outputJsonFilePath, formattedJson, (err) => {
      if (err) {
        throw err;
      }
    });
    console.info(
      `DynamoDB json was generated, outputJsonFilePath=${outputJsonFilePath}`,
    );
  });
