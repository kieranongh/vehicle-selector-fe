import React from 'react'

interface FileUploadComponentProps {
  label: string
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  isDisabled: boolean,
  key: number
}

export const FileUploadComponent = ({ label, onChange, isDisabled, key }: FileUploadComponentProps) => {
  return (
    <>
      <fieldset>
        <legend>{label}</legend>
        <input key={key} type="file" onChange={onChange} disabled={isDisabled} />
      </fieldset>
    </>
  )
}