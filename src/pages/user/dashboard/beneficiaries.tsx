import AddButton from "../../../components/AddButton";
import Avatar from "../../../components/Avatar";

const RecentBeneficiaries = () => {
  return (
    <section className="w-full">
      <h3 className="font-semibold mb-4">Recent Beneficiaries</h3>
      <div className="flex items-center">
        <AddButton text="Add" />
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
