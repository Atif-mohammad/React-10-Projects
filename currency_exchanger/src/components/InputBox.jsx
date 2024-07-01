import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDiabled = false,
  currencyDisabled = false,
  className="",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label className='text-block/40 mb-2 inline-block '>{label}</label>
        <input type="number" 
        className='outline-none w-full bg-transparent py-1.5'
        placeholder='Amount'
        disabled={amountDiabled}
        value={amount}
        onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
        />
        <div className='w-1/2 flex flex-wrap justify-end text-right '>
        <p>CurrencyType</p>
        <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer ouline-none' value={selectedCurrency}
          onChange={(e)=>onCurrencyChange &&  onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}>
            {currencyOptions.map((currency)=>(<option key={currency} value={{currency}}></option>))}
          
        </select>
        </div>
      </div>
      </div>
  )
}

export default InputBox