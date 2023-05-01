import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

interface DropDownProps {
  totalAdults: number;
  setTotalAdults: (value: number) => void;
}

type Option = {
  value: number;
  label: string;
};

const options: Option[] = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
];

function Select({totalAdults, setTotalAdults}: DropDownProps) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = parseInt(event.target.value, 10);
    const selected = options.find((option) => option.value === value);
    setSelectedOption(selected || null);
    setTotalAdults(value)
  }

  return (
    <div className="relative mt-2.5 sm:mt-0 w-full sm:w-16">
      <div className="flex justify-between align-center relative w-full sm:w-16 h-16">
        <select
          className="w-full appearance-none border rounded px-4 py-2 pr-8 cursor-pointer leading-tight focus:outline-none"
          value={selectedOption?.value ?? ''}
          onChange={handleSelectChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <AiOutlineDown />
        </div>
      </div>
    </div>
  );
}

export default Select;
