import { useState, useEffect } from 'react';
import './styles/Table.css';
function Table() {
    const [users, setUsers]=useState([]);
    const [current, setcurrent]=useState(1);
    const [search, setsearch]=useState('');
    const usersPage=5;
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(json=>setUsers(json))
            .catch(error=>console.error('Error fetching users:', error));
    }, []);
    const filter=users.filter(user=>{
        return (
            user.name.toLowerCase().includes(search.toLowerCase())||
            user.email.toLowerCase().includes(search.toLowerCase())||
            user.id.toString().includes(search)
        );
    });
    const start=(current-1)*usersPage;
    const currentUsers=filter.slice(start, start+usersPage);
    const nextPage=()=>{
        if (current*usersPage<filter.length) {
            setcurrent(prev=>prev+1);
        }
    };
    const prevPage=()=>{
        if (current>1) {
            setcurrent(prev=>prev-1);
        }
    };
    const searchfunc=(event)=>{
        setsearch(event.target.value);
        setcurrent(1); 
    };
    return (
        <>
            <input type="text" placeholder="Search for Something" value={search} onChange={searchfunc} id="search" />
            <table id='table'>
                <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                </tr>
                {currentUsers.map(user=>(
                    <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                    </tr>
                ))}
            </table>
            <div id="pager">
                <button onClick={nextPage}> Next Page </button>
                <button onClick={prevPage}> Prev Page </button>
            </div>
        </>
    );
}
export default Table;
