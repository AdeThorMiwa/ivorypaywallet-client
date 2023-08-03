import Avatar from "../../../components/Avatar";
import { AddIcon } from "../../../components/icons/add";

const RecentBeneficiaries = () => {
  return (
    <section className="w-full">
      <h3 className="font-semibold mb-4">Recent Beneficiaries</h3>
      <div className="flex items-center">
        <button className="flex flex-col items-center  w-fit max-w-[64px] mr-5">
          <span className="w-[64px] h-[64px] bg-[#E6DDFF] flex justify-center items-center rounded-full">
            <AddIcon />
          </span>
          <span className="text-xs mt-1.5 text-center">Add</span>
        </button>
        <div className="flex overflow-x-scroll gap-x-4 container-snap items-center">
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
      </div>
    </section>
  );
};

export default RecentBeneficiaries;
