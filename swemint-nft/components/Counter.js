import { useState, useEffect } from "react";
import { Countdown } from "../business/time";
import styles from "../styles/Counter.module.css";

export const Counter = () => {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [loadng, setLoading] = useState("");

  useEffect(() => {
    setInterval(() => {
      setDays(Countdown().d);
      setHours(Countdown().h);
      setMinutes(Countdown().m);
      setSeconds(Countdown().s);
    }, 1000);
  }, [seconds]);

  return (
    <>
      <h3 className={styles.counter__title}>TIME REMINING</h3>
      <div className={styles.counter}>
        <div className={styles.time}>
          <div>{days}</div>
          <div className={styles.description}>DAYS</div>
        </div>
        <span className={styles.time}>:</span>
        <div className={styles.time}>
          <div>{hours}</div>
          <div className={styles.description}>HOURS</div>
          
        </div>
        <span className={styles.time}>:</span>
        <div className={styles.time}>
          <div>{minutes}</div>
          <div className={styles.description}>MINUTES</div>
          
        </div>
        <span className={styles.time}>:</span>
        <div className={styles.time}>
          <div>{seconds}</div>
          <div className={styles.description}>SECONDS</div>
          
        </div>
      </div>
    </>
  );
};

// export const Counter = () => {
//   const [days, setDays] = useState("");
//   const [hours, setHours] = useState("");
//   const [minutes, setMinutes] = useState("");
//   const [seconds, setSeconds] = useState("");
//   const [loadng, setLoading] = useState("");

//   useEffect(() => {
//     setInterval(() => {
//       setDays(Countdown().d);
//       setHours(Countdown().h);
//       setMinutes(Countdown().m);
//       setSeconds(Countdown().s);
//     }, 1000);
//   }, [seconds]);

//   var digitSegments = [
//     [1,2,3,4,5,6],
//     [2,3],
//     [1,2,7,5,4],
//     [1,2,7,3,4],
//     [6,7,2,3],
//     [1,6,7,3,4],
//     [1,6,5,4,3,7],
//     [1,2,3],
//     [1,2,3,4,5,6,7],
//     [1,2,7,3,6]
// ]

// document.addEventListener('DOMContentLoaded', function() {
//   var _hours = document.querySelectorAll('.hours');
//   var _minutes = document.querySelectorAll('.minutes');
//   var _seconds = document.querySelectorAll('.seconds');

//   setInterval(function() {
//     var date = new Date();
//     var hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();

//     setNumber(_hours[0], Math.floor(hours/10), 1);
//     setNumber(_hours[1], hours%10, 1);

//     setNumber(_minutes[0], Math.floor(minutes/10), 1);
//     setNumber(_minutes[1], minutes%10, 1);

//     setNumber(_seconds[0], Math.floor(seconds/10), 1);
//     setNumber(_seconds[1], seconds%10, 1);
//   }, 1000);
// });

// var setNumber = function(digit, number, on) {
//   var segments = digit.querySelectorAll('.segment');
//   var current = parseInt(digit.getAttribute('data-value'));

//   // only switch if number has changed or wasn't set
//   if (!isNaN(current) && current != number) {
//     // unset previous number
//     digitSegments[current].forEach(function(digitSegment, index) {
//       setTimeout(function() {
//         segments[digitSegment-1].classList.remove('on');
//       }, index*45)
//     });
//   }

//   if (isNaN(current) || current != number) {
//     // set new number after
//     setTimeout(function() {
//       digitSegments[number].forEach(function(digitSegment, index) {
//         setTimeout(function() {
//           segments[digitSegment-1].classList.add('on');
//         }, index*45)
//       });
//     }, 250);
//     digit.setAttribute('data-value', number);
//   }
// }

//   return (
//     <div className="clock">
//   <div className="digit hours">
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//   </div>

//   <div className="digit hours">
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//   </div>

//   <div className="separator"></div>

//   <div className="digit minutes">
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//   </div>

//   <div className="digit minutes">
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//   </div>

//   <div className="separator"></div>

//   <div className="digit seconds">
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//   </div>

//   <div className="digit seconds">
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//     <div className="segment"></div>
//   </div>
// </div>
//   );
// };

export default Counter;
