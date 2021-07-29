import React from "react";

interface IDataTable {
  data: {
    firstName: string;
    lastName: string;
    address: string;
    id: number;
  }[];
  handleDelete: (id: number) => void;
  setEditMode: (mode: Boolean) => void;
  EditMode: Boolean;
  handleInitEdit: (id: number) => void;
}

const DataTable: React.FC<IDataTable> = (props) => {
  const handleClick = (id: number) => {
    props.setEditMode(true);
    props.handleInitEdit(id);
  };
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.address}</td>

                <td>
                  {props.EditMode ? (
                    ""
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          handleClick(item.id);
                        }}
                        type="button"
                        className="btn btn-info mx-1"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          props.handleDelete(item.id);
                        }}
                        type="button"
                        className="btn btn-danger mx-1"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;

