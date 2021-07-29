import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import ListUser from "../components/ListUser";
import { get } from '../api';

function PageHome() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        get('/users', setUsers)
    }, []);

    return (
        <List>
            {
                users.map((user) => (
                    <ListUser user={user} />
                ))
            }
        </List>
    )
}


export default PageHome