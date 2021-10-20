import React from "react";
import state1 from "../../common/Assets/progressive/1.png";
import state2 from "../../common/Assets/progressive/2.png";
import state3 from "../../common/Assets/progressive/3.png";
import state4 from "../../common/Assets/progressive/4.png";
import state5 from "../../common/Assets/progressive/5.png";
import state6 from "../../common/Assets/progressive/6.png";
import state7 from "../../common/Assets/progressive/7.png";
import state8 from "../../common/Assets/progressive/8.png";
import state9 from "../../common/Assets/progressive/9.png";
import state10 from "../../common/Assets/progressive/10.png";
import state11 from "../../common/Assets/progressive/11.png";
import "./styles/progressiveBar.css";
import HeaderBox from "../../components/headerBox";

function ProgressBar(props) {
  const state = 6;
  const stateOne = 9;
  const stateTwo = 5;
  return (
    <HeaderBox title={"Running Projects"}>
      <div className="details">
        <h3>{props.pname}</h3>
        {(() => {
          switch (state) {
            case 1:
              return <img src={state1} alt="pic" className="imgUpdate" />;
            case 2:
              return <img src={state2} alt="pic" className="imgUpdate" />;
            case 3:
              return <img src={state3} alt="pic" className="imgUpdate" />;
            case 4:
              return <img src={state4} alt="pic" className="imgUpdate" />;
            case 5:
              return <img src={state5} alt="pic" className="imgUpdate" />;
            case 6:
              return <img src={state6} alt="pic" className="imgUpdate" />;
            case 7:
              return <img src={state7} alt="pic" className="imgUpdate" />;
            case 8:
              return <img src={state8} alt="pic" className="imgUpdate" />;
            case 9:
              return <img src={state9} alt="pic" className="imgUpdate" />;
            case 10:
              return <img src={state10} alt="pic" className="imgUpdate" />;
            case 11:
              return <img src={state11} alt="pic" className="imgUpdate" />;
          }
        })()}
      </div>
      <div className="details">
        <h3>{props.pname2}</h3>
        {(() => {
          switch (stateOne) {
            case 1:
              return <img src={state1} alt="pic" className="imgUpdate" />;
            case 2:
              return <img src={state2} alt="pic" className="imgUpdate" />;
            case 3:
              return <img src={state3} alt="pic" className="imgUpdate" />;
            case 4:
              return <img src={state4} alt="pic" className="imgUpdate" />;
            case 5:
              return <img src={state5} alt="pic" className="imgUpdate" />;
            case 6:
              return <img src={state6} alt="pic" className="imgUpdate" />;
            case 7:
              return <img src={state7} alt="pic" className="imgUpdate" />;
            case 8:
              return <img src={state8} alt="pic" className="imgUpdate" />;
            case 9:
              return <img src={state9} alt="pic" className="imgUpdate" />;
            case 10:
              return <img src={state10} alt="pic" className="imgUpdate" />;
            case 11:
              return <img src={state11} alt="pic" className="imgUpdate" />;
          }
        })()}
      </div>
      <div className="details">
        <h3>{props.pname3}</h3>
        {(() => {
          switch (stateTwo) {
            case 1:
              return <img src={state1} alt="pic" className="imgUpdate" />;
            case 2:
              return <img src={state2} alt="pic" className="imgUpdate" />;
            case 3:
              return <img src={state3} alt="pic" className="imgUpdate" />;
            case 4:
              return <img src={state4} alt="pic" className="imgUpdate" />;
            case 5:
              return <img src={state5} alt="pic" className="imgUpdate" />;
            case 6:
              return <img src={state6} alt="pic" className="imgUpdate" />;
            case 7:
              return <img src={state7} alt="pic" className="imgUpdate" />;
            case 8:
              return <img src={state8} alt="pic" className="imgUpdate" />;
            case 9:
              return <img src={state9} alt="pic" className="imgUpdate" />;
            case 10:
              return <img src={state10} alt="pic" className="imgUpdate" />;
            case 11:
              return <img src={state11} alt="pic" className="imgUpdate" />;
          }
        })()}
      </div>
    </HeaderBox>
  );
}

export default ProgressBar;
