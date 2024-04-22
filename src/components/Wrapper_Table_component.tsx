import TableComponent from './Table_component'
import DataObject from '../interface/Data'
import calculate_mean from '../lib/calculate_mean'
import calculate_median from '../lib/calculate_median'
import calculate_mode from '../lib/calculate_mode'
import calculate_gamma_mean from '../lib/calculate_gamma_mean'
import calculate_gamma_median from '../lib/calculate_gamma_median'
import calculate_gamma_mode from '../lib/calculate_gamma_mode'

interface WrapperTableComponentProps {
    data: DataObject[],
    value:number
}

interface DataTableItem {
    name: string;
    class1: number;
    class2: number;
    class3: number;
}
function Wrapper_Table_component({data, value}: WrapperTableComponentProps) {
    if (value === 1) {
        const functions = [
            { name: 'Flavanoids Mean', func: calculate_mean },
            { name: 'Flavanoids Median', func: calculate_median },
            { name: 'Flavanoids Mode', func: calculate_mode }
        ];
        const functionValues = functions.map(({ name, func }) => ({
            name,
            class1: func(data, 1, "Flavanoids"),
            class2: func(data, 2, "Flavanoids"),
            class3: func(data, 3, "Flavanoids")
        }));
        const data_table: DataTableItem[] = functionValues.map(({ name, class1, class2, class3 }) => ({ // convering the data into the format that the TableComponent expects
            name,
            class1,
            class2,
            class3
        }));
        return (
            <div className="div_Table_component">
                <div className='table_name'>Table {value}</div>
                <TableComponent data_table={data_table} />
            </div>
        );
    } else {
        const functions = [
            { name: 'Gamma Mean', func: calculate_gamma_mean },
            { name: 'Gamma Median', func: calculate_gamma_median },
            { name: 'Gamma Mode', func: calculate_gamma_mode }
        ]
        const functionValues = functions.map(({ name, func }) => ({
            name,
            class1: func(data, 1),
            class2: func(data, 2),
            class3: func(data, 3)
        }));
        const data_table: DataTableItem[] = functionValues.map(({ name, class1, class2, class3 }) => ({
            name,
            class1,
            class2,
            class3
        }));
        console.log(data_table);
        return (
            <div className="div_Table_component">
                <div className='table_name'>Table {value}</div>
                <TableComponent data_table={data_table} />
            </div>
        );
    }
}

export default Wrapper_Table_component;
