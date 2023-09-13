import React from 'react'

interface FileUploadComponentProps {
  label: string
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  isDisabled: boolean
}

export const FileUploadComponent = ({ label, onChange, isDisabled }: FileUploadComponentProps) => {
  return (
    <>
      <fieldset>
        <legend>{label}</legend>
        <input type="file" onChange={onChange} disabled={isDisabled}/>
      </fieldset>
    </>
  )
}