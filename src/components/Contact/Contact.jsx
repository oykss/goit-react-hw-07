import { BsTelephone } from 'react-icons/bs';
import { VscAccount, VscChromeClose } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrap}>
      <div>
        <div className={css.infoWrap}>
          <VscAccount className={css.icon} />
          <h3 className={css.name}>{name}</h3>
        </div>
        <div className={css.infoWrap}>
          <BsTelephone className={css.icon} />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button onClick={handleDelete} className={css.btn}>
        <VscChromeClose className={css.icon} />
        Delete
      </button>
    </div>
  );
}
