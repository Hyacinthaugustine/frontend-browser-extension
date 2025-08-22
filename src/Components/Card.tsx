import { useState } from "react";
import Button from "./Button";
import ToggleBtn from "./ToggleBtn";
import DB from "../Firebase/server";
import { ref, update, remove } from "firebase/database";

interface CardPProp {
  cardTitle: string;
  cardText: string;
  logo: string;
  isActive: boolean;
}

const Card = ({ logo, cardText, cardTitle, isActive }: CardPProp) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleToggle = () => {
    const cardRef = ref(DB, `extensions/${cardTitle}`);
    update(cardRef, { isActive: !isActive });
  };

  const handleRemove = () => {
    const cardRef = ref(DB, `extensions/${cardTitle}`);
    remove(cardRef);
    setShowConfirm(false);
  };

  return (
    <div className="lg:col-span-4 md:col-span-6 col-span-12 md:rounded-xl rounded-2xl border border-neutral-600 bg-neutral-800 p-4 flex flex-col justify-between gap-10 dark:bg-neutral-50 dark:border-neutral-300">
      <div className="flex gap-4 items-start">
        <img src={logo} alt={`${cardText} logo`} />

        <div>
          <h3 className="text-xl dark:text-neutral-800 dark:font-medium font-medium">
            {cardTitle}
          </h3>
          <p className="text-neutral-400 dark:text-neutral-600 text-balance">
            {cardText}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-3">
        <Button ButtonText="Remove" onClick={() => setShowConfirm(true)} />
        <ToggleBtn enabled={isActive} onToggle={handleToggle} />
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-800 rounded-xl text-center shadow-lg p-6 max-w-2xl w-full border-red-500 border-3">
            <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
              Confirm Deletion
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Are you sure you want to remove{" "}
              <strong className="text-neutral-0">{cardTitle}</strong> extension?
            </p>
            <div className="flex justify-center items-center gap-4">
              <Button
                onClick={() => setShowConfirm(false)}
                ButtonText="Cancel"
              />

              <Button onClick={handleRemove} ButtonText="Remove" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
