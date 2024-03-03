import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
function Product() {
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products`)
                setData(res.data);
            } catch (error) {
                seterror(error)
            } finally {
                setloading(false);
            }

        }
        fetchData()
    }, [])

    if (loading) return <p>...Loading</p>
    if (error) return <p>Error</p>


    return (
        <div>
            <h1>Product Page</h1>
            {data ? (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.title}</p>
                        </li>
                    ))}
                </ul>
            ) : null}


        </div>

    )
}

export default Product
