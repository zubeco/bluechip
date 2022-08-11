export default function OutletHeader() {
  return (
    <div>
      <div className="flex items-center h-24 pl-12 border-b-2 border-gray-100 rounded-t-md">
        <div className="flex items-center">
          <div className="rounded-3xl w-14 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU"
              alt="profilealt"
              className="rounded-full"
            />
          </div>
          <div className="pl-4">
            <h2 className="pb-1 text-base font-bold font-manrope text-third">
              Tomiwa Ogunremi
            </h2>
            <p className="font-normal text-seven text-s">BVN:3939848490505</p>
          </div>
        </div>
      </div>
    </div>
  );
}
