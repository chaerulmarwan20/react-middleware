import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authenticated } from "../store";

const Guest = (props) => {
  const { component } = props;
  const navigate = useNavigate();
  const { check } = useRecoilValue(authenticated);

  useEffect(() => {
    if (check) navigate("/dashboard");
    // eslint-disable-next-line
  }, []);

  return component;
};

export default Guest;
