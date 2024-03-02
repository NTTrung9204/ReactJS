import { useState, useEffect } from "react";

const tag = ['posts', 'comments', 'albums'];

function Content() {
    const [title, setTitle] = useState('posts');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        fetch(`https://jsonplaceholder.typicode.com/${title}`)
            .then(response => response.json())
            .then(data => {
                setComments(data)
            });
    }, [title]);



    return (
        <div>
            {
                tag.map((item, index) => {
                    return (
                        <button onClick={
                            () => setTitle(item)
                        } 
                        key={index}>{item}</button>
                    );
                })
            }
            <input></input>
            <ul>
                {
                    comments.map((comment, index) => {
                        return (
                            <li key={index}>
                                {comment.body || comment.title || comment.name}
                            </li>
                        );
                    })
                }
            </ul>
            
        </div>
    );
}

export default Content;