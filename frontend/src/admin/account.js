import DefaultLayout from "../layout/DefaultLayout";
import { useState, useEffect } from "react";
import "./index.css";
import Modal from "../modal/Modal";

export const AccountList = (props) => {

  const { userId, username, userrole, email } = props

  const [modal, setModal] = useState(false);
  const [user, setUsers] = useState([]);
  const [uname, setUsername] = useState("");
  const [uid, setUid] = useState("");
  const [urole, setUrole] = useState("");
  const [uemail, setEmail] = useState("");

  const [selectedOperation, setSelectedOperation] = useState("");

  const handleEdit = (props) => {
    setSelectedOperation("Edit");
    fetchUser(userId);
    setModal(true);
  };

  const handleDelete = async (key) => {
    setSelectedOperation("Delete")
    if (window.confirm("Do you want to delete user?")) {
      try {
        const response = await fetch(`http://localhost:4000/admin/users/${key}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        if (data.success === true) {
          window.location.reload()
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:4000/admin/users/${uid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: uname,
          role: urole,
          email: uemail
        }),
      });
      const data = await response.json();
      if (data.success === true) { 
        setModal(false)
        window.location.reload()
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  const fetchUser = async (key) => {
    try {
      const response = await fetch(`http://localhost:4000/admin/users/${key}`);
      const data = await response.json();
      setUsername(data.users[0].userName);
      setUid(data.users[0].userId);
      setUrole(data.users[0].role);
      setEmail(data.users[0].email);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  return (
    <div className="listinfo">
      <p className="username">{username}</p>
      <p className="userrole">{userrole}</p>
      <p className="useremail">{email}</p>
      <button type="submit" id="edit" onClick={handleEdit}>
        <img
          src={`${process.env.PUBLIC_URL}/modify.png`}
          alt="manageop"
          className="manageop"
        />
      </button>
      <button type="submit" onClick={() => handleDelete(userId)} id="delete">
        <img
          src={`${process.env.PUBLIC_URL}/delete.png`}
          alt="manageop"
          className="manageop"
        />
      </button>
      {modal && (
        <Modal onClose={handleClose}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>{selectedOperation} Account</h2>
            </div>
            <div className="edituser-content">
              <label>Username</label>
              <input value={uname} onChange={(e) => setUsername(e.target.value)} className="input" type="text" />
              <label>E-mail</label>
              <input value={uemail} onChange={(e) => setEmail(e.target.value)} className="input" type="text" />
              <label>Role</label>
              <input value={urole} onChange={(e) => setUrole(e.target.value)} className="input" type="text" />
              <br />
              <div className="edit-modal-button">
                <button onClick={handleUpdate}>SAVE CHANGE</button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
function Account() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:4000/admin/users");
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="accountmanagement">
      <div className="tablehead">
        <p className="namehead">username</p>
        <p className="rolehead">userrole</p>
        <p className="emailhead">email</p>
        <p className="edithead">modify</p>
        <p className="deletehead">delete</p>
      </div>
      <div className="allaccount">
        {users.map((user) => {
          return (
            <AccountList userId={user.userId} username={user.userName} userrole={user.role} email={user.email} />
          )
        })}
      </div>
    </div>
  );
}

export default Account;
