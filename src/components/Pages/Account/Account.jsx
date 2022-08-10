import { Link } from "react-router-dom";
import "./Account.css";
import OutletHeader from "../../Atoms/OutletHeader/OutletHeader";
import ContactDetails from "../../Atoms/ContactDetails/ContactDetails";

export default function Account() {
  return (
    <div className="w-main">
      <ContactDetails />
      <div className="mt-4 bg-white rounded-md h-myheight shadow-myshadow">
        <OutletHeader />
        <div className="px-12 pt-10">
          <h1 className="text-xs font-bold uppercase font-manrope text-sec">
            card preferences
          </h1>

          <div className="block w-full pt-12">
            <div className="pr-0">
              <div className="flex items-center justify-between pb-8">
                <h4 className="pr-8 font-semibold uppercase text-s font-manrope text-sec">
                  DEBIT CARD
                </h4>
                <div className="flex w-9/12">
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Mastercard</p>
                  </div>
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Verve Card</p>
                  </div>{" "}
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Visa Card</p>
                  </div>{" "}
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Union Pay</p>
                  </div>{" "}
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Prepaid Card</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pr-0">
              <div className="flex items-center justify-between pb-8">
                <h4 className="pr-2 font-semibold uppercase text-s font-manrope text-sec">
                  CREDIT CARD
                </h4>
                <div className="flex w-9/12">
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Mastercard</p>
                  </div>
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="capitalize text-third text-s">Verve</p>
                  </div>{" "}
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className=" text-third text-s">Visa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pr-0">
              <div className="flex items-center justify-between pb-8">
                <h4 className="pr-2 font-semibold uppercase text-s font-manrope text-sec">
                  ONLINE BANKING
                </h4>
                <div className="flex w-9/12">
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Mobile Banking</p>
                  </div>
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="capitalize text-third text-s">
                      Internet banking
                    </p>
                  </div>{" "}
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className=" text-third text-s">USSD Banking</p>
                  </div>{" "}
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Biometric ATM</p>
                  </div>{" "}
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Soft Token</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pr-0">
              <div className="flex items-center justify-between pb-8">
                <h4 className="pr-8 font-semibold uppercase text-s font-manrope text-sec">
                  TRANSACTION NOTIFICATION
                </h4>
                <div className="flex w-9/12">
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">SMS Alert</p>
                  </div>
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Email Alert</p>
                  </div>{" "}
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">
                      Transaction Notification
                    </p>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="pr-0">
              <div className="flex items-center justify-between pb-8">
                <h4 className="font-semibold uppercase pr-14 text-s font-manrope text-sec">
                  STATEMENT PREFERENCE
                </h4>
                <div className="flex w-9/12">
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Email</p>
                  </div>
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Post</p>
                  </div>{" "}
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Branch</p>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="pr-0">
              <div className="flex items-center justify-between pb-8">
                <h4 className="pr-8 font-semibold uppercase text-s font-manrope text-sec">
                  STATEMENT FREQUENCY
                </h4>
                <div className="flex w-9/12">
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Monthly</p>
                  </div>
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Quarterly</p>
                  </div>{" "}
                  <div className="flex items-center pr-6">
                    <div className="pr-2">
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <p className="text-third text-s">Semi-annually</p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end pr-12 pt-14">
          <div className="flex">
            <Link to="/contact">
              <h4 className="flex items-center py-2 ml-3 text-center uppercase border rounded border-thick-yellow bg-thick-yellow text-s px-14">
                next
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
