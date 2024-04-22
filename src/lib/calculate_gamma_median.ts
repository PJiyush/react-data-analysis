import DataObject from "../interface/Data";

const calculate_gamma_median = (data: DataObject[], value: number): number => {
    let median: number = 0;
    let count: number = 0;
    let array: number[] = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i]["Alcohol"] === value) {
            const ash_val = data[i]["Ash"];
            const hue_val = data[i]["Hue"];
            const magnesium_val = data[i]["Magnesium"];
            if (typeof ash_val === 'number') {
                const gamma = ash_val * hue_val / magnesium_val;
                array.push(gamma);
                count++;
            } else if (typeof ash_val === 'string' && !isNaN(parseFloat(ash_val))) { // checking that the string is a number or not
                const gamma = parseFloat(ash_val) * hue_val / magnesium_val;
                array.push(gamma);
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

export default calculate_gamma_median;