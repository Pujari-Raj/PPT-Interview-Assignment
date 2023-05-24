import React, {useEffect, useState} from 'react'
import axios from 'axios';
const AxiosDemo = () => {

    const [myData, setMyData] = useState([]);
    const [isError, setError] = useState("");

    // axios without using async await
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then((resp) => { setMyData(resp.data) })
    //         .catch((error) => setError(error.message))
            
    // }, []);

    // axios using async await

    const getData = async() => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setMyData(res.data);            
        } 
        catch (error) {
            setError(error.message);
        }
    }

    useEffect(()=>{
        getData();
    }, [])
  return (
    <div>
        <h1>Axios Demo</h1>
        {isError != "" && <h2>{isError}</h2>}
        <div className="grid">
            {myData.map((post) => {
                const {id, title, body} = post;
                return(
                    <div className="card" key={id}>
                        <h2>{title.slice(0,15)}</h2>
                        <p>{body.slice(0, 100)}</p>
                    </div>
                );
            })
            }
        </div>
    </div>
  )
}

export default AxiosDemo