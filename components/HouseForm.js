import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Editor from 'react-pell';

const HouseForm = props => {
  const id = (props.house && props.house.id) || null;

  const [title, setTitle] = useState((props.house && props.house.title) || '');
  const [town, setTown] = useState((props.house && props.house.town) || '');
  const [price, setPrice] = useState((props.house && props.house.price) || 0);

  const [duration, setDuration] = useState(
    (props.house && props.house.duration) || 0
  );
  const [type, setType] = useState(
    (props.house && props.house.type) || 'Video Game'
  );
  const [picture, setPicture] = useState(
    (props.house && props.house.picture) || ''
  );
  const [description, setDescription] = useState(
    (props.house && props.house.description) || ''
  );
  const [guests, setGuests] = useState(
    (props.house && props.house.guests) || 0
  );
  const [roomOfPlay, setRoomOfPlay] = useState(
    (props.house && props.house.roomOfPlay) || ''
  );
  const [wifi, setWifi] = useState((props.house && props.house.wifi) || true);
  const [houseTemperatureInF, setTemperature] = useState(
    (props.house && props.house.houseTemperatureInF) || 65
  );
  const [freeParking, setFreeParking] = useState(
    (props.house && props.house.freeParking) || false
  );
  const [lightBeverageProvided, setLightBeverageProvided] = useState(
    (props.house && props.house.lightBeverageProvided) || false
  );
  const [lightSnackProvided, setLightSnackProvided] = useState(
    (props.house && props.house.lightSnackProvided) || false
  );

  const gameTypes = [
    'Video Game',
    'Tabletop Games',
    'Indoor Sports',
    'Outdoor Activities',
    'Other'
  ];

  const areaOfPlay = [
    'Living Room',
    'Kitchen',
    'Dinning Room',
    'Office',
    'Game Room',
    'Basement',
    'Back Yard',
    'Other'
  ];

  return (
    <div>
      <form
        onSubmit={async event => {
          event.preventDefault();
          try {
            const response = await axios.post(
              `/api/host/${props.edit ? 'edit' : 'new'}`,
              {
                house: {
                  id: props.edit ? id : null,
                  title,
                  town,
                  price,
                  picture,
                  description,
                  guests,
                  roomOfPlay,
                  houseTemperatureInF,
                  wifi,
                  freeParking,
                  lightBeverageProvided,
                  lightSnackProvided,
                  type,
                  duration
                }
              }
            );

            if (response.data.status === 'error') {
              alert(response.data.message);
              return;
            }
            Router.push('/host');
          } catch (error) {
            alert(error.response.data.message);
            return;
          }
        }}>
        <p>
          <label> Event Title </label>
          <input
            required
            onChange={event => setTitle(event.target.value)}
            type='text'
            placeholder='Event title'
          />
        </p>

        <p>
          <label>Town</label>
          <input
            id='Town'
            onChange={event => setTown(event.target.value)}
            type='text'
            placeholder='Town'
          />
        </p>

        <p>
          <label>Type of Game</label>
          <select onChange={event => setType(event.target.value)} value={type}>
            {gameTypes.map((item, key) => (
              <option value={item} key={key}>
                {item}
              </option>
            ))}
          </select>
        </p>

        <p>
          <label>Price per Guest</label>
          <input
            required
            onChange={event => setPrice(event.target.value)}
            type='number'
            placeholder='Price per person'
            value={price}
          />
        </p>

        <p>
          <label>Duration of Event in Minutes</label>
          <input
            required
            onChange={event => setDuration(event.target.value)}
            type='number'
            placeholder='Duration of event'
            value={duration}
          />
        </p>

        <p>
          <label>Event Picture URL</label>
          <input
            required
            onChange={event => setPicture(event.target.value)}
            type='text'
            placeholder='House picture url'
          />
        </p>

        <div>
          <label>Event Description</label>
          <Editor
            onChange={html => setDescription(html)}
            defaultContent={description}
            actions={['bold', 'underline', 'italic']}
          />
        </div>

        <div>
          <div>
            <p>
              <label>Number of Guests Allotted</label>
              <input
                required
                onChange={event => setGuests(event.target.value)}
                type='number'
                placeholder='Number of guests allotted'
                value={guests}
              />
            </p>

            <p>
              <label>Area of Event</label>
              <select
                onChange={event => setRoomOfPlay(event.target.value)}
                value={type}>
                {areaOfPlay.map((item, key) => (
                  <option value={item} key={key}>
                    {item}
                  </option>
                ))}
              </select>
            </p>

            <p>
              <label>Set Temperature in Farenheit Of House</label>
              <input
                required
                onChange={event => setTemperature(event.target.value)}
                type='number'
                placeholder='Your house temperature set at time of event'
                value={houseTemperatureInF}
              />
            </p>

            <p>
              <label>Wifi included?</label>
              <select onChange={event => setWifi(event.target.value)}>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </p>

            <p>
              <label>Light Beverages Provided?</label>
              <select
                onChange={event =>
                  setLightBeverageProvided(event.target.value)
                }>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </p>

            <p>
              <label>Light Snacks Provided?</label>
              <select
                onChange={event => setLightSnackProvided(event.target.value)}>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </p>

            <p>
              <label>Free Parking Onsite?</label>
              <select onChange={event => setFreeParking(event.target.value)}>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </p>
          </div>
        </div>

        {props.edit ? <button>Edit Event</button> : <button>Add Event</button>}
      </form>
      <style jsx>{`
        input[type='number'],
        select,
        textarea {
          display: block;
          padding: 20px;
          font-size: 20px !important;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          margin-bottom: 10px;
        }
        form p {
          display: grid;
        }

        .grid {
          display: grid;
          grid-template-columns: 50% 50%;
        }

        .grid > div {
          padding: 50px;
        }
      `}</style>

      <style jsx global>{`
        .pell-container {
          border: 1px solid #ccc;
        }
        .pell,
        .pell-content {
          box-sizing: border-box;
        }
        .pell-content {
          height: 300px;
          outline: 0;
          overflow-y: auto;
          padding: 10px;
        }
        .pell-actionbar {
          background-color: #fff;
          border-bottom: 1px solid hsla(0, 0%, 4%, 0.1);
        }
        .pell-button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          height: 30px;
          outline: 0;
          width: 30px;
          vertical-align: bottom;
          color: black;
        }
        .pell-button-selected {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
};

export default HouseForm;
