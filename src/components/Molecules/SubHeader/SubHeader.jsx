import { useLocation } from "react-router-dom";
import { GoCheck } from "react-icons/go";

export default function SubHeader() {
  const location = useLocation();
  const { pathname } = location;
  const pathUrl = pathname.endsWith("/account");

  return (
    <div>
      <div className="flex items-center h-16 pl-4 bg-white rounded-md shadow-myshadow">
        <div>
          <div className="flex items-center">
            <div
              className={
                pathUrl
                  ? "bg-eleven text-primary  w-6 h-6 text-center rounded-xl"
                  : "bg-fifth text-white w-6 h-6 text-center rounded-xl"
              }
            >
              {pathUrl ? (
                <span className="flex items-center justify-center pt-1">
                  <GoCheck className="text-white" />
                </span>
              ) : (
                <div className="flex items-center justify-center w-6 h-6 text-center text-white bg-fifth text-s rounded-xl">
                  1
                </div>
              )}
            </div>
            <p
              className={
                pathUrl
                  ? "text-third uppercase text-s pl-2"
                  : "text-fifth uppercase text-s pl-2"
              }
            >
              Contact Details
            </p>
            <div className="w-4 h-px ml-2 bg-sixth"></div>
          </div>
        </div>
        <div>
          <div className="flex items-center ml-2">
            <div
              className={
                pathUrl
                  ? "bg-fifth text-white text-s flex justify-center items-center w-6 h-6 text-center rounded-xl"
                  : "bg-sixth text-primary text-s flex justify-center items-center w-6 h-6 text-center rounded-xl"
              }
            >
              2
            </div>
            <p
              className={
                pathUrl
                  ? "text-fifth uppercase text-s pl-2"
                  : "text-third uppercase text-s pl-2"
              }
            >
              account service required
            </p>
            <div className="w-4 h-px ml-2 bg-sixth"></div>
          </div>
        </div>
        <div>
          <div className="flex items-center ml-2">
            <div className="flex items-center justify-center w-6 h-6 text-center bg-sixth text-primary text-s rounded-xl">
              3
            </div>
            <p className="pl-2 uppercase text-third text-s">
              Means of identification
            </p>
            <div className="w-4 h-px ml-2 bg-sixth"></div>
          </div>
        </div>
        <div>
          <div className="flex items-center ml-2">
            <div className="flex items-center justify-center w-6 h-6 text-center bg-sixth text-primary text-s rounded-xl">
              4
            </div>
            <p className="pl-2 uppercase text-third text-s">Mandate card</p>
            <div className="w-4 h-px ml-2 bg-sixth"></div>
          </div>
        </div>
        <div>
          <div className="flex items-center ml-2">
            <div className="flex items-center justify-center w-6 h-6 text-center bg-sixth text-primary text-s rounded-xl">
              5
            </div>
            <p className="pl-2 uppercase text-third text-s">checklist</p>
            <div className="w-4 h-px ml-2 bg-sixth"></div>
          </div>
        </div>
        <div>
          <div className="flex items-center ml-2">
            <div className="flex items-center justify-center w-6 h-6 text-center bg-sixth text-primary text-s rounded-xl">
              5
            </div>
            <p className="pl-2 uppercase text-third text-s">review</p>
          </div>
        </div>
      </div>
    </div>
  );
}
