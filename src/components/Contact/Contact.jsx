import css from './Contact.module.css';
import { MdPhone } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';

export default function Contact({ contact, onDelete }) {
  const { name, number, id } = contact;
  return (
    <div className={css.container}>
      <ul>
        <li className={css.wrapper}>
          <p>
            <IoPerson style={{ width: 20, height: 20 }} /> Name: {contact.name}
          </p>
        </li>
        <li className={css.wrapper}>
          <p>
            <MdPhone style={{ width: 20, height: 20 }} /> Number:{' '}
            {contact.number}
          </p>
        </li>
      </ul>
      <button className={css.button} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
}
