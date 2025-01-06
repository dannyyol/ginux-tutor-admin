import React from 'react';

const metrics = [
  { label: 'Income', value: '$200', change: '+20%' },
  { label: 'Withdrawal', value: '$2,80.00', change: '+20%' },
  { label: 'GinuxCoin', value: '$16.70', change: '-5%' },
];

const TransactionMetrics = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Transaction Metrics</h3>
        <select className="text-sm border border-gray-200 rounded-lg px-2 py-1">
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>
      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">{metric.label}</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{metric.value}</span>
                <span className={`text-sm ${
                  metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.change}
                </span>
              </div>
            </div>
            <div className="h-12 bg-gray-50 rounded-lg">
              {/* Placeholder for mini chart */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionMetrics;