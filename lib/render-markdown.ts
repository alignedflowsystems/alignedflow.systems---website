/**
 * Lightweight markdown-to-HTML converter.
 * Handles headings, bold, italic, inline code, unordered lists, tables, horizontal rules,
 * and paragraphs. No external dependencies required.
 */
export function renderMarkdown(md: string): string {
  const lines = md.split("\n")
  const output: string[] = []
  let inList = false
  let inTable = false
  let tableHeaderDone = false

  const closeList = () => {
    if (inList) {
      output.push("</ul>")
      inList = false
    }
  }

  const closeTable = () => {
    if (inTable) {
      output.push("</tbody></table>")
      inTable = false
      tableHeaderDone = false
    }
  }

  const processInline = (text: string): string => {
    return text
      // Bold
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      // Italic
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      // Inline code
      .replace(/`(.+?)`/g, "<code>$1</code>")
      // Links [label](href)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Heading 3
    if (line.startsWith("### ")) {
      closeList()
      closeTable()
      output.push(`<h3>${processInline(line.slice(4))}</h3>`)
      continue
    }

    // Heading 2
    if (line.startsWith("## ")) {
      closeList()
      closeTable()
      output.push(`<h2>${processInline(line.slice(3))}</h2>`)
      continue
    }

    // Heading 1
    if (line.startsWith("# ")) {
      closeList()
      closeTable()
      output.push(`<h1>${processInline(line.slice(2))}</h1>`)
      continue
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      closeList()
      closeTable()
      output.push("<hr>")
      continue
    }

    // Table row
    if (line.trim().startsWith("|")) {
      const cells = line
        .trim()
        .split("|")
        .filter((_, idx, arr) => idx !== 0 && idx !== arr.length - 1)
        .map((c) => c.trim())

      // Separator row (---|---|---)
      if (cells.every((c) => /^[-:]+$/.test(c))) {
        if (!tableHeaderDone) {
          output.push("<tbody>")
          tableHeaderDone = true
        }
        continue
      }

      if (!inTable) {
        closeList()
        output.push('<table><thead><tr>')
        cells.forEach((c) => output.push(`<th>${processInline(c)}</th>`))
        output.push("</tr></thead>")
        inTable = true
        tableHeaderDone = false
        continue
      }

      if (!tableHeaderDone) {
        // Additional header rows before separator - treat as header
        output.push("<tr>")
        cells.forEach((c) => output.push(`<th>${processInline(c)}</th>`))
        output.push("</tr>")
        continue
      }

      output.push("<tr>")
      cells.forEach((c) => output.push(`<td>${processInline(c)}</td>`))
      output.push("</tr>")
      continue
    }

    // Unordered list item
    if (line.startsWith("- ")) {
      closeTable()
      if (!inList) {
        output.push("<ul>")
        inList = true
      }
      output.push(`<li>${processInline(line.slice(2))}</li>`)
      continue
    }

    // Empty line
    if (line.trim() === "") {
      closeList()
      closeTable()
      output.push("")
      continue
    }

    // Regular paragraph
    closeTable()
    if (inList) {
      // Continuation of list context - close list first
      closeList()
    }
    output.push(`<p>${processInline(line)}</p>`)
  }

  closeList()
  closeTable()

  return output.join("\n")
}
