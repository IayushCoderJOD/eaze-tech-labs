import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import SideBar from "./components/SideBar";
import Headers from "./components/Headers";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="w-[15%]">
          <SideBar />
        </div>
        <div className="w-[85%]">
          {/* this will be the whole right portion of the site */}
          <Headers />
        </div>
      </div>
    </>
  );
}
