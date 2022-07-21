import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [newUser, setNewUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/user")
      .then((res) => res.json())
      .then((data) => setNewUser(data));
  }, []);
  // console.log(newUser);

  // const handleUpdate = (id) => {
  //   const url=`http://localhost:7000/user/${id}`;
  //   fetch(url,{
  //     method:"PUT"
  //   })
  // };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`http://localhost:7000/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully deleted one item");
            const remainingUser = newUser.filter((pd) => pd._id !== id);
            setNewUser(remainingUser);
          }
        });
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Total User: {newUser.length} </h2>
      <section>
        {newUser.map((pd) => (
          <li key={pd._id}>
            name: {pd.name}:::::::email:{pd.email}
            <Link to={"/updateUser/" + pd._id}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(pd._id)}>Delete</button>
          </li>
        ))}
      </section>
    </div>
  );
};

export default AllUser;
