import { SelectInputStyles } from "./SelectInput.styles";

interface SelectInputProps {
  actionOnSelect: (id: string) => void;
}

export const SelectInput = ({ actionOnSelect }: SelectInputProps) => {
  const handleOnFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const district = event.target.value;

    actionOnSelect(district);
  };

  return (
    <SelectInputStyles onChange={handleOnFilter} name="selectedDistrict">
      <option hidden>Tria el districte</option>
      <option>Ciutat Vella</option>
      <option>Eixample</option>
      <option>Gràcia</option>
      <option>Horta-Guinardó</option>
      <option>Les Corts</option>
      <option>Nou Barris</option>
      <option>Sant Andreu</option>
      <option>Sant Martí</option>
      <option>Sants-Montjuïc</option>
      <option>Sarrià-Sant Gervasi</option>
    </SelectInputStyles>
  );
};
