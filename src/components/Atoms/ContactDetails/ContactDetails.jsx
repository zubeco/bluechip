import SubHeader from "../../Molecules/SubHeader/SubHeader";

export default function ContactDetails() {
  return (
    <div>
      <div className="flex items-center pt-12 pb-5">
        <h3 className="text-2xl font-bold text-third font-manrope pr-4">
          New Account(Individual)
        </h3>
        <p className="text-s font-semibold text-secondary px-2 py-1 bg-white rounded-sm mr-2">
          DRAFT
        </p>
        <p className="text-s font-semibold text-secondary px-2 py-1 bg-fourth rounded-sm">
          RESTRICTED
        </p>
      </div>
      
      <SubHeader />
    </div>
  );
}
