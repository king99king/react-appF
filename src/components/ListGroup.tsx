import { SetStateAction, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const message = items.length === 0 && <p>No item found</p>;
  const [seleteditem, setSeleteditem] = useState(-1);

  const handelClick = (index: SetStateAction<number>) => {
    setSeleteditem(index);
  };
  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === seleteditem
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              handelClick(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
