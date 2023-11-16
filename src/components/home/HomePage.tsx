import MapComponent from "../Map/MapComponent";
import { SearchInput } from "../input/SearchInput";
import HomePageStyled from "./HomePageStyled";
import { useAppDispatch } from "../../store";
import { loadLocalsActionCreator } from "../../store/localSlice/localSlice";
import { SelectInput } from "../SelectInput/SelectInput";
import useLocal from "../../hoock/useLocal/useLocal";

export const HomePage = (): React.ReactElement => {
  const distpatch = useAppDispatch();
  const { getLocalsById } = useLocal();

  const handleOnSelect = async (district: string) => {
    const locals = await getLocalsById(district);

    if (!locals) {
      return;
    }

    distpatch(loadLocalsActionCreator(locals));
  };

  return (
    <HomePageStyled>
      <SearchInput />
      <SelectInput actionOnSelect={handleOnSelect} />
      <MapComponent />
      <div className="status-container">
        <span>🟡 Comerç ideal</span>
        <span>🟢 Comerç disponible per a comprar o llogar</span>
        <span>🔵 Comerç ocupat</span>
      </div>
    </HomePageStyled>
  );
};
