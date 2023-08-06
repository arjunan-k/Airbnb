"use client";

import { useCallback } from "react";

interface CounterProps {
  title: string;
  subtitle: string;
  onChange: (value: number) => void;
  value: number;
}

const Counter: React.FC<CounterProps> = ({
  onChange,
  title,
  subtitle,
  value,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === -1) {
      return;
    }
    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col ">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center"></div>
    </div>
  );
};

export default Counter;
