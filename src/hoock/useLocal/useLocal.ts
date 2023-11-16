import axios from "axios";
import { LocalStatus, Local } from "../../types";

const useLocal = () => {
  const getLocals = async (id: string): Promise<Local[]> => {
    try {
      const {
        data: { locals },
      } = await axios.get<LocalStatus>(`http://localhost:4000/locals/${id}`);

      return locals;
    } catch (error: unknown) {
      throw new Error(`Error: ${error}`);
    }
  };

  return getLocals;
};

export default useLocal;
