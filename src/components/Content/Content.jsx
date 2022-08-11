import { Outlet } from "react-router-dom";

export default function Content() {
  return (
    <div className="flex justify-center w-full pb-40 h-screenn bg-secondary">
      <div className="w-main">
          <Outlet />
      </div>
    </div>
  );
}
