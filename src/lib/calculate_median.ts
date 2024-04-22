import DataObject from "../interface/Data";

const caculate_median = (data: DataObject[], classNo: number, field: keyof DataObject): number => {
    let median: number = 0;
    let count: number = 0;
    let array: number[] = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i]["Alcohol"] === classNo) {
            const fieldValue = data[i][field];
            if (typeof fieldValue === 'number') {
                array.push(fieldValue);
                count++;
            } else if (typeof fieldValue === 'string' && !isNaN(parseFloat(fieldValue))) { // checking that the string is a number or not
                array.push(parseFloat(fieldValue));
                count++;
            }
        }
    }

    array.sort((a, b) => a - b); // sorting in ascending order
    if (count < 1) return 0;
    if (count % 2 === 0) {
        median = (array[count / 2 - 1] + array[count / 2]) / 2;
    } else {
        median = array[Math.floor(count / 2)];
    }

    return parseFloat(median.toFixed(3)); // returning the median upto 3 decimal places
}

export default caculate_median;