import { RemoveButton } from "./StyledPhoneItem";


export const PhoneItem = ({ contact }) => {
  return (
    <><div>
      {contact.Name}:{contact.Number}
      </div>
      <RemoveButton 
        value={contact.id}
        onClick={(evt) => dispatch(deleteContact(evt.target.value))}
      >
        toDelete
      </RemoveButton>
    </>
  );
};
