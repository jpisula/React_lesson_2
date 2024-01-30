import { useState } from 'react';

const TableRow = ({ user, deleteUser }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <tr style={isActive ? { color: 'red', backgroundColor: 'lightgray' } : {}}>
      <td>{!isActive ? user.name : <input type='text' />}</td>
      <td>{user.lastName}</td>
      <td>{user.gender}</td>
      <td>
        <button onClick={handleActiveButtonClick}>
          {isActive ? 'Deactivate' : 'Activate'}
        </button>
        <button
          onClick={() => {
            deleteUser(user.id);
          }}
        >
          DELETE USER
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
