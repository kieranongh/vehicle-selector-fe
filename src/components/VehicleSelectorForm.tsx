'use client'
import React from 'react'

import { VEHICLES } from '@/models/vehicle'
import { capitalise } from '@/util/util'
import { SelectComponent } from '@/components/SelectComponent'


const makeOptions = Object.keys(VEHICLES).map(make => ({
  label: capitalise(make),
  value: make,
}))

export const VehicleSelectorForm = () => {
  const [make, setMake] = React.useState<string>('')

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMake(e.target.value)
  }

  return (
    <div className="flex flex-col gap-4">
      <h2>Vehicle Selector Form</h2>
      <div className="flex flex-col gap-2 w-48">
        <SelectComponent
          label="Make"
          name="make"
          options={makeOptions}
          value={make}
          handleChange={handleMakeChange}
        />
      </div>
      <div>
        Make: {make}
      </div>
    </div>
  )
}