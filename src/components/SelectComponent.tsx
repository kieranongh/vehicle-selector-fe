import React from 'react'

interface SelectOption {
  label: string,
  value: any
}
interface SelectComponentProps {
  label: string,
  name: string,
  value: any,
  options: SelectOption[],
  handleChange: React.ChangeEventHandler<HTMLSelectElement>
}

export const SelectComponent = ({ label, name, value, options, handleChange }: SelectComponentProps) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <select className="w-48" name={name} id={name} value={value} onChange={handleChange}>
        {options.map(opt => {
          return (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          )
        })}
      </select>
    </fieldset>
  )

}