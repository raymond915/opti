import { create } from "zustand"

type StepInvalidStore = {
	isStepInvalid: boolean
}
type StepInvalidActions = {
	setStepInvalid: (currenValidity: StepInvalidStore["isStepInvalid"]) => void
}
type StepInvalid = StepInvalidStore & StepInvalidActions

export const useStepInvalid = create<StepInvalid>()((set) => ({
	isStepInvalid: true,
	setStepInvalid: (valid) =>
		set({
			isStepInvalid: valid,
		}),
}))
