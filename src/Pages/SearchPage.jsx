import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllEmployees } from "../client/employees";
import Search from "../Components/Search";
import Loading from "../Components/Loading";

const SearchPage = () => {
    const [employees, setEmployees] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let lock = false

        setLoading(true)
        const fetchEmployees = async () => {
            const list =  await getAllEmployees()

            if(!lock) {
                setEmployees(list)
                setLoading(false)
            }
        }
        fetchEmployees()
        return ()  => {
            lock = true
        }
    }, [])

    if(loading) {
        return(
            <Loading/>
        )
    }

    return (
        <Search  employees={employees}/>
    )
}

export default SearchPage