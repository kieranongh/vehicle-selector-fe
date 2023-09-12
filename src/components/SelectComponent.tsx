import React from 'react'

export interface ISelectOption {
  label: string,
  value: any
}
interface SelectComponentProps {
  label: string,
  name: string,
  value: any,
  options: SelectOption[] | null,
  handleChange: React.ChangeEventHandler<HTMLSelectElement>
}

export const SelectComponent = ({ label, name, value, options, handleChange }: SelectComponentProps) => {
  const placeholder = (!options && label) || ''

  return (
    <fieldset>
      <legend>{label}</legend>
      <select
        className="w-48"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        disabled={!options}
        placeholder={placeholder}
      >
        {options && options.map(opt => {
          return (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          )
        })}
      </select>
    </fieldset>
  )

}