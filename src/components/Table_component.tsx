import { Table } from '@mantine/core';

const elements = [
    {name: 'oxygen', position: 8, symbol: 'O', mass: 15.999},
];

function Table_component() {
    const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td>{element.position}</Table.Td>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.symbol}</Table.Td>
            <Table.Td>{element.mass}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Table stickyHeader stickyHeaderOffset={0}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>position</Table.Th>
                    <Table.Th>name</Table.Th>
                    <Table.Th>Symbol</Table.Th>
                    <Table.Th>At. mass</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}

export default Table_component;