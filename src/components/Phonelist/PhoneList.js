import { getContacts } from 'redux/contactsSlice';
import { PhoneItem } from '../Phoneitem/PhoneItem';
import { StyledItem, StyledList } from './StyledPhoneList';

export const PhoneList = () => {
 
  return (
    <StyledList>
      {getContacts.map(contact => (
        <StyledItem key={contact.id}>
          <PhoneItem contact={contact} />
        </StyledItem>
      ))}
    </StyledList>
  );
};
