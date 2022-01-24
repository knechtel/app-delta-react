import DataGrid, {
  Column,
  FilterRow,
  Grouping,
  Pager,
  Paging,
  Selection,
  ColumnChooser,
  Editing,
} from "devextreme-react/data-grid";
import React, { useState } from "react";

function DataTableEdit({ listAparelho }) {
  const [pronto, setPronto] = useState();

  const renderProntoGridCell = (data) => {
    var obj = eval(data);

    if (obj.data.pronto == null) {
      setPronto(false);
    }
    return <input type="checkbox" checked={obj.data.pronto} />;
  };
  const renderAutorizadoGridCell = (data) => {
    var obj = eval(data);
    return <input type="checkbox" checked={obj.data.autorizado} />;
  };
  const onChangesChange = async (changes) => {
    var string = JSON.stringify(changes);
    if (string != "[]") {
      var key = null;
      var model = null;
      var serial = null;
      var brand = null;
      var obj = eval(string);

      if (string.includes("model")) {
        model = obj[0].data.model;
        key = obj[0].key;
      }
      if (string.includes("serial")) {
        serial = obj[0].data.serial;
        key = obj[0].key;
      }
      if (string.includes("brand")) {
        brand = obj[0].data.brand;
        key = obj[0].key;
      }
    }
    if (string.includes("remove")) {
      console.log("remove");
      key = obj[0].key;
      try {
        const response = fetch(`http://localhost:8080/delete-equipment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: key,
          }),
        });
      } catch (err) {
        throw err;
        console.log(err);
      }
    } else {
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
            brand: brand,
          }),
        });
      } catch (err) {
        throw err;
        console.log(err);
      }
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

        {/* <ColumnChooser caption={"teste"} width="100" enabled={true} />*/}
        <Column dataField={"model"} />
        <Column dataField={"serial"} sortOrder={"asc"} />

        <Column caption={"Marca"} dataField={"brand"} />

        <Column caption={"Pronto"} cellRender={renderProntoGridCell} />
        <Column caption={"Autorizado"} cellRender={renderAutorizadoGridCell} />
        <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
      </DataGrid>
    </div>
  );
}

export default DataTableEdit;
