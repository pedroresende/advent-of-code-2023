import { Calibration } from "./calibration"

const calibration = new Calibration()
console.log(calibration.processContent(calibration.readFileSync()))
