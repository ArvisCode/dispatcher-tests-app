import { LoaderBox } from "./Loader.styled";
import { PacmanLoader } from "react-spinners";

export const Loader = () => {
  return (
    <>
      <LoaderBox>
        <PacmanLoader size={50} color="#2b2d7f" />
      </LoaderBox>
    </>
  );
};
