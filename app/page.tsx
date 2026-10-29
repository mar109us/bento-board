"use client";
import { useState } from "react";

export default function test() {
   const [cards, setCards] = useState<number[]>([]);

   function addCard() {
      setCards([...cards, cards.length]);
   }

   return (
      <div className="grid grid-cols-1 grid-rows-8 h-screen gap-5 p-5">
         <Button onClick={addCard} />
         <div className="flex flex-row flex-1 flex-wrap">
            {cards.map((id) => (
               <Card key={id} />
            ))}
         </div>
      </div>
   );
}

function Button({ onClick }: { onClick: () => void }) {
   return (
      <button
         onClick={onClick}
         className="flex row-span-1 justify-center items-center border-4 border-emerald-100 bg-emerald-200">
         yesh
      </button>
   );
}

function Card() {
   return <div className="border w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur nihil perferendis eum aspernatur quisquam delectus consequuntur fugit nemo dolore possimus quas cumque neque numquam veniam, cupiditate sunt ea adipisci rem!</div>;
}
