interface ToggleBtnProps {
  enabled: boolean;
  onToggle: () => void;
}

const ToggleBtn = ({ enabled, onToggle }: ToggleBtnProps) => {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-red-400 active:border-red-400
        ${enabled ? "bg-red-400" : "bg-neutral-600 dark:bg-neutral-300"}
      `}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300
          ${enabled ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
};

export default ToggleBtn;
