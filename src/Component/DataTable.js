import DataGrid, {
  Column,
  FilterRow,
  Grouping,
  Pager,
  Paging,
  Selection,
} from "devextreme-react/data-grid";

function DataTable({ test }) {
  const selectedKeys = [
    10273, 10277, 10292, 10295, 10300, 10302, 10305, 10308, 10312, 10319, 10321,
    10323, 10326, 10328, 10331, 10334, 10335, 10341, 10351, 10353, 10356, 10362,
    10367, 10373, 10376, 10383, 10387,
  ];

  const tableDetailColumnExtensions = [
    { columnName: "startDate", width: 115 },
    { columnName: "dueDate", width: 115 },
    { columnName: "priority", width: 100 },
    { columnName: "status", width: 125 },
  ];
  return (
    <div>
      <DataGrid
        dataSource={test}
        keyExpr={"idClient"}
        allowColumnReordering={true}
        defaultSelectedRowKeys={selectedKeys}
      >
        <Grouping autoExpandAll={true} border="1" />
        <FilterRow visible={true} />
        <Selection mode={"multiple"} />

        <Column
          dataField={"idClient"}
          caption={"Client ID"}
          allowSorting={false}
          allowFiltering={false}
          allowGrouping={false}
          allowReordering={false}
          width={100}
        />
        <Column dataField={"model"} />
        <Column dataField={"serial"} sortOrder={"asc"} />

        <Column dataField={"marca"} />

        <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
      </DataGrid>
    </div>
  );
}

export default DataTable;
