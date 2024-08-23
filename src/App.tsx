// import { useRef, useState } from "react";
import "./App.css";
// import axios from "axios";
import { Button, Table } from "antd";

function App() {
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  // });

  // const [dataSource, setDataSource] = useState([]);
  // const refEdit = useRef({ isEdit: false, id: "" });

  const column = [
    {
      key: "_id",
      dataIndex: "_id",
      title: "ID",
    },
    {
      key: "name",
      dataIndex: "name",
      title: "Name",
    },
    {
      key: "email",
      dataIndex: "email",
      title: "Email",
    },
    {
      key: "action",
      dataIndex: "action",
      title: "Action",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: () => {
        return (
          <div style={{ display: "flex", gap: "12px" }}>
            <Button
              size="small"
              type="primary"
              // onClick={() => {
              //   refEdit.current = { isEdit: true, id: record._id };
              //   setUserData({ email: record.email, name: record.name });
              // }}
            >
              EDIT
            </Button>
            <Button
              size="small"
              danger
              // onClick={() => {
              //   handleDelete(record._id);
              // }}
            >
              DELETE
            </Button>
          </div>
        );
      },
    },
  ];

  // const handleDelete = async (id: string) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/user/${id}`);
  //     onGetUser();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleAddUser = async () => {
  //   const url = refEdit.current.isEdit
  //     ? `http://localhost:3001/user/${refEdit.current.id}`
  //     : "http://localhost:3001/user";
  //   await axios
  //     .post(url, userData)
  //     .then((res) => res)
  //     .catch((err) => console.log(err));
  //   refEdit.current = { isEdit: false, id: "" };
  //   onGetUser();
  // };

  // const onGetUser = async () => {
  //   const res = await axios
  //     .get("http://localhost:3001/userList")
  //     .then((res) => res?.data)
  //     .catch((err) => console.log(err));
  //   if (res?.data) {
  //     setDataSource(res.data);
  //   }
  // };

  // const onGetAdmin = async () => {
  //   await axios
  //     .get("http://localhost:3001/admin")
  //     .then((res) => res?.data)
  //     .catch((err) => console.log(err));
  // };

  // const handleAddAdmin = async () => {
  //   const url = "http://localhost:3001/admin";
  //   await axios
  //     .post(url, { firstName: "test", lastName: "sup", avatar: "no" })
  //     .then((res) => res)
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      {/* <input
        value={userData.name}
        placeholder="input name"
        onChange={(e) =>
          setUserData((pre) => ({ ...pre, name: e.target.value }))
        }
      ></input>
      <input
        value={userData.email}
        placeholder="input email"
        onChange={(e) =>
          setUserData((pre) => ({ ...pre, email: e.target.value }))
        }
      ></input>
      <button onClick={handleAddUser}>Add User</button>
      <button onClick={onGetUser}>Get User</button> */}
      <Table columns={column} dataSource={[]} bordered />
      <img src="https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg" />
      {/* <button onClick={onGetAdmin}>Get admin</button>
      <button onClick={handleAddAdmin}>Add User</button> */}
    </div>
  );
}

export default App;
