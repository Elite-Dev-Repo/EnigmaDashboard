import React from "react";
import { columns, type Payment } from "./Columns";
import { DataTable } from "./DataTable";
import usersData from "../db.json";

function UserTable() {
  const data = usersData as Payment[];

  return (
    <div className="mt-10 bg-background p-6 rounded-sm shadow-sm border border-border ">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default UserTable;
