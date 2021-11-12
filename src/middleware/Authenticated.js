import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authenticated } from "../store";

const Authenticated = (props) => {
  const { component } = props;
  const navigate = useNavigate();
  const { check } = useRecoilValue(authenticated);

  useEffect(() => {
    if (!check) navigate("/login");
    // eslint-disable-next-line
  }, []);

  return component;
};

export default Authenticated;
