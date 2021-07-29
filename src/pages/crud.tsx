import React, { useEffect } from "react";
import MyInput from "../components/input";
import { IFormValues } from "../types";
import DataTable from "../components/dataTable";

interface IStorage extends IFormValues {
  id: number;
}

function Crud() {
  const [FormValue, setFormValue] = React.useState<IFormValues>();

  const [Storage, setStorage] = React.useState<IStorage[]>([]);
  const [EditMode, setEditMode] = React.useState<Boolean>(false);
  const [EditID, setEditID] = React.useState<number>(0);

  const addData = (fName: string, lName: string, address: string) => {
    setStorage([
      ...Storage,
      { firstName: fName, lastName: lName, address: address, id: Date.now() },
    ]);
  };

  const handleAdd = () => {
    FormValue &&
      addData(FormValue!.firstName, FormValue!.lastName, FormValue!.address);
    setFormValue(undefined);
  };

  useEffect(() => {
    console.log(Storage);
  }, [Storage]);

  const handleDelete = (id: number) => {
    setStorage([...Storage.filter((i) => i.id != id)]);
  };

  const handleInitEdit = (id: number) => {
    setEditID(id);
  };

  const handleEdit = () =>{
    let oldStorage = Storage;
    oldStorage = oldStorage.filter(i=>i.id!=EditID)
    let newValues = FormValue as IStorage;
    newValues.id = Date.now();
    oldStorage.push(newValues);
    setStorage(oldStorage)
    setEditMode(false)
    setFormValue(undefined);

  }

  return (
    <>
      <div className={"w-50  mx-auto bg-warning rounded p-2 m-2"}>
        <MyInput
          FormValue={FormValue}
          setFormValue={setFormValue}
          name={"firstName"}
          label={"First Name"}
        />
        <MyInput
          FormValue={FormValue}
          setFormValue={setFormValue}
          name={"lastName"}
          label={"Last Name"}
        />
        <MyInput
          FormValue={FormValue}
          setFormValue={setFormValue}
          name={"address"}
          label={"Address"}
        />

        <button
          onClick={()=>{EditMode ? handleEdit() : handleAdd()  } }
          type="button"
          className={`btn ${EditMode ? "btn-success" : "btn-primary"}  w-100`}
        >
          {EditMode ? "Save" : "Add"}
        </button>
      </div>

      <div className={"w-75 m-auto"}>
        <DataTable
          EditMode={EditMode}
          setEditMode={setEditMode}
          handleDelete={handleDelete}
          handleInitEdit={handleInitEdit}
          data={Storage}
        />
      </div>
    </>
  );
}

export default Crud;
