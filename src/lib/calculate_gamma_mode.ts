import DataObject from "../interface/Data";

const calculate_gamma_mode = (data: DataObject[], value: number): number => {
    let mode: number = 0;
    let array: number[] = [];
    let countMap: Map<number, number> = new Map(); // creating an object to store the frequency of each element
    for (let i = 0; i < data.length; i++) {
        if (data[i]["Alcohol"] === value) {
            const ash_val = data[i]["Ash"];
            const hue_val = data[i]["Hue"];
            const magnesium_val = data[i]["Magnesium"];
            if (typeof ash_val === 'number') {
                const gamma = ash_val * hue_val / magnesium_val;
                array.push(gamma);
            } else if (typeof ash_val === 'string' && !isNaN(parseFloat(ash_val))) {
                const gamma = parseFloat(ash_val) * hue_val / magnesium_val;
                array.push(gamma);
            }
        }
    }
    array.forEach((item) => {
        countMap.set(item, (countMap.get(item) || 0) + 1); // incrementing the frequency of each element
    });
    let maxCount = 0;
    countMap.forEach((value, key) => {
        if (value > maxCount) {
            maxCount = value;
            mode = key;
        }
    });
    return parseFloat(mode.toFixed(3)); // returning the mode upto 3 decimal places
}

export default calculate_gamma_mode;