import { useState, useEffect } from "react";
import ActivityBar from "./Components/ActivityBar";
import Card from "./Components/Card";
import NavBar from "./Components/NavBar";
import AppData from "./data.json";
import type { Extension } from "./Types";

const App = () => {
  const [filter, setFilter] = useState("all");
  const [apps, setApps] = useState<Extension[]>([]);

  useEffect(() => {
    sessionStorage.setItem("extensions", JSON.stringify(AppData));
    setApps(JSON.parse(sessionStorage.getItem("extensions")!) as Extension[]);
  }, []);

  const filteredData = apps.filter((app) => {
    if (filter === "active") return app.isActive === true;
    if (filter === "inactive") return app.isActive === false;
    return true;
  });

  return (
    <div className="font-Nato-Sans text-lg pt-5 pb-10 bg-neutral-900 dark:bg-neutral-200 min-h-dvh text-neutral-0">
      <div className="max-w-7xl w-full mx-auto px-2 overflow-x-hidden md:px-4">
        <div className="flex flex-col gap-10">
          <NavBar />
          <div>
            <ActivityBar active={filter} setActive={setFilter} />
            <div className="grid grid-cols-12 gap-2 mt-6">
              {filteredData.map((app) => (
                <Card
                  key={app.name}
                  cardText={app.description}
                  cardTitle={app.name}
                  logo={app.logo}
                  isActive={app.isActive}
                  apps={apps}
                  setApps={setApps}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center md:text-2xl text-xl px-4 md:px-0 dark:text-neutral-700 text-neutral-100">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            className="underline underline-offset-4 text-red-400 transition-all duration-300 ease-in-out"
          >
            Frontend Mentor.
          </a>{" "}
          Coded by{" "}
          <a
            href="https://github.com/Hyacinthaugustine/frontend-browser-extension"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:underline hover:underline-offset-4 hover:transition-all"
          >
            Hyacinth Augustine.
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
