import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

interface prop {
  onclick: () => void;
}

const Like = ({ onclick }: prop) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onclick();
  };

  if (status)
    return (
      <AiFillHeart color="#ff6b81" size={20} onClick={toggle}></AiFillHeart>
    );
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
