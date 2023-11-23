import DefaultLayout from '../layout/DefaultLayout';
import { useState, useEffect } from 'react'
import './index.css';
import Modal from "../modal/Modal";

export const ServiceList = (props) => {
  const { placeId, placename, rating } = props

  const [modal, setModal] = useState(false);
  const [pName, setPname] = useState("")
  const [pid, setPid] = useState("");
  const [pSeat, setPSeat] = useState("");
  const [pRating, setPRating] = useState("");

  const [selectedOperation, setSelectedOperation] = useState("");

  const handleClose = () => {
    setModal(false);
  };

  const handleEdit = () => {
    setSelectedOperation("Edit");
    fetchCowork(placeId)
    setModal(true)
  }

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:4000/cowork/update/${pid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          placename: pName,
          rating: pRating,
          seat: pSeat
        }),
      });
      const data = await response.json();
      if (data.success === true) {
        setModal(false)
        window.location.reload()
      }
    } catch (error) {
      console.error("Error fetching cowork:", error);
    }
  }

  const fetchCowork = async (key) => {
    try {
      const response = await fetch(`http://localhost:4000/cowork/get/${key}`);
      const data = await response.json();
      setPname(data.data[0].placeName);
      setPid(data.data[0].placeId);
      setPRating(data.data[0].rating);
      setPSeat(data.data[0].seat);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  return (
    <div className="listinfo">
    <p classname="coname">{placename}</p>
    <p classname="ratinglist">{rating}</p>
      <button type='submit' onClick={handleEdit} id='edit'>
      <img src={`${process.env.PUBLIC_URL}/modify.png`} alt="manageop" className="manageop" />
    </button>
    <button type='submit' id='delete'>
      <img src={`${process.env.PUBLIC_URL}/delete.png`} alt="manageop" className="manageop" />
      </button>
      {modal && (
        <Modal onClose={handleClose}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>{selectedOperation} Co-working</h2>
            </div>
            <div className="edituser-content">
              <label>Place Name</label>
              <input className="input" type="text" value={pName} onChange={(e) => setPname(e.target.value)} />
              <label>Rating</label>
              <input className="input" type="text" value={pRating} onChange={(e) => setPRating(e.target.value)} />
              <label>Seat</label>
              <input className="input" type="text" value={pSeat} onChange={(e) => setPSeat(e.target.value)} />
              <br />
              <div className="edit-modal-button">
                <button onClick={handleUpdate}>SAVE CHANGE</button>
              </div>
            </div>
          </div>
        </Modal>
      )}
  </div>);

}

function Service() {
  const [coworks, setcoWork] = useState([]);

  const fetchCoworks = async () => {
    try {
      const response = await fetch("http://localhost:4000/cowork/list");
      const data = await response.json();
      setcoWork(data.list);
    } catch (error) {
      console.error("Error fetching coworks:", error);
    }
  };

  useEffect(() => {
    fetchCoworks();
  }, []);


  return (
    <div className='accountmanagement'>
      <div className="tablehead2">
        <p className="coname">co-working space</p>
        <p className="ratinglist">rating</p>
        <p className="coedit">modify</p>
        <p className="codelete">delete</p>
      </div>
      <div className='allaccount'>
        {coworks.map((cowork) => (
          <ServiceList placeId={cowork.placeId} placename={cowork.placeName} rating={cowork.rating} />
        ))}
      </div>
    </div>

  );
}

export default Service;