
import { useSelector } from 'react-redux';
import { PhoneItem } from '../Phoneitem/PhoneItem';
import { StyledItem, StyledList } from './StyledPhoneList';

export const PhoneList = () => {
  
    
  const contacts = useSelector(state=>state.contacts.items);
  const filter=useSelector(state=>state.filter);
  const getFiltered = () =>
    contacts.filter(contact =>
      contact.Name.toLowerCase().includes(filter.toLowerCase())
    );
    const filteredContacts = getFiltered();
  return (
    <StyledList>
      {filteredContacts.map(contact => (
        <StyledItem key={contact.id}>
          <PhoneItem contact={contact} />
        </StyledItem>
      ))}
    </StyledList>
  );
};
