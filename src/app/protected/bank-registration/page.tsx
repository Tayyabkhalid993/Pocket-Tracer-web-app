'use client'
import { useState } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

export default function BankRegistration() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [branch, setBranch] = useState('');
  const [openingBalance, setOpeningBalance] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!user || !bankName.trim()) {
      setIsLoading(false);
      return;
    }

    const { error } = await supabase
      .from('banks')
      .insert({
        user_id: user.id,
        name: bankName.trim(),
        account_number: accountNumber.trim(),
        branch: branch.trim(),
        opening_balance: parseFloat(openingBalance) || 0,
        current_balance: parseFloat(openingBalance) || 0
      });

    if (!error) {
      setBankName('');
      setAccountNumber('');
      setBranch('');
      setOpeningBalance('');
      setSuccessMessage('Bank account created successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Register Bank Account</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">
            Bank Name
          </label>
          <input
            type="text"
            id="bankName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">
            Branch
          </label>
          <input
            type="text"
            id="branch"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="openingBalance" className="block text-sm font-medium text-gray-700 mb-1">
            Opening Balance
          </label>
          <input
            type="number"
            id="openingBalance"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={openingBalance}
            onChange={(e) => setOpeningBalance(e.target.value)}
            step="0.01"
            min="0"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isLoading ? 'Registering...' : 'Register Bank'}
        </button>
        
        {successMessage && (
          <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-md text-sm">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
}