import DataObject from "../interface/Data";

const calculate_mean = (data: DataObject[], classNo: number, field: keyof DataObject): number => {
    let mean: number = 0;
    let count: number = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i]["Alcohol"] === classNo) {
            const fieldValue = data[i][field];
            if (typeof fieldValue === 'number') {
                mean += fieldValue;
                count++;
            } else if (typeof fieldValue === 'string' && !isNaN(parseFloat(fieldValue))) { // checking that the string is a number or not
                mean += parseFloat(fieldValue);
                count++;
            }
        }
    }
    return count > 0 ? parseFloat((mean/count).toFixed(3)) : 0; // returning the mean upto 3 decimal places
}

export default calculate_mean;
