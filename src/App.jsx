import './App.scss';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [storenum, setStorenum] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [register, setRegister] = useState('');

  const parseDate = (date) => {
    let parts = date.split('/');
    if (parts.length !== 3) return '';
    const [day, month, year] = parts;
    return `${day}${month}${year.slice(2)}`;
  };

  const parseTime = (time) => {
    // Convert to military time based on last two characters AM/PM assuming user inputted correctly
    const meridiem = time.slice(-2);
    const timeOnly = time.slice(0, -2);
    let [hours, minutes] = timeOnly.split(':').map(Number);

    if (meridiem == 'AM' && hours === 12) {
      hours = 0;
    } else if (meridiem == 'PM' && hours !== 12) {
      hours += 12;
    }

    return `${String(hours).padStart(2, '0')}${String(minutes).padStart(2, '0')}`;
  };

  return (
    <div className="main">
      <div className="input-section">
        <h1>Enter:</h1>
        <div className="group">
          {' '}
          <Input
            name="storenum"
            placeholder="0000"
            label="Store number"
            value={storenum}
            valueChange={setStorenum}
          />
          <Input
            name="register"
            placeholder="123456"
            label="Register"
            value={register}
            valueChange={setRegister}
          />
        </div>

        <div className="group">
          <Input
            name="date"
            placeholder="DD/MM/YYYY"
            label="Date"
            value={date}
            valueChange={setDate}
          />
          <Input
            name="time"
            placeholder="12:00PM"
            label="Time"
            value={time}
            valueChange={setTime}
          />
        </div>

        <a
          href={`https://customer.kfc-listens.com/jfe/form/SV_aY6bDyk1fZi59iK?S=${storenum}&D=${parseDate(date)}&T=${parseTime(time)}&U=${register}&V=2&Source=QR`}
          target="_blank"
          className="link"
        >
          {'>'} Go to survey
        </a>

        <div className="notes">
          <h3>Did not work? Either:</h3>
          <p>(1) Check you are doing it within the 3-day deadline</p>
          <p>
            (2) Check you copied the date/time format exactly as the placeholder - include /, :,
            AM/PM, etc.
          </p>
          <p>
            (3) The code doesn't work. Find a black pen and start colouring the squares hahahaha
          </p>
          <div className="asof">
            Works as of 1/08/2026 for the past couple of receipts. I never found out what the last
            variable v=2 was in the link, but i'm guessing it's the version number? If so, the code
            may not work next update, just let me know and I'll see what I can do.
          </div>
        </div>
      </div>
      <div className="example">
        <img src="src/assets/receipt.png" alt="example receipt" />
      </div>
    </div>
  );
}

export default App;
