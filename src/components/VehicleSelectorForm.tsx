'use client'

import { SelectComponent } from '@/components/SelectComponent'

const makeOptions = [
  { label: 'Jeep', value: 'jeep' },
  { label: 'Ford', value: 'ford' },
]
export const VehicleSelectorForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2>Vehicle Selector Form</h2>
      <div className="flex flex-col gap-2">
        <SelectComponent
          name="Make"
          options={makeOptions}
        />
      </div>
    </div>
  )
}