import { Calibration } from "./calibration"

const calibrationClass = new Calibration()

describe("Calibration", () => {
  it("should return the correct sum for a single line should be 12", () => {
    const content = "1abc2"

    expect(calibrationClass.processContent(content)).toEqual(12)
  })

  it("should return the correct sum for a single line should be 12", () => {
    const content = "1abc22"

    expect(calibrationClass.processContent(content)).toEqual(12)
  })

  it("should return the correct sum for a single line should be 77", () => {
    const content = "treb7uchet\r\n"

    expect(calibrationClass.processContent(content)).toEqual(77)
  })

  it("should return the correct sum should be 142", () => {
    const content = "1abc2\r\npqr3stu8vwx\r\na1b2c3d4e5f\r\ntreb7uchet\r\n"

    expect(calibrationClass.processContent(content)).toEqual(142)
  })
})
