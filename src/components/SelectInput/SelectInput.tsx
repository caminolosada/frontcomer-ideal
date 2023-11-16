import { useId } from "react";
import { SelectInputStyles } from "./SelectInput.styles";
export const SelectInput = () => {
  const districtId = useId();
  return (
    <SelectInputStyles id={districtId} name="selectedDistrict">
      <option>Sant Martti</option>
      <option value="Example">Eixample</option>
      <option value="tomato">Eixample II</option>
    </SelectInputStyles>
  );
};
