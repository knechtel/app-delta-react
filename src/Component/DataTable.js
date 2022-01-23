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
      console.log("olha isso  b ->  " + string);
      var key = null;
      var model = null;
      var serial = null;
      var marca = null;
      var obj = eval(string);
      if (string.includes("model")) {
        console.log("ver aqui esse = key =  " + obj[0].data.model);
        console.log("ver aqui esse = key =  " + obj[0].key);
        model = obj[0].data.model;
        key = obj[0].key;
      }
      if (string.includes("serial")) {
        console.log("ver aqui esse = key =  " + obj[0].data.serial);
        console.log("ver aqui esse = key =  " + obj[0].key);
        serial = obj[0].data.serial;
        key = obj[0].key;
      }
      if (string.includes("marca")) {
        console.log("ver aqui esse = key =  " + obj[0].data.marca);
        console.log("ver aqui esse = key =  " + obj[0].key);
        marca = obj[0].data.marca;
        key = obj[0].key;
      }
    }
    //  console.log("olha isso   b[1][key] ->  " + b[1]["key"]);
    // console.log("aquiii!  deu certo >>>model > = " + changes[0].data.model);
    //console.log("aqui me interessa  -  ?>  " + changes[0].key);
    console.log(
      JSON.stringify({
        id: key,
        model: model,
        serial: serial,
        marca: marca,
      })
    );
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
