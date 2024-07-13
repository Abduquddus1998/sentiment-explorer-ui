import { Columns, Row, Rows, TableWrapper } from "./TabStyles";

interface TableProps<T> {
  columns: string[];
  rows: T[];
}

export default function Table<T extends {}>({ columns, rows }: TableProps<T>) {
  return (
    <TableWrapper>
      <Columns>
        {columns.map((column, index) => (
          <div key={index}>{column}</div>
        ))}
      </Columns>

      <Rows>
        {rows.map((row: any) => (
          <Row key={row.id}>
            {columns.map((column) => (
              <div>{column === "prob" ? `${row[column]}%` : row[column]}</div>
            ))}
          </Row>
        ))}
      </Rows>
    </TableWrapper>
  );
}
