import React from "react";
import Button from "./Button";

const Switcher = ({feature, onChangeLeft, onChangeRight, leftButtonText, rightButtontext}) => {
   return (
      <div>
         <div>{feature}</div>
         <div>
            <Button onClick={onChangeLeft} text={leftButtonText} />
            <Button onClick={onChangeRight} text={rightButtontext} />
         </div>
      </div>
   );
};

export default Switcher;