import DataGrid, {
  Column,
  FilterRow,
  Grouping,
  Pager,
  Paging,
  Selection,
  Editing,
} from "devextreme-react/data-grid";
import { DELETE_CLIENT, EDIT_CLIENT_URL, UPDATE_CLIENT } from "./urls";
import React from "react";

const onChangesChange = async (changes) => {
  var string = JSON.stringify(changes);
  if (string != "[]") {
    var name = null;
    var email = null;
    var cpf = null;
    var key = null;
    var obj = eval(string);
    console.log(obj);

    if (string.includes("remove")) {
      console.log("remove");
      key = obj[0].key;
      try {
        const response = fetch(DELETE_CLIENT, {
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
      if (string.includes(NAME)) {
        name = obj[0].data.name;
        key = obj[0].key;
      }
      if (string.includes(EMAIL)) {
        email = obj[0].data.email;
        key = obj[0].key;
      }
      if (string.includes(CPF)) {
        cpf = obj[0].data.cpf;
        key = obj[0].key;
      }
      try {
        const response = fetch(UPDATE_CLIENT, {
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
  var b = EDIT_CLIENT_URL + data.text;
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

const NAME = "name";
const EMAIL = "email";
const CPF = "pf";
export default TabelaClient;
