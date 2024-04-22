import DataObject from "../interface/Data";

const caculate_mode = (data: DataObject[], value: number, field: keyof DataObject): number => {
    let mode: number = 0;
    let array: number[] = [];
    let modeMap:any = {}; // creating an object to store the frequency of each element

    for (let i = 0; i < data.length; i++) {
        if (data[i]["Alcohol"] === value) {
            const fieldValue = data[i][field];
            if (typeof fieldValue === 'number') {
                array.push(fieldValue);
            } else if (typeof fieldValue === 'string' && !isNaN(parseFloat(fieldValue))) {  // checking that the string is a number or not
                array.push(parseFloat(fieldValue));
            }
        }
    }

    array.forEach((element) => {
        if (!modeMap[element]) { // if the element is not present in the object then add it with frequency 1
            modeMap[element] = 1;
        } else {
            modeMap[element]++;
        }
    });

    let max = 0; // finding the element with maximum frequency O(n) complexity
    for (let key in modeMap) {
        if (modeMap[key] > max) {
            max = modeMap[key];
            mode = Number(key);
        }
    }

    return parseFloat(mode.toFixed(3));
}

export default caculate_mode;