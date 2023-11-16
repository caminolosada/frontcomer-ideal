import MapComponent from "../Map/MapComponent";
import { SearchInput } from "../input/SearchInput";
import HomePageStyled from "./HomePageStyled";

export const HomePage = (): React.ReactElement => {
  return (
    <HomePageStyled>
      <SearchInput />
      <MapComponent />
    </HomePageStyled>
  );
};
