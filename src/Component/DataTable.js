import DataGrid, {
  Column,
  FilterRow,
  Grouping,
  Pager,
  Paging,
  Selection,
  Editing,
} from "devextreme-react/data-grid";

function DataTable({ test }) {
  return (
    <div>
      <DataGrid
        dataSource={test}
        keyExpr={"idClient"}
        allowColumnReordering={true}
      >
        <Grouping autoExpandAll={true} border="1" />
        <FilterRow visible={true} />
        <Selection mode={"multiple"} />
        <Editing
          mode="row"
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
        />
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
