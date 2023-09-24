import { useDispatch, useSelector } from "react-redux";
import { StyledFilter } from "./StyledFilter";
import { changeFilter } from "redux/filterSlice";

export const Filter = ({}) => {
  const filter = useSelector(state=>state.filter);
  const dispatch=useDispatch();
  const handleChange=(query)=>dispatch(changeFilter(query))
  
  return (
    <StyledFilter>
      <label>
        Find contacts by name
        <input
          onChange={(e)=>dispatch(changeFilter(e.target.value))}
          value={filter}
        ></input>
      </label>
    </StyledFilter>
  );
};
