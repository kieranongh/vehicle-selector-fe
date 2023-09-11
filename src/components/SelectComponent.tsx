interface SelectOption {
  label: string,
  value: any
}
interface SelectComponentProps {
  name: string,
  options: SelectOption[],
}
export const SelectComponent = ({ options, name }: SelectComponentProps) => {
  return (
    <select name={name} id={name}>
      {options.map(opt => {
        return (
          <option value={opt.value}>{opt.label}</option>
        )
      })}
    </select>
  )

}