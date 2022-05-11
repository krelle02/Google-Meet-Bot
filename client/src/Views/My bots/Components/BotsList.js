import { React, useState } from "react";
import Card from "./BotCard";
import AddCard from "./AddCard";

export default function BotsList() {
  const [BotCards, setBotCards] = useState([]);

  return (
    <div className=" grid auto-rows-[15rem] grid-cols-[repeat(auto-fit,minmax(15rem,0.5fr))] gap-10 p-10">
      {BotCards.map((card) => (
        <Card id={card.id} key={card.id} src={card.img} title={card.title} />
      ))}

      <AddCard setBotCards={setBotCards} BotCards={BotCards} />
    </div>
  );
}
