import React from "react";
import { useTable } from "react-table"

const api_host= "http://localhost:3001/"
const camp_api= `${api_host}/campaigns`

function Table() {
    const [data, setData] = useState([]);

    const fetchCamps = async () => {
        fetch(`${camp_api}`)
            .then(res => res.json)
            .then(json => setData(json));
    };

    useEffect
    
}

export default Table;