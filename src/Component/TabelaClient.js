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

const onChangesChange = async (changes) => {
  var string = JSON.stringify(changes);
  if (string != "[]") {
    var name = null;
    var email = null;
    var cpf = null;
    var key = null;
    var obj = eval(string);
    console.log("ver agora");
    console.log(obj);

    if (string.includes("remove")) {
      console.log("remove");
      key = obj[0].key;
      try {
        const response = fetch(`http://localhost:8080/client-delete`, {
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
      if (string.includes("name")) {
        name = obj[0].data.name;
        key = obj[0].key;
      }
      if (string.includes("email")) {
        email = obj[0].data.email;
        key = obj[0].key;
      }
      if (string.includes("cpf")) {
        cpf = obj[0].data.cpf;
        key = obj[0].key;
      }
      try {
        const response = fetch(`http://localhost:8080/client-update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: key,
            name: name,
            email: email,
            cpf: cpf,
          }),
        });
      } catch (err) {
        throw err;
        console.log(err);
      }
    }
  }
};
const renderGridCell = (data) => {
  var b = "http://localhost:3000/edit/" + data.text;
  return <a href={b}>{data.text}</a>;
};
function TabelaClient({ list }) {
  for (let key in list) {
    var id = list[key].id;
    list[key].website = id;
    // console.log(name);
  }
  return (
    <div>
      <DataGrid dataSource={list} keyExpr={"id"} allowColumnReordering={true}>
        <Grouping autoExpandAll={true} border="1" />
        <FilterRow visible={true} />
        <Selection mode={"multiple"} />
        <Editing
          onChangesChange={onChangesChange}
          mode="row"
          allowUpdating={true}
          allowDeleting={true}
          confirmDelete={true}
        />

        <Column dataField={"name"} />
        <Column dataField={"email"} />
        <Column
          dataField={"website"}
          caption={"Edit"}
          allowEditing={false}
          alignment="center"
          cellRender={renderGridCell}
        />

        <Column dataField={"cpf"} />

        <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
      </DataGrid>
    </div>
  );
}

export default TabelaClient;
