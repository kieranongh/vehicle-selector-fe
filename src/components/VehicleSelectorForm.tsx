'use client'
import React from 'react'

import { VEHICLES } from '@/models/vehicle'
import { capitalise } from '@/util/util'
import { SelectComponent, ISelectOption } from '@/components/SelectComponent'
import { FileUploadComponent } from '@/components/FileUploadComponent'

const makePlaceHolder = { label: "Select make", value: '' }
const modelPlaceHolder = { label: "Select model", value: '' }
const badgePlaceHolder = { label: "Select badge", value: '' }

const makeOptions: ISelectOption[] = [
  makePlaceHolder,
  ...Object.keys(VEHICLES).map(make => ({
    label: capitalise(make),
    value: make,
  }))
]


export const VehicleSelectorForm = () => {
  const [make, setMake] = React.useState<string>('')
  const [model, setModel] = React.useState<string>('')
  const [badge, setBadge] = React.useState<string>('')
  const [modelOptions, setModelOptions] = React.useState<ISelectOption[]>([modelPlaceHolder])
  const [badgeOptions, setBadgeOptions] = React.useState<ISelectOption[]>([badgePlaceHolder])

  const [logBookFile, setLogBookFile] = React.useState<File>()

  const disableUploadAndSubmit = !(make && model && badge)

  // Set model options
  React.useEffect(() => {
    const newModelOptions: ISelectOption[] = []

    if (make) {
      const models = Object.keys(VEHICLES[make as keyof typeof VEHICLES]).map(model => ({
        value: model,
        label: model,
      }))
      newModelOptions.push(...models)
    }
    newModelOptions.unshift(modelPlaceHolder)
    setModelOptions(newModelOptions)
  }, [make])

  // Set badge options
  React.useEffect(() => {
    const newBadgeOptions: ISelectOption[] = []

    if (make && model) {
      const listOfBadges = VEHICLES[make as keyof typeof VEHICLES]

      // Needs stronger typing - not worth the time for this exercise
      //@ts-expect-error
      const badges = listOfBadges[model as keyof typeof listOfBadges].map((badge: string) => ({
        value: badge,
        label: badge,
      }))
      newBadgeOptions.push(...badges)
    }
    newBadgeOptions.unshift(badgePlaceHolder)
    setBadgeOptions(newBadgeOptions)
  }, [make, model])

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMake(e.target.value)
    setModel('')
    setBadge('')
  }
  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setModel(e.target.value)
    setBadge('')
    setError('')
  }
  const handleBadgeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBadge(e.target.value)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLogBookFile(e.target.files[0]);
    }
  };

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
        <SelectComponent
          label="Model"
          name="model"
          options={modelOptions}
          value={model}
          handleChange={handleModelChange}
        />
        <SelectComponent
          label="Badge"
          name="badge"
          options={badgeOptions}
          value={badge}
          handleChange={handleBadgeChange}
        />

        <FileUploadComponent
          label="Upload logbook"
          onChange={handleFileChange}
          isDisabled={disableUploadAndSubmit}
        />
      </div>
    </div>
  )
}