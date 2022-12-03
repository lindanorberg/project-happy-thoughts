/* eslint-disable no-underscore-dangle */
// import React, { useEffect } from 'react';
import React from 'react';
import { formatDistance } from 'date-fns';
// import { Singlethought } from './SingleTask';

export const ThoughtList = ({ loading, thoughtList, handleHeartButtonChange }) => {
  if (loading) {
    return (
      <p>THE PAGE IS LOADING</p>
    )
  }

  return (
    <section className="thoughtCointaner">
      {thoughtList.map((thought) => {
        return (
          // eslint-disable-next-line no-underscore-dangle
          <div key={thought._id} className="toughtMessage">
            <p>{thought.text}</p>
            <div className="bottomOnThought">
              <div className="heartCount">
                <button type="button" onClick={() => handleHeartButtonChange(thought._id)} className={thought.hearts === 0 ? 'noHeartBtn' : 'heartBtn'}>💗</button>
                <p className="heartCounter">x {thought.hearts}</p>
              </div>
              <p>{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
            </div>
          </div>
        )
      })}
    </section>

  );
}
