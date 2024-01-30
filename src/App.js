import { useState } from 'react';
import styles from './App.module.scss';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import { FaSmileWink } from 'react-icons/fa';
import Table from './components/Table/Table';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className='container'>
      <section className={styles.section}>
        <h2>
          Dodaj jeden <FaSmileWink /> :
        </h2>
        <Counter />
      </section>
      <section className={styles.section}>
        <h2>Wprowadź swoje dane:</h2>
        <Form addUser={addUser} />
      </section>
      {users.length > 0 && (
        <section className={styles.section}>
          <h2>Dodani ludzie:</h2>
          <Table users={users} deleteUser={deleteUser} />
        </section>
      )}
    </div>
  );
}

export default App;
