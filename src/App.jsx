import { useState } from "react";
import { twMerge } from "tailwind-merge";

// - 카운트의 값을 `1, 10,100`  감소 / 증가 시키는 버튼이 있어야 합니다.
// - 카운트의 숫자가 `5, 50, 500` 이상일 때 각각 다른 색상으로 변환되어야 합니다.
//     - (예시)
//     - 5 이상: `green-500`
//     - 50 이상: `blue-500`
//     - 500 이상: `purple-500`
// - 카운트의 숫자가 `-5 , -50, -500` 이하일 때 각각 다른 색상으로 변환되어야 합니다.
//     - (예시)
//     - -5 이하: `red-500`
//     - -50 이하: `orange-500`
//     - -500 이하: `yellow-500`

function App() {
  const [counter, setCounter] = useState(0);

  const updateCounter = (num) => {
    setCounter(counter + num);
  };

  const backgroundClass = twMerge(
  'flex items-center justify-center h-screen bg-white ',
   counter >=5 && 'bg-lime-100',
   counter >=50 && 'bg-lime-200',
   counter >=500 && 'bg-lime-300',
   counter >=600 && 'bg-lime-400',
   counter <=-5 && 'bg-sky-200',
   counter <=-50 && 'bg-sky-300',
   counter <=-500 && 'bg-sky-400',
   counter <=-600 && 'bg-sky-600',
 )

  return (
    <div className={backgroundClass}>
      <div className="flex flex-col items-center justify-center gap-[20px] rounded-[10px] bg-white w-[250px] h-[250px]">
        <div className="font-stretch-200% font-bold">COUNTER : {counter}</div>
        <p className="flex gap-[30px] font-semibold font-stretch-150%">
          <button  onClick={() => {updateCounter(1);}}>+1</button>
          <button onClick={() => {updateCounter(-1);}}>-1</button>
        </p>
        <p className="flex gap-[30px] font-semibold font-stretch-150%">
          <button onClick={() => {updateCounter(10);}}>+10</button>
          <button onClick={() => {updateCounter(-10);}}>-10</button>
        </p>
        <p className="flex gap-[30px] font-semibold font-stretch-150%">
          <button onClick={() => {updateCounter(100);}}>+100</button>
          <button onClick={() => {updateCounter(-100);}}>-100</button>
        </p>
      </div>
    </div>
  );
}
export default App;
