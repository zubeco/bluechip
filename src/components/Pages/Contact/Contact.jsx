import { Link } from "react-router-dom";
import OutletHeader from "../../Atoms/OutletHeader/OutletHeader";
import { FaEdit } from "react-icons/fa";
import ContactDetails from "../../Atoms/ContactDetails/ContactDetails";

export default function Contact() {
  return (
    <div className="w-main">
      <ContactDetails />
      <div className="mt-4 bg-white rounded-md h-myheight shadow-myshadow">
        <OutletHeader />
        <div className="px-12 pt-10">
          <h1 className="text-xs font-bold uppercase font-manrope text-sec">
            bvn details
          </h1>
          <div className="flex w-full pt-12">
            <div className="pr-40">
              <div className="flex items-center pb-8">
                <h4 className="pr-8 text-xs font-semibold uppercase font-manrope text-eight">
                  firstname
                </h4>
                <h5 className="text-xs font-normal font-manrope text-nine">
                  Tomiwa
                </h5>
              </div>
              <div className="flex items-center pb-8">
                <h4 className="pr-8 text-xs font-semibold uppercase font-manrope text-eight">
                  Email address
                </h4>
                <h5 className="text-xs font-normal font-manrope text-nine">
                  Ogunremi
                </h5>
                <div className="flex items-center px-4 py-1 ml-5 border rounded-sm bg-ten text-s border-tenth">
                  <FaEdit className="text-thick-yellow" />
                  <p className="pl-2 text-thick-yellow">Edit</p>
                </div>
              </div>
              <div className="flex items-center pb-8">
                <h4 className="pr-8 text-xs font-semibold uppercase font-manrope text-eight">
                  Phone 1
                </h4>
                <h5 className="text-xs font-normal font-manrope text-nine">
                  08123446789
                </h5>
                <div className="flex items-center px-4 py-1 ml-5 border rounded-sm bg-ten text-s border-tenth">
                  <FaEdit className="text-thick-yellow" />
                  <p className="pl-2 text-thick-yellow">Edit</p>
                </div>
              </div>
              <div className="flex items-center pb-8">
                <h4 className="pr-8 text-xs font-semibold uppercase font-manrope text-eight">
                  State
                </h4>
                <h5 className="text-xs font-normal font-manrope text-nine">
                  Lagos
                </h5>
              </div>{" "}
              <div className="flex items-center pb-8">
                <h4 className="pr-8 text-xs font-semibold uppercase font-manrope text-eight">
                  LGA
                </h4>
                <h5 className="text-xs font-normal font-manrope text-nine">
                  Ikeja
                </h5>
              </div>{" "}
              <div className="flex items-center pb-8">
                <h4 className="pr-8 text-xs font-semibold uppercase font-manrope text-eight">
                  state of origin
                </h4>
                <h5 className="text-xs font-normal font-manrope text-nine">
                  2015/20/08
                </h5>
              </div>{" "}
              <div className="flex items-center pb-8">
                <h4 className="pr-8 text-xs font-semibold uppercase font-manrope text-eight">
                  Occupation sector
                </h4>
                <h5 className="text-xs font-normal font-manrope text-nine">
                  Agriculture
                </h5>
              </div>
            </div>
            <div>
              <div className="flex items-center pb-8">
                <h4 className="pr-8 text-xs font-semibold uppercase font-manrope text-eight">
                  lastname
                </h4>
                <h5 className="text-xs font-normal font-manrope text-nine">
                  Ogunremi
                </h5>
              </div>{" "}
              <div className="flex items-center pb-8">
                <h4 className="pr-8 text-xs font-semibold uppercase font-manrope text-eight">
                  mailing
                </h4>
                <h5 className="text-xs font-normal font-manrope text-nine">
                  Ogunremi
                </h5>
                <div className="flex items-center px-4 py-1 ml-5 border rounded-sm bg-ten text-s border-tenth">
                  <FaEdit className="text-thick-yellow" />
                  <p className="pl-2 text-thick-yellow">Edit</p>
                </div>
              </div>
              <div className="flex items-center pb-8">
                <h4 className="pr-8 text-xs font-semibold uppercase font-manrope text-eight">
                  phone 2
                </h4>
                <h5 className="text-xs font-normal font-manrope text-nine">
                  08198754328
                </h5>
                <div className="flex items-center px-4 py-1 ml-5 border rounded-sm bg-ten text-s border-tenth">
                  <FaEdit className="text-thick-yellow" />
                  <p className="pl-2 text-thick-yellow">Edit</p>
                </div>
              </div>{" "}
              <div className="flex items-center pb-8">
                <h4 className="pr-8 text-xs font-semibold uppercase font-manrope text-eight">
                  city/town
                </h4>
                <h5 className="text-xs font-normal font-manrope text-nine">
                  Ikeja
                </h5>
              </div>
              <div className="flex items-center pb-8">
                <h4 className="pr-8 text-xs font-semibold uppercase font-manrope text-eight">
                  landmark
                </h4>
                <h5 className="text-xs font-normal font-manrope text-nine">
                  Eti-Osa
                </h5>
              </div>{" "}
              <div className="flex items-center pb-8">
                <h4 className="pr-8 text-xs font-semibold uppercase font-manrope text-eight">
                  Date of birth
                </h4>
                <h5 className="text-xs font-normal font-manrope text-nine">
                  2015/20/08
                </h5>
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-14">
            <div className="flex">
              <h3 className="flex items-center px-5 py-2 text-center uppercase border rounded border-thick-yellow text-s">
                Generate Acc No
              </h3>
              <Link to="/account">
                <h4 className="flex items-center py-2 ml-3 text-center uppercase border rounded border-thick-yellow bg-thick-yellow text-s px-14">
                  next
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
