import { FC } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface CardType {
  data: {
    id: string;
    name: string;
    description: string;
    price: number;
    status: string;
    category_id: string;
    createdAt: string;
    updatedAt: string;
  };
  deletItem: (arg: string) => void;
  beingDeleted: {
    id?: string;
    beingDelete?: boolean;
  };
}
const Card: FC<CardType> = (props) => {
  const navigate = useNavigate();
  function handelDelet() {
    let isDelit = confirm("Rosdan ham o'chirmoqchimisiz?");
    if (isDelit) {
      props.deletItem(props.data.id);
    }
  }
  function handelDetails() {
    navigate(`details/${props.data.id}`);
  }

  return (
    <div
      className="shadow-xl w-1/4 p-4 rounded-lg bg-white cursor-pointer border-2 border-[#EFEFEF] text-[black] transition duration-300 hover:scale-105"
      onClick={handelDetails}
    >
      <h3>Nomi:{props.data.name}</h3>
      <h3>Narxi:{props.data.price}$</h3>
      <h3>Status:{props.data.status}</h3>
      <h3>Izoh:{props.data.description}</h3>
      {!(
        props.beingDeleted?.beingDelete &&
        props.beingDeleted?.id == props.data?.id
      ) ? (
        <FaTrash onClick={handelDelet} color="red" />
      ) : (
        "O'chirilmoqda"
      )}
    </div>
  );
};

export default Card;
