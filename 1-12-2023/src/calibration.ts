import fs from "fs"

export class Calibration {
  readFileSync() {
    return fs.readFileSync("./puzzle", "utf-8")
  }

  processContent(fileContent: string) {
    let sum = 0
    fileContent.split(/\r?\n/).forEach((line: string) => {
      const characters = line.split("")

      const lineNumbersExtreme = []
      for (const character of characters) {
        if (!isNaN(Number(character))) {
          if (lineNumbersExtreme.length === 0) {
            lineNumbersExtreme.push(character)
          } else {
            lineNumbersExtreme[1] = character
          }
        }
      }

      sum +=
        lineNumbersExtreme.length === 1
          ? Number(`${lineNumbersExtreme[0]}${lineNumbersExtreme[0]}`)
          : Number(lineNumbersExtreme.join(""))
    })

    return sum
  }
}
