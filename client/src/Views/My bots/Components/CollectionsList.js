import { React, useState } from "react";
import Card from "./CollectionCard";
import AddCard from "./AddCard";

export default function CollectionsList() {
  const [CollectionCards, setCollectionCards] = useState(["somth", "sp"]);

  return (
    <div className=" grid auto-rows-[15rem] grid-cols-[repeat(auto-fit,minmax(15rem,0.5fr))] gap-10 p-10">
      {CollectionCards.map((card) => (
        <Card src={card.img} title={card.title} />
      ))}

      <AddCard
        setCollectionCards={setCollectionCards}
        CollectionCards={CollectionCards}
      />
    </div>
  );
}
