import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UserList = ({ users, onDelete }) => {
  return (
    <ListGroup
      style={{
        flex: 1,
      }}
    >
      {users
        .sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1;
          } else if (a.firstName < b.firstName) {
            return -1;
          } else if (a.lastName > b.lastName) {
            return 1;
          } else if (a.lastName < b.lastName) {
            return -1;
          }
          return 0;
        })
        .map((user) => (
          <ListGroupItem key={user.id}>
            <section style={{ display: "flex", alignItems: 'center' }}>
              <div style={{ flexGrow: 1 }}>
                {`${user.firstName} ${user.lastName}`}
              </div>

              <div>
                <Button outline color="danger" onClick={() => onDelete(user.id)}>
                  Delete
                </Button>
              </div>
            </section>
          </ListGroupItem>
        ))}
    </ListGroup>
  );
};

export default UserList;
