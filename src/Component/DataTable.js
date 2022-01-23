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
function DataTable({ listAparelho }) {
  const onChangesChange = async (changes) => {
    var string = JSON.stringify(changes);
    if (string != "[]") {
      var key = null;
      var model = null;
      var serial = null;
      var marca = null;
      var obj = eval(string);
      if (string.includes("model")) {
        model = obj[0].data.model;
        key = obj[0].key;
      }
      if (string.includes("serial")) {
        serial = obj[0].data.serial;
        key = obj[0].key;
      }
      if (string.includes("marca")) {
        marca = obj[0].data.marca;
        key = obj[0].key;
      }
    }
    try {
      const response = fetch(`http://localhost:8080/update-equipment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: key,
          model: model,
          serial: serial,
          marca: marca,
        }),
      });
    } catch (err) {
      throw err;
      console.log(err);
    }
  };
  return (
    <div>
      <DataGrid
        dataSource={listAparelho}
        keyExpr={"id"}
        allowColumnReordering={true}
        onChangesChange={onChangesChange}
        onSelectionChanged={(newSelection) => {
          console.log(newSelection.rows);
          console.log("passou aqui");
          // **** The following line breaks the page upon selection ****
          // currentlySelected(newSelection)
        }}
      >
        <Grouping autoExpandAll={true} border="1" />
        <FilterRow visible={true} />
        <Selection mode={"multiple"} />
        <Editing
          onChangesChange={onChangesChange}
          mode="row"
          allowUpdating={true}
          allowDeleting={true}
        />
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
