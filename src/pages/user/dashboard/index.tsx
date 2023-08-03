import Transaction from "../../../components/Transaction";
import { TransactionType } from "../../../interfaces/transaction";
import RecentBeneficiaries from "./beneficiaries";
import Header from "./header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="w-full max-w-[500px] mx-auto mt-5">
        <RecentBeneficiaries />
        <section className="mt-7">
          <div className="mb-7 flex justify-between items-center">
            <h3 className="font-semibold">Recent Beneficiaries</h3>
            <button className="text-xs text-[#6B6B6B]">View All</button>
          </div>
          <div className="space-y-3">
            <Transaction type={TransactionType.OUTGOING} />
            <Transaction type={TransactionType.INCOMING} />
            <Transaction type={TransactionType.OUTGOING} last />
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
