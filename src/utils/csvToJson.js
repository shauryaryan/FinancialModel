// src/utils/csvToJson.js
export const csvToJson = (csv) => {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(',');

        headers.forEach((header, j) => {
            obj[header] = currentline[j];
        });
        result.push(obj);
    }
    return result;
};
