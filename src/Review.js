import React, { useState } from "react";
import people from "./data";
import { FaQuoteRight, FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Review = () => {

    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkNumber = (number) => {
      if(number > people.length -1) {
        return 0;
      }
      if(number < 0) {
        return number.length -1;
      }    
      return number;

    }

    const prevPerson = () => {
      setIndex((index) => {
        let newIndex = index -1;
        return checkNumber(newIndex);
      });
    };

    const nextPerson = () => {
      setIndex((index) => {
        let newIndex = index +1;
         return checkNumber(newIndex);
      });
    };

    const randomPerson = () => {
      let randomNumber = Math.floor(Math.random() * people.length);
      if(randomNumber === index) {
        randomNumber = index + 1
      };
      setIndex(checkNumber(randomNumber));
    }


    return (
      <article className="review">
        <div className="img-container">
          <img src={image} alt={image} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="author"> {name} </h4>
        <p className="job"> {job} </p>
        <p className="info"> {text} </p>

        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaAngleLeft />
          </button>

          <button className="next-btn" onClick={nextPerson}>
            <FaAngleRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>surprise me</button>
      </article>
    );
}
 
export default Review;
