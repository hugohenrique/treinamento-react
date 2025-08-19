import { useState } from 'react'

export function useStepper(totalSteps: number) {
  const [step, setStep] = useState(0)
  const next = () => setStep(s => Math.min(s + 1, totalSteps - 1))
  const prev = () => setStep(s => Math.max(s - 1, 0))
  const isFirst = step === 0
  const isLast = step === totalSteps - 1
  return { step, next, prev, isFirst, isLast }
}
