import { NextResponse } from 'next/server'
import fs from 'fs/promises';

export async function POST(request: Request) {
  const formData = await request.formData()
  const make = formData.get('make')
  const model = formData.get('model')
  const badge = formData.get('badge')
  const logBookFile = formData.get('logBookFile')

  let logBookString: string
  try {
    logBookString = await readLogBook(logBookFile as File)
  } catch(err) {
    console.error(`err => `, err)
    return NextResponse.json({
      message: 'Cannot read log book'
    }, { status: 400 })
  }

  return NextResponse.json({
    make,
    model,
    badge,
    logBook: logBookString
  })
}

const readLogBook = async (logBookFile: File): Promise<string> => {
  const logBookString = await logBookFile.text()
  console.log(`logBookString => `, logBookString)
  return logBookString
}