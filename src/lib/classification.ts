/**
 * Function to classify the data, and it will return the number of descrete classes
 * @param data - The data to classify
 * @returns number of discrete classes
 * 
 * 
 */


const classificationData=(data:any)=>{
    let numberOfClasses:number = 1;
    let classId:number = data[0]["Alcohol"];
    for (let i = 1; i < data.length; i++) {
        if (data[i]["Alcohol"] !== classId) {
            numberOfClasses++;
            classId = data[i]["Alcohol"];
        }
    }
    return numberOfClasses;
}
export default classificationData;