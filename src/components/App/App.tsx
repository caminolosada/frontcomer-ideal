import { SelectInput } from "../SelectInput/SelectInput";
import { SearchInput } from "../input/SearchInput";

const App = (): React.ReactElement => {
  return (
    <>
      <h1>Comercio</h1>
      <SearchInput />
      <SelectInput />
    </>
  );
};

export default App;
