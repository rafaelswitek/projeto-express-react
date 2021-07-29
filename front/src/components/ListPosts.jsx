import { Fragment } from 'react';
import { ListItem, ListItemText, Divider } from '@material-ui/core';

function ListPosts({ post }) {
  return (
    <Fragment>
      <ListItem>
        <ListItemText
          primary={post.title}
          secondary={post.body}
        />
      </ListItem>
      <Divider />
    </Fragment>
  );
}

export default ListPosts