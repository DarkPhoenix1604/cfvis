import fetchData from './api.js';
import './App.css';
import React, { useState } from 'react';
import moment from 'moment';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; let key;
function App() {
  const [k, setk] = useState("")
  const [data, setData] = useState(" ");
  async function fun(key) {
    try {
      const d = await fetchData(key);
      setData(d);
    } catch (e) {
      setData(" ");
    }
  }



  return (
    <div className="App">
      <div className='srch'>
        <input type="text"placeholder='Enter Username' className='input' onChange={(e) => { setk(e.target.value) }} />
        <button onClick={() => { fun(k) }} className='btn'>search</button>
      </div>
      {data !== " " ? (
        data.classOne.status === "OK" ?(
          <div className='resultPage'>
          {< div >
          <div className="profilePic">
            <img src={data.classOne.result[0].titlePhoto} alt={data.classOne.result[0].titlePhoto} />
          </div>
          <div className="Data">
            <div className="information">
              <p><span>handle: </span><span>{data.classOne.result[0].handle}</span></p>
              <p><span>max rank: </span><span>{data.classOne.result[0].maxRank}</span></p>
              <p><span>max rating: </span><span>{data.classOne.result[0].maxRating}</span></p>
              <p><span>rating: </span><span>{data.classOne.result[0].rating}</span></p>
              <p><span>Registered: </span><span>{moment(data.classOne.result[0].registrationTimeSeconds * 1000).format('YYYY-MM-DD')}</span></p>
              <p><span>Last Seen: </span><span>{moment(data.classOne.result[0].lastOnlineTimeSeconds * 1000).format('YYYY-MM-DD')}</span></p>
              <p><span>contribution: </span><span>{data.classOne.result[0].contribution}</span></p>
              <p><span>organization: </span><span>{data.classOne.result[0].organization}</span></p>
              <p><span>Friends: </span><span>{data.classOne.result[0].friendOfCount}</span></p>
            </div>
          </div>
          <div className="ratingChart">
            <div className="chartHeading">
              <p>Rating Chart</p>
            </div>
            <div className="chart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.classTwo.result} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="contestId" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="newRating" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>}
    </div>)
      :
   ( <div className='invalid'>
    <p>invalid username!</p>
    </div>)
    



  ) : (
    <div></div>
  )
}


    </div >
  );
}

export default App;
