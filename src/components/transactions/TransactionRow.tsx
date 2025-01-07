import React from 'react';
import { Trash2, PenSquare } from 'lucide-react';
import { Transaction } from './types';

interface TransactionRowProps {
  transaction: Transaction;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction }) => {
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
      <td className="px-4 md:px-6 py-4">
        <div className="flex items-center">
          <img
            src={transaction.avatar}
            alt={transaction.name}
            className="h-8 w-8 rounded-full mr-3"
          />
          <div>
            <span className="font-medium block">{transaction.name}</span>
            <span className="text-sm text-gray-500 md:hidden">{transaction.email}</span>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell px-6 py-4 text-gray-600">{transaction.email}</td>
      <td className="hidden lg:table-cell px-6 py-4">{transaction.paymentType}</td>
      <td className="px-4 md:px-6 py-4">
        <div>
          <div>{transaction.paidDate}</div>
          <div className="text-sm text-gray-500">{transaction.paidTime}</div>
        </div>
      </td>
      <td className="px-4 md:px-6 py-4">${transaction.amount}</td>
      <td className="px-4 md:px-6 py-4">
        <span
          className={`inline-flex px-2 py-1 rounded-full text-sm ${
            transaction.status === 'successful'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {transaction.status}
        </span>
      </td>
      <td className="px-4 md:px-6 py-4">
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Trash2 className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <PenSquare className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </td>
    </tr>
  );
};
export default TransactionRow;