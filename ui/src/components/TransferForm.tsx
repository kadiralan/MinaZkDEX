import { Dispatch, SetStateAction } from 'react';

type TransferFormProps = {
  transferAmount: number;
  setTransferAmount: Dispatch<SetStateAction<number>>;
  transferRecipientAddress: string;
  setTransferRecipientAddress: Dispatch<SetStateAction<string>>;
  onTransferTokens: () => void;
};

const TransferForm: React.FC<TransferFormProps> = ({
  transferAmount,
  setTransferAmount,
  transferRecipientAddress,
  setTransferRecipientAddress,
  onTransferTokens,
}) => {
  return (
    <div className="flex flex-col space-y-2 items-center">
      <input
        type="number"
        value={transferAmount}
        onChange={(e) => setTransferAmount(Number(e.target.value))}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        min="0"
      />
      <input
        type="text"
        value={transferRecipientAddress}
        onChange={(e) => setTransferRecipientAddress(e.target.value)}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none"
        placeholder="Recipient Address"
      />
      <button
        onClick={onTransferTokens}
        className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      >
        Transfer Tokens
      </button>
    </div>
  );
};

export default TransferForm;
