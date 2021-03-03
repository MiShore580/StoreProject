import React from "react";

class SaleCountDown extends React.Component {
  state = {
    minutes: 1,
    seconds: 8,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
          this.props.endSale();
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        {minutes === 0 && seconds === 0 ? (
          <h1>The sale is over!</h1>
        ) : (
          <h1>
            The sale will end in {minutes}:
            {seconds < 10 ? `0${seconds}` : seconds} minutes.
          </h1>
        )}
      </div>
    );
  }
}
export default SaleCountDown;

// import React from "react";
// import { useState, useEffect } from "react";

// const SaleCountDown = (props) => {
//   const { initialMinute = 0, initialSeconds = 5 } = props;
//   const [minutes, setMinutes] = useState(initialMinute);
//   const [seconds, setSeconds] = useState(initialSeconds);
//   useEffect(() => {
//     let myInterval = setTimeout(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       }
//       if (seconds === 0) {
//         if (minutes === 0) {
//           clearInterval(myInterval);
//           console.log("FINISH");
//           props.endSale();
//         } else {
//           setMinutes(minutes - 1);
//           setSeconds(59);
//         }
//       }
//     }, 1000);
//     return () => {
//       clearInterval(myInterval);
//     };
//   }, [minutes, props, seconds]);

//   return (
//     <div>
//       {minutes === 0 && seconds === 0 ? (
//         <h1>The sale is over!</h1>
//       ) : (
//         <h1>
//           {" "}
//           The sale will end in {minutes}:
//           {seconds < 10 ? `0${seconds}` : seconds}
//         </h1>
//       )}
//     </div>
//   );
// };

// export default SaleCountDown;
