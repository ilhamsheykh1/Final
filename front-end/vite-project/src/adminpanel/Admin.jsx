import './Admin.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { coinId, title, description } = location.state || {};

  const [coinData, setCoinData] = useState({
    id: coinId || null,
    title: title || '',
    faceValue: '',
    yearOfIssue: '',
    price: '',
    country: '',
    metal: '',
    shortDescription: description || '',
    longDescription: '',
    obverseImage: '',
    reverseImage: '',
  });

  const handleSave = () => {
    navigate('/edit', {
      state: {
        updatedCoin: {
          id: coinData.id,
          title: coinData.title,
          description: coinData.shortDescription,
        },
      },
    });
  };

  return (
    <div className="AdminContainer">
      <h1 className="AdminTitle">Admin Panel</h1>
      <div className="FormContainer">
        <div className="LeftColumn">
          <label className="InputLabel">Coin name</label>
          <input
            className="TextInput"
            type="text"
            value={coinData.title}
            onChange={(e) => setCoinData({ ...coinData, title: e.target.value })}
          />
          <label className="InputLabel">Face value</label>
          <input
            className="TextInput"
            type="text"
            onChange={(e) => setCoinData({ ...coinData, faceValue: e.target.value })}
          />
          <label className="InputLabel">Year of issue</label>
          <input
            className="TextInput"
            type="text"
            onChange={(e) => setCoinData({ ...coinData, yearOfIssue: e.target.value })}
          />
          <label className="InputLabel">Price</label>
          <input
            className="TextInput"
            type="text"
            onChange={(e) => setCoinData({ ...coinData, price: e.target.value })}
          />
          <label className="InputLabel">Country</label>
          <input
            className="TextInput"
            type="text"
            onChange={(e) => setCoinData({ ...coinData, country: e.target.value })}
          />
          <label className="InputLabel">Metal</label>
          <input
            className="TextInput"
            type="text"
            onChange={(e) => setCoinData({ ...coinData, metal: e.target.value })}
          />
        </div>

        <div className="MiddleColumn">
          <label className="InputLabel">Short description</label>
          <textarea
            className="TextAreaInput"
            rows="3"
            value={coinData.shortDescription}
            onChange={(e) => setCoinData({ ...coinData, shortDescription: e.target.value })}
          ></textarea>
          <label className="InputLabel">Long description</label>
          <textarea
            className="TextAreaInput"
            rows="5"
            onChange={(e) => setCoinData({ ...coinData, longDescription: e.target.value })}
          ></textarea>
        </div>

        <div className="RightColumn">
          <label className="InputLabel">Link to obverse image</label>
          <input
            className="TextInput"
            type="text"
            onChange={(e) => setCoinData({ ...coinData, obverseImage: e.target.value })}
          />
          <label className="InputLabel">Link to reverse image</label>
          <input
            className="TextInput"
            type="text"
            onChange={(e) => setCoinData({ ...coinData, reverseImage: e.target.value })}
          />
        </div>
      </div>

      <div className="ButtonContainer">
        <button className="CancelButton" onClick={() => navigate('/edit')}>
          Cancel
        </button>
        <button className="SaveButton" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Admin;
