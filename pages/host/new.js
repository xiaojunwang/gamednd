import { useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Layout from '../../components/Layout';
import axios from 'axios';

const NewEvent = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('Video Game');
  const [town, setTown] = useState('');
  const [picture, setPicture] = useState('');
  const [description, setDescription] = useState('');
  const [guests, setGuests] = useState(0);
  const [roomOfPlay, setRoomOfPlay] = useState('');
  const [wifi, setWifi] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [freeParking, setFreeParking] = useState(false);
  const [lightBeverageProvided, setLightBeverageProvided] = useState(false);
  const [lightSnackProvided, setLightSnackProvided] = useState(false);

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
    <Layout
      content={
        <div>
          <Head>
            <title>Add a new event</title>
          </Head>

          <form
            onSubmit={async event => {
              event.preventDefault();
              try {
                const response = await axios.post('/api/host/new', {
                  house: {
                    title,
                    town,
                    price,
                    picture,
                    description,
                    guests,
                    roomOfPlay,
                    temperature,
                    wifi,
                    freeParking,
                    lightBeverageProvided,
                    lightSnackProvided,
                    type
                  }
                });
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
              <input
                id='Town'
                onChange={event => setTown(event.target.value)}
                type='text'
                placeholder='Town'
              />
            </p>

            <p>
              <label>Type of Game</label>
              <select
                onChange={event => setType(event.target.value)}
                value={type}>
                {gameTypes.map((item, key) => (
                  <option value={item} key={key}>
                    {item}
                  </option>
                ))}
              </select>
            </p>

            <p>
              <label>Price per Event</label>
              <input
                required
                onChange={event => setPrice(event.target.value)}
                type='number'
                placeholder='Price per person'
                value={price}
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

            <p>
              <label>Event Description</label>
              <textarea
                required
                onChange={event => setDescription(event.target.value)}
                type='text'
                placeholder='Event description'></textarea>
            </p>

            <div>
              <div>
                <p>
                  <label>Number of Guests</label>
                  <input
                    required
                    onChange={event => setGuests(event.target.value)}
                    type='number'
                    placeholder='Number of guests'
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
                  <label>Set Temperature in Farenheit</label>
                  <input
                    required
                    onChange={event => setTemperature(event.target.value)}
                    type='number'
                    placeholder='Number of baths'
                    value={temperature}
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
                    onChange={event =>
                      setLightSnackProvided(event.target.value)
                    }>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                  </select>
                </p>

                <p>
                  <label>Free Parking Onsite?</label>
                  <select
                    onChange={event => setFreeParking(event.target.value)}>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                  </select>
                </p>
              </div>
            </div>

            <button>Add Event</button>
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
          `}</style>
        </div>
      }
    />
  );
};

export default NewEvent;
