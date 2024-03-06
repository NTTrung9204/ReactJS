import { useState, useEffect } from "react";

var isClicked = false;


function moveInContainer(element, container, x, y, childCount) {
    const rect = container.getBoundingClientRect();
    element.style.left = rect.left + rect.width / 2 - x + 'px';
    element.style.top = rect.top + rect.height - y - 25 * childCount - 15 + 'px';
}

function getCenterElement(element) {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };
}

function isContainer(element, x, y) {
    const rect = element.getBoundingClientRect();
    return (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
    );

}


const HanoiTower = function () {
    const [count, setCount] = useState(3);
    const [status, setStatus] = useState([Array(count).fill(0).map((_, index) => index), [], []]);

    useEffect(() => {
        const towerCell = document.getElementsByClassName("Tower_cell");
        const Tower = document.getElementsByClassName("Tower");

        document.addEventListener("mouseup", (e) => {
            isClicked = false;
            Array.from(Tower).forEach((tower, index) => {
                if(isContainer(tower, e.clientX, e.clientY) && e.target.classList.contains("Tower_cell")){
                    setStatus((prev) => {
                        const id = 1*e.target.getAttribute("data-id");
                        for(let i = 0; i < prev.length; i++) {
                            if(prev[i].includes(id)) {
                                prev[i] = prev[i].filter((item) => item !== id);
                            }
                        }
                        prev[index].push(id);
                        return prev;
                    });

                    e.target.style.transition = "all 0.3s";
                    const rect = Tower[0].getBoundingClientRect();
                    moveInContainer(e.target, tower, rect.left, rect.top, status[index].length);
                    return;
                }
            });

            const id = 1*e.target.getAttribute("data-id");
            for(let i = 0; i < status.length; i++) {
                if(status[i].includes(id) && e.target.classList.contains("Tower_cell")) {
                    e.target.style.transition = "all 0.3s";
                    const rect = Tower[0].getBoundingClientRect();
                    moveInContainer(e.target, Tower[i], rect.left, rect.top, status[i].length);
                    return;
                }
            }
        });

        Array.from(towerCell).forEach((cell, index) => {
            cell.addEventListener("mousedown", () => {
                isClicked = true;
                cell.style.transition = "all 0.0s";
            });

            cell.addEventListener("mousemove", (event) => {
                if (isClicked) {
                    const rect = Tower[0].getBoundingClientRect();
                    cell.style.left = event.clientX - rect.left + "px";
                    cell.style.top = event.clientY - rect.top + "px";
                }
            });
        });
    });

    return (
        <div className="HanoiTower">

            <div className="container_Tower">
                <div className="Tower">
                    {
                        Array(count).fill(0).map((_, index) => {
                            return (
                                <div className="Tower_cell"
                                    data-id={index}
                                    key={index}
                                    style={{
                                        width: `${100 - 15 * (index + 1)}%`,
                                        bottom: `${20 * (index + 1) + 5 * index}px`
                                    }} >
                                </div>)
                        })
                    }
                </div>
                <div className="Tower"></div>
                <div className="Tower"></div>
            </div>
        </div>
    )
};

export default HanoiTower;