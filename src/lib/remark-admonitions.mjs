export default function remarkAdmonitions() {
  return function transform(tree) {
    function visit(node) {
      if (!node || typeof node !== 'object') return

      if (Array.isArray(node.children)) {
        if (node.type === 'blockquote') {
          transformBlockquote(node)
        }
        for (const child of node.children) {
          visit(child)
        }
      }
    }

    function transformBlockquote(node) {
      if (!Array.isArray(node.children) || node.children.length === 0) return

      const firstChild = node.children[0]
      if (!firstChild || firstChild.type !== 'paragraph') return

      const firstTextChild = firstChild.children?.find((child) => child.type === 'text')
      if (!firstTextChild || typeof firstTextChild.value !== 'string') return

      const match = firstTextChild.value.match(/^\s*\[!(NOTE|TIP|IMPORTANT|WARNING)\]\s*/i)
      if (!match) return

      const rawType = match[1]
      const type = rawType.toLowerCase() // note, tip, important, warning

      // Remove the marker from the text content
      firstTextChild.value = firstTextChild.value.slice(match[0].length)

      // If the first text node becomes empty, let the rest of the paragraph handle spacing
      if (!firstTextChild.value.trim()) {
        firstChild.children = firstChild.children.slice(1)
      }

      node.data = node.data || {}
      node.data.hName = 'div'
      node.data.hProperties = node.data.hProperties || {}

      const classNames = ['admonition', `admonition-${type}`]
      const existing = node.data.hProperties.className

      if (Array.isArray(existing)) {
        node.data.hProperties.className = [...classNames, ...existing]
      } else if (typeof existing === 'string') {
        node.data.hProperties.className = [...classNames, existing]
      } else {
        node.data.hProperties.className = classNames
      }
    }

    visit(tree)
  }
}
