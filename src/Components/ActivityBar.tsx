import Button from "./Button";

interface ActivityBarProps {
  active: string;
  setActive: (filter: string) => void;
}

const ActivityBar = ({ active, setActive }: ActivityBarProps) => {
  return (
    <div className="flex justify-between items-center md:flex-row flex-col gap-2 md:gap-0">
      <h1 className="text-2xl font-bold text-neutral-0">Extension Lists</h1>

      <div className="flex gap-2 items-center">
        <Button
          ButtonText="All"
          onClick={() => setActive("all")}
          isActive={active === "all"}
        />
        <Button
          ButtonText="Active"
          onClick={() => setActive("active")}
          isActive={active === "active"}
        />
        <Button
          ButtonText="Inactive"
          onClick={() => setActive("inactive")}
          isActive={active === "inactive"}
        />
      </div>
    </div>
  );
};

export default ActivityBar;
