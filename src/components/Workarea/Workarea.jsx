import MainArea from "@/components/MainArea/MainArea";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Workarea({ children }) {
  return (
    <div id="main" className="main">
      <div className="grid-container">
        <div className="grid-100 grid-parent main-inner">
          <MainArea>{children}</MainArea>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
