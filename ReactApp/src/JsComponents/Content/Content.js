import { useState, useEffect } from "react";

// const tag = ['posts', 'comments', 'albums'];

const limitTime  = 60;

function Content() {
    // const [input, setInput] = useState('');
    // const [title, setTitle] = useState('posts');
    // const [comments, setComments] = useState([]);
    // const [show, setShow] = useState(false);

    // useEffect(() => {
    //     console.log('useEffect');
    //     fetch(`https://jsonplaceholder.typicode.com/${title}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setComments(data)
    //         });
    // }, [title]);

    // useEffect(() => {
    //     window.addEventListener('scroll', ()=>{
    //         console.log(window.scrollY);
    //         setShow(window.scrollY >= 200);
    //     });

    //     return () => {
    //         console.log('remove');
    //         window.removeEventListener('scroll', () => {
    //         });
    //     }

    // }, []);

    // console.log('re-render');
    // const [width, setWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setWidth(window.innerWidth);
    //     }
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         console.log('remove');
    //         window.removeEventListener('resize', handleResize);
    //     }
    // }, [])

    const [time, setTime] = useState(limitTime);

    useEffect(() => {
        console.log('useEffect');
        const interval = setInterval(() => {
            setTime(prev => {
                if(prev === 1) clearInterval(interval);
                return prev - 1
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [])


    return (
        <div>
            <div className="squareTimer">
                <div style={{height: `${(1 - time/limitTime)*100}%`, backgroundColor: `${!time ? 'yellow' : '#4359fcab'}`}} 
                className="squareTimer-cell"></div>
                <span>{time}</span>
            </div>
            {/* <h1>{width}</h1> */}
            {/* {
                tag.map((item, index) => {
                    return (
                        <button onClick={
                            () => setTitle(item)
                        } 
                        key={index}>{item}</button>
                    );
                })
            } */}
            {/* <input 
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    document.title = e.target.value;
                }}
            ></input> */}
            {/* <ul>
                {
                    comments.map((comment, index) => {
                        return (
                            <li key={index}>
                                {comment.body || comment.title || comment.name}
                            </li>
                        );
                    })
                }
            </ul> */}
            {/* {show && <button
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20
                }}
            >show</button>} */}
        </div>
    );
}

export default Content;