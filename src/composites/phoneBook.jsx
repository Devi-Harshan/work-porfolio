import React, { useState } from "react";
import { Card, Input } from "@chakra-ui/react";
const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm(props) {
  const initialObj = {
    firstName: "C",
    lastName: "B",
    phone: "123",
  };

  const [user, setUser] = useState(initialObj);
  const handleSubmit = (e) => {
    if (!user.firstName || !user.lastName || !user.phone) return;
    props.addUsers(user);
    setUser(initialObj);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      align="center"
      justifyContent={"center"}
      padding={"1rem"}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        style={style.form.container}
      >
        <label>First name:</label>
        <br />
        <Input
          style={style.form.inputs}
          className="userFirstname"
          name="firstName"
          type="text"
          value={user.firstName}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label>Last name:</label>
        <br />
        <Input
          style={style.form.inputs}
          className="userLastname"
          name="lastName"
          type="text"
          value={user.lastName}
          onChange={handleChange}
        />
        <br />
        <label>Phone:</label>
        <br />
        <Input
          style={style.form.inputs}
          className="userPhone"
          name="phone"
          type="text"
          value={user.phone}
          onChange={handleChange}
        />
        <br />
        <Input
          style={style.form.submitBtn}
          className="submitButton"
          type="submit"
          value="Add User"
        />
      </form>
    </Card>
  );
}

function InformationTable(props) {
  console.log(props.users);
  const x = props.users.sort((a, b) => a.lastName.localeCompare(b.lastName));
  return (
    <table style={style.table} className="informationTable">
      <thead>
        {x.length > 0 &&
          x.map((e, i) => {
            return (
              <tr key={i}>
                <th style={style.tableCell}>{e.firstName}</th>
                <th style={style.tableCell}>{e.lastName}</th>
                <th style={style.tableCell}>{e.phone}</th>
              </tr>
            );
          })}
      </thead>
    </table>
  );
}

export function Application(props) {
  const userObj = [];
  const [users, setUsers] = useState(userObj);

  const addUsers = (user) => {
    setUsers([...users, user]);
  };
  return (
    <section>
      <PhoneBookForm addUsers={addUsers} />
      <InformationTable users={users} />
    </section>
  );
}
