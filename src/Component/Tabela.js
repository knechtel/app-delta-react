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

 const renderGridCell = (data) => {
   var b = "https://www.google.com/search?q=sun";
   return (
     <a href={b} target="_blank" rel="noopener noreferrer">
       Website
     </a>
   );
 };
 function Tabela({ list }) {
   for (let key in list) {
     var name = list[key].name;

     console.log(name);
   }
   return (
     <div>
       <DataGrid dataSource={list} keyExpr={"id"} allowColumnReordering={true}>
         <Grouping autoExpandAll={true} border="1" />
         <FilterRow visible={true} />
         <Selection mode={"multiple"} />
         <Editing mode="row" allowUpdating={true} allowDeleting={true} />
         <Column dataField="id" allowEditing={false}></Column>

         <Column dataField={"name"} />
         <Column dataField={"email"} />
         <Column
           dataField={"Website"}
           allowEditing={false}
           alignment="center"
           width={100}
           cellRender={renderGridCell}
         />

         <Column dataField={"cpf"} />

         <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} />
         <Paging defaultPageSize={10} />
       </DataGrid>
     </div>
   );
 }

export default Tabela;
