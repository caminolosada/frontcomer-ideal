import { SelectInput } from "../SelectInput/SelectInput";
import { SearchInput } from "../input/SearchInput";
import HomePageStyled from "./HomePageStyled";

export const HomePage = (): React.ReactElement => {
  return (
    <HomePageStyled>
      <SearchInput />
      <SelectInput />
    </HomePageStyled>
  );
};
