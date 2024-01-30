import TableRow from './TableRow';
import { nanoid } from 'nanoid';

const Table = ({ users, deleteUser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <TableRow key={nanoid()} user={user} deleteUser={deleteUser} />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
