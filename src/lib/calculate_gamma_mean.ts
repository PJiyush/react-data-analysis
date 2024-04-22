import DataObject from "../interface/Data";

const calculate_gamma_mean = (data: DataObject[], value: number): number => {
    let mean: number = 0;
    let count: number = 0;
    for(let i=0; i<data.length; i++){
        if(data[i]["Alcohol"] === value){
            let ash_val = data[i]["Ash"] // this could be number or string
            const hue_val = data[i]["Hue"]
            const magnesium_val = data[i]["Magnesium"]
            if (typeof ash_val ==='number'){
                let gamma = ash_val*hue_val/magnesium_val;
                mean += gamma;
                count++;
            }else if (typeof ash_val === 'string' && !isNaN(parseFloat(ash_val))){ // checking that the string is a number or not
                let gamma = parseFloat(ash_val)*hue_val/magnesium_val;
                mean += gamma;
                count++;
            }
        }
    }
    return count > 0 ? parseFloat((mean/count).toFixed(3)) : 0; // returning the mean upto 3 decimal places
}

export default calculate_gamma_mean;
