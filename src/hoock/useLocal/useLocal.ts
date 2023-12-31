import axios from "axios";
import { LocalState, Local } from "../../types";

const useLocal = () => {
  const getLocalsById = async (id: string): Promise<Local[]> => {
    try {
      const {
        data: { locals },
      } = await axios.get<LocalState>(`http://localhost:4000/locals/${id}`);

      return locals;
    } catch (error: unknown) {
      throw new Error(`Error: ${error}`);
    }
  };

  return { getLocalsById };
};

export default useLocal;
