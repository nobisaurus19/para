import DefaultLayout from '../layout/DefaultLayout';
import { useState } from 'react'
import './index.css';
import Account from './account'
import Service from './service'
import UserModal from '../modal/UserModal';
import ServiceModal from '../modal/ServiceModal';


const option = {
  Account: Symbol("account"),
  Service: Symbol("service"),
}

function Admin() {

  const [adminoption, setOption] = useState(option.Account)
  const [adminModal, setAdminModal] = useState(false);
  const [serviceModal, setServiceModal] = useState(false)

  const handleAdminSubmit = async (event) => {
    event.preventDefault(); // prevent the default form submit action

    const username = document.getElementById('txtUsername').value;
    const password = document.getElementById('txtPassword').value;
    const email = document.getElementById('txtEmail').value;

    try {
      const response = await fetch('http://localhost:4000/admin/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, fullname: "kohub admin", password, email }),
      });
      const data = await response.json();
      if (data.success) {
        setAdminModal(false)
      }

    } catch (error) {
      console.error(error);
    }
  };

  const handleCoworkSubmit = async (event) => {
    event.preventDefault(); // prevent the default form submit action

    const placename = document.getElementById("txtPlaceName").value;
    const descr = document.getElementById("txtDescr").value;
    const rating = document.getElementById("txtRating").value;
    const seat = document.getElementById("txtSeat").value;
    const parking = document.getElementById("chkParking").value;
    const freewifi = document.getElementById("chkFreeWifi").value;
    const charging = document.getElementById("chkCharging").value;
    const food = document.getElementById("chkFood").value;
    const bakery = document.getElementById("chkBakery").value;
    const meetingroom = document.getElementById("chkMeetingRoom").value;
    const quietzone = document.getElementById("chkQuietZone").value;
    const smokezone = document.getElementById("chkSmokeZone").value;
    const locate = document.getElementById("txtLocate").value;
    const map = document.getElementById("txtMap").value;
    const image = document.getElementById("txtImage").value;

    try {
      const response = await fetch('http://localhost:4000/cowork/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ placename, descr, rating, seat, parking, freewifi, charging, food, bakery, meetingroom, quietzone, smokezone, locate, map, image }),
      });
      const data = await response.json();
      if (data.success) {
        setServiceModal(false)
      }

    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setAdminModal(false);
    setServiceModal(false);
  };

  const handleCreateAdmin = () => {
    setAdminModal(true)
  }

  const handleCreateService = () => {
    setServiceModal(true)
  }


  return (
    <DefaultLayout>
      <div className='manageoption'>
        <a
          className={adminoption === option.Account ? 'present' : ''}
          href="#"
          onClick={() => setOption(option.Account)}
        >
          ACCOUNT MANAGEMENT
        </a>{' '}
        <a
          className={adminoption === option.Service ? 'present' : ''}
          href="#"
          onClick={() => setOption(option.Service)}
        >
          SERVICE MANAGEMENT
        </a>
        {adminoption === option.Account ? (
          <button type='submit' id='newacc' onClick={handleCreateAdmin}>+</button>
        ) : (
          <button type='submit' id='newservice' onClick={handleCreateService}>+</button>
        )
        }
      </div>
      {adminModal && (
        <UserModal onClose={handleClose}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create admin</h2>
            </div>
            <div className="edituser-content" >
              <label>Username</label>
              <input className="input" type="text" id='txtUsername' />
              <label>Password</label>
              <input className="input" type="text" id='txtPassword' />
              <label>Email</label>
              <input className="input" type="text" id='txtEmail' />
              <br />
              <div className="edit-modal-button">
                <button onClick={handleAdminSubmit}>CREATE ACCOUNT</button>
              </div>
            </div>
          </div>
        </UserModal>
      )
      }
      {serviceModal && (
        <ServiceModal onClose={handleClose}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create co-working</h2>
            </div>
            <div className="createscroll">
              <div className="editservice-content">
                <label>Place Name</label>
                <input className="input" type="text" id="txtPlaceName" />

                <label>Description</label>
                <input className="input" type="text" id="txtDescr" />

                <label>Rating</label>
                <input className="input" type="text" id="txtRating" />

                <label>Seat</label>
                <input className="input" type="text" id="txtSeat" />

                <label>Parking</label>
                <input className="input" type="text" id="chkParking" />

                <label>Free Wi-Fi</label>
                <input className="input" type="text" id="chkFreeWifi" />

                <label>Charging</label>
                <input className="input" type="text" id="chkCharging" />

                <label>Food</label>
                <input className="input" type="text" id="chkFood" />

                <label>Bakery</label>
                <input className="input" type="text" id="chkBakery" />

                <label>Meeting Room</label>
                <input className="input" type="text" id="chkMeetingRoom" />

                <label>Quiet Zone</label>
                <input className="input" type="text" id="chkQuietZone" />

                <label>Smoking Zone</label>
                <input className="input" type="text" id="chkSmokeZone" />

                <label>Location</label>
                <input className="input" type="text" id="txtLocate" />

                <label>Map</label>
                <input className="input" type="text" id="txtMap" />

                <label>Image</label>
                <input className="input" type="text" id="txtImage" />

              </div>
            </div>
            <div className="modal-button">
              <button onClick={handleCoworkSubmit}>CREATE CO-WORKING</button>
            </div>
          </div>
        </ServiceModal>
      )
      }
      {adminoption === option.Account ? (
        <Account />
      ) : (
        <Service />
      )
      }
    </DefaultLayout>
  );
}

export default Admin;