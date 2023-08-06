import { useEffect, useState } from "react";
import Transaction from "../../../components/Transaction";
import { ITransaction } from "../../../interfaces/transaction";
import { transactionTransformer } from "../../../utils/transaction";
import ApiClient from "../../../utils/api-client";
import { toast } from "react-hot-toast";

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiClient.transaction
      .getTransactions()
      .then((res) => setTransactions(res.data))
      .catch(() => toast.error("Error while fetching transactions"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="mt-7">
      <div className="mb-7 flex justify-between items-center">
        <h3 className="font-semibold">Recent Transactions</h3>
        <button className="text-xs text-[#6B6B6B]">View All</button>
      </div>
      {loading && (
        <div className="flex justify-center">
          <span className="w-[22px] h-[22px] inline-block animate-spin rounded-full border-2 border-t-[#5732BF]" />
        </div>
      )}
      {transactions?.length && (
        <ul className="space-y-3">
          {transactions?.map((tx, i) => (
            <Transaction
              {...transactionTransformer(tx)}
              last={i === transactions.length - 1}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default RecentTransactions;
