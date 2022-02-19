import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const box = useRef();
    const [state, setState] = useState(true);
    const styles = () => {
        return state
            ? {
                  height: 40,
                  width: 60,
                  color: "white"
              }
            : {
                  height: 150,
                  width: 80,
                  color: "white"
              };
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={box}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={styles()}
            >
                <small>Блок</small>
            </div>
            <button
                className="btn btn-secondary mt-3"
                onClick={() => setState(prevState => !prevState)}
            >
                Change sizes
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
