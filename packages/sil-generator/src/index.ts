export default (File): any => {
  const ExpressionStatement = File.program.body[0]
  if (!ExpressionStatement) {
    return
  }
  const { expression } = ExpressionStatement

  const { openingElement, children = [] } = expression
  const tag = openingElement.name.name
  for (let i = 0; i < children.length; i++) {
    const opening = children[i].openingElement
    const child = children[i].children
  }
  console.log(tag)
}
