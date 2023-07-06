import React from 'react'

const Dashboard = () => {

  const menu = ["home", "about", "services", "blog", "contact", "login", "search"];

  const std_details = {
    name: "harish",
    age: 22,
    add: "Hyderabad"
  }

  const StudentDetails = [
    { name: "Harish", email: "harish@gmail.com", address: "CG" },
    { name: "dinesh", email: "dinesh@gmail.com", address: "Odisa" },
    { name: "jage", email: "jage@gmail.com", address: "Raipur" },
    { name: "raj", email: "raj@gmail.com", address: "Bilaspur" }
  ]

  const Data = [
    { Category: "Electronics", Products: ["TV", "Mobile"] },
    { Category: "Footwear", Products: ["Nike Casuals", "Lee Boot"] }
  ];
  return (
    <>
      <div className="container my-5">

        <div className=" nav navbar-lg">
          {
            menu.map((value) => {
              return (
                <button className='btn btn-outline-primary ms-3 text-capitalize'> {value} </button>
              )
            })
          }
        </div>
        <hr />
        <div className="text-center">
          <h1>Student Details</h1>
        </div>
        <div className="dropdown">
          <select name="students" className='form-select w-25' id="std">
            {
              StudentDetails.map((data) => {
                return (
                  <>
                    <option hidden>Search Name</option>
                    <option value={data.name}> {data.name} </option>
                  </>
                );
              })
            }
          </select>

        </div>
        <table className='table text-center table-hover mt-2'>
          <thead className='table-dark'>
            <tr>
              <th>Name</th>
              <th>E - mail</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              StudentDetails.map((data) => {
                return (
                  <tr key={data.name}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.address}</td>
                    <td>
                      <button className="btn btn-success"><span className="bi bi-eye-fill"></span></button>
                      <button className="btn btn-warning ms-2"><span className="bi bi-pen"></span></button>
                      <button className="btn btn-danger ms-2"><span className="bi bi-trash"></span></button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>


        <div className="nested_data">
          {
            Data.map((Category) => {
              return (
                <details key={Category.Category}>
                  <summary> {Category.Category} </summary>
                  <ul>
                    {
                      Category.Products.map((item) => {
                        return (<li key={item}> {item} </li>)
                      })
                    }
                  </ul>
                </details>
              )
            })
          }
        </div>

        <div className="shopping">
          <ol>
            {
              Data.map((Category) => {
                return (
                  <li key={Category.Category}>
                    {Category.Category}
                    <ul>
                      {
                        Category.Products.map((item) => {
                          return (<li key={item}> {item} </li>)
                        })
                      }
                    </ul>
                  </li>
                )
              })
            }
          </ol>

        </div>

      </div>
    </>
  )
}

export default Dashboard;
