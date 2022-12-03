const { fireEvent, getByText } = require("@testing-library/dom")
require("@testing-library/jest-dom/extend-expect")

const path = require("path")
const fs = require("fs")
const jsdom = require("jsdom")
const { JSDOM } = jsdom

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8")

let dom
let container

describe("index.html", () => {
  beforeEach(() => {
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
    // This is indeed dangerous and should only be done with trusted content.
    // https://github.com/jsdom/jsdom#executing-scripts
    dom = new JSDOM(html, { runScripts: "dangerously" })
    container = dom.window.document.body
  })

  it("renders an answer element", () => {
    expect(dom.window.document.getElementById("answer")).not.toBeNull()
    // expect(getByText(container, "Pun Generator")).toBeInTheDocument()
  })

  it("check if evaluation is correct", async () => {
    const evaluateButton = dom.window.document.getElementById("evaluate")
    const answerField = dom.window.document.getElementById("answer")

    const LHS = "2+(24/6)"
    const RHS = "6"

    answerField.value = LHS
    fireEvent.click(evaluateButton)

    const result = answerField.value
    expect(result).toBe(RHS)
    // expect(document.getElementById("answer")).not.toBeNull()
    // expect(getByText(container, "Pun Generator")).toBeInTheDocument()
  })

  // it("renders a new paragraph via JavaScript when the button is clicked", async () => {
  //   const button = getByText(container, "Click me for a terrible pun")

  //   fireEvent.click(button)
  //   let generatedParagraphs = container.querySelectorAll("#pun-container p")
  //   expect(generatedParagraphs.length).toBe(1)

  //   fireEvent.click(button)
  //   generatedParagraphs = container.querySelectorAll("#pun-container p")
  //   expect(generatedParagraphs.length).toBe(2)

  //   fireEvent.click(button)
  //   generatedParagraphs = container.querySelectorAll("#pun-container p")
  //   expect(generatedParagraphs.length).toBe(3)
  // })
})
