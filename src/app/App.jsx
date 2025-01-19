import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Container from '../components/Container/Container';
import Error from '../components/Error/Error';
import Loader from '../components/Loader/Loader';
import SearchBox from '../components/SearchBox/SearchBox';
import { fetchContacts } from '../redux/contactsOps';
import { selectError, selectLoading } from '../redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Container>
        <ContactForm />
        <SearchBox />
        {isLoading && !error && <Loader />}
        {error && <Error />}
        <ContactList />
      </Container>
    </main>
  );
}
