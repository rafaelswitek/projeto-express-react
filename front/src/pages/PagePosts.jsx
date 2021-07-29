import React, { useEffect, useState } from 'react';
import { Button, List } from '@material-ui/core';
import ListPosts from "../components/ListPosts";
import { get } from '../api';
import { ArrowBack } from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';

function PagePosts() {
    const [posts, setPosts] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        get(`/users/${id}/posts`, setPosts)
    }, []);

    return (
        <List>

            <Button end variant="contained" color="primary" component={Link} to={`/`}>
                <ArrowBack /> Voltar
            </Button>
            {
                posts.map((post) => (
                    <ListPosts key={post.id} post={post} />
                ))
            }
        </List>
    )
}


export default PagePosts