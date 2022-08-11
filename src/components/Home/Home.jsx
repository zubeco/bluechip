import Sidebar from "../../components/Molecules/Sidebar/Sidebar";
import Mainbar from "../../components/Molecules/Mainbar/Mainbar";

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <Mainbar />
    </div>
  );
}
