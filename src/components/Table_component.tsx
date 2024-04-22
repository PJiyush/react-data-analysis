import { Table, TableData } from '@mantine/core';
interface TableComponentProps {
    data_table: {name:string, class1:number, class2:number, class3:number}[]
}

function Table_component({data_table}:TableComponentProps) {
    const data_table_columns=  [];
    const keys = Object.keys(data_table[0]);

    for (let i=0; i<keys.length; i++){ // extracting the keys from the data_table
        data_table_columns.push(keys[i])
    }

    for (let i=1; i<data_table.length+1; i++){ // converting the keys into desired format //for ex: class1 to Class 1
        const word:string = data_table_columns[i]
        const word_length = word.length;
        const lastWord = word.charAt(word_length-1);
        data_table_columns[i] = word.charAt(0).toUpperCase() + word.slice(1,word.length-1)+" "+lastWord ;
    }

    const tableData: TableData = { // converting the data_table into the format that the Table component expects
        head: data_table_columns,
        body: data_table.map((item) => {
            return Object.values(item)
        }
        )
    }
    return (
        <Table data={tableData} horizontalSpacing={'xl'} withColumnBorders={true} withTableBorder={true}/>
    )
}

export default Table_component;