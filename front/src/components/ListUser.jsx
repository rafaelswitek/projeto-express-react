import { Fragment } from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, Button, Divider } from '@material-ui/core';
import AllInbox from '@material-ui/icons/AllInbox';
import { Link } from 'react-router-dom';

function ListUser({ user }) {
  return (
    <Fragment>
      <ListItem>
        <ListItemText
          primary={user.name}
          secondary={user.company}
        />
        <ListItemSecondaryAction>
          <Button variant="contained" color="primary" component={Link} to={`/user/${user.id}/posts`}>
            posts <AllInbox />
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </Fragment>
  );
}

export default ListUser