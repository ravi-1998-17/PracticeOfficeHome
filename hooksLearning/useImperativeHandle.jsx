//Parent Component
const Practice = () => {
  const inputRef = useRef();

  return (
    <div>
      <Child ref={inputRef} />
      <Buttons onClick={() => inputRef.current.focusInput()}>
        Focus Input
      </Buttons>
      <Buttons onClick={() => inputRef.current.clearInput()}>
        Clear Input
      </Buttons>
    </div>
  );
};

export default Practice;


//Child Component

// import React, { forwardRef, useImperativeHandle, useRef } from "react";
// import Buttons from "./UI/Buttons";

// const Child = forwardRef((props, ref) => {
//   console.log("Child rendered");

//   const inputRef = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       clearInput() {
//         inputRef.current.value = "";
//       },
//       focusInput() {
//         inputRef.current.focus();
//       }
//     };
//   });

//   return (
//     <>
//       <div>
//         <input type="text" ref={inputRef} placeholder="Type something..." />;
//       </div>
//     </>
//   );
// });

// export default Child;
