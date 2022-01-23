import DataGrid, {
  Column,
  FilterRow,
  Grouping,
  Pager,
  Paging,
  Selection,
  Editing,
} from "devextreme-react/data-grid";
import React from "react";
function Tabela({ list }) {
  return (
    <div>
      <DataGrid dataSource={list} keyExpr={"id"} allowColumnReordering={true}>
        <Grouping autoExpandAll={true} border="1" />
        <FilterRow visible={true} />
        <Selection mode={"multiple"} />
        <Editing mode="row" allowUpdating={true} allowDeleting={true} />
        <Column dataField="id" allowEditing={false}></Column>
        <Column
          dataField={"idClient"}
          caption={"Client ID"}
          allowSorting={false}
          allowFiltering={false}
          allowGrouping={false}
          allowReordering={false}
          width={100}
        />
        <Column dataField={"name"} />
        <Column dataField={"email"} />

        <Column dataField={"cpf"} />

        <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
      </DataGrid>
    </div>
  );
}

export default Tabela;
