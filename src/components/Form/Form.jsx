import FormInput from '../FormInput/FormInput';
import styles from './Form.module.scss';
import { nanoid } from 'nanoid';

const Form = ({ addUser }) => {
  // const handleNameChange = (e) => {
  //   console.log(e.target.value);
  // };

  const validateForm = (formData) => {
    if (!formData.name) {
      return false;
    }

    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, lastName, gender } = e.currentTarget.elements;

    const formData = {
      id: nanoid(),
      name: name.value,
      lastName: lastName.value,
      gender: gender.value,
    };

    if (validateForm(formData)) {
      addUser(formData);
    } else {
      alert('Prosze wypełnić wszystkie pola!');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <FormInput name='name' type='text' id='name' label='Name:' />
        {/* <input onChange={handleNameChange} type='text' name='name' /> */}
      </div>
      <div className={styles.formGroup}>
        <FormInput
          name='lastName'
          type='text'
          id='lastName'
          label='Last name:'
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='gender'>Your gender:</label>
        <select name='gender' id='gender'>
          <option value='M'>Male</option>
          <option value='F'>Female</option>
          <option value='O'>Other</option>
        </select>
      </div>
      <button type='submit'>Wyślij</button>
    </form>
  );
};

export default Form;
