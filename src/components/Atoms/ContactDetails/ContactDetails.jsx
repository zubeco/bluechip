import SubHeader from "../../Molecules/SubHeader/SubHeader";

export default function ContactDetails() {
  return (
    <div>
      <div className="flex items-center pt-12 pb-5">
        <h3 className="pr-4 text-2xl font-bold text-third font-manrope">
          New Account(Individual)
        </h3>
        <p className="px-2 py-1 mr-2 font-semibold bg-white rounded-sm text-s text-secondary">
          DRAFT
        </p>
        <p className="px-2 py-1 font-semibold rounded-sm text-s text-secondary bg-fourth">
          RESTRICTED
        </p>
      </div>
      <SubHeader />
    </div>
  );
}
