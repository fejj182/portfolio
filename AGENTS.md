# Agent Requirements

## Format Awareness Requirement

When working with this codebase, agents must:

1. **Examine existing content structure** before creating new content
2. **Follow established schemas** for content collections (blog, projects, prompts)
3. **Match existing format patterns** when creating similar content
4. **Check content/config.ts** for schema definitions before creating content
5. **Preserve existing frontmatter structure** and required fields

### Example: Prompt Journal Entries

When creating prompt journal entries, agents must:
- Use the correct frontmatter schema from `src/content/config.ts`
- Include all required fields: `title`, `description`, `date`, `prompt`, `outputs`
- Follow the established format pattern from existing entries
- Use proper date format (YYYY-MM-DD)
- Structure content consistently with existing entries

### Violation Example

❌ **Incorrect**: Creating content without checking existing format patterns
✅ **Correct**: Examining existing content structure and matching established patterns

## Problem-Solving Protocol

When encountering technical issues or errors, agents must:

1. **Fix the import/approach first** - Research the correct import path or usage pattern
2. **Use the correct framework pattern** - Find the proper way to implement the requested approach
3. **Explain the issue and ask** - If unable to resolve, explain what went wrong and ask how to proceed
4. **Never silently switch approaches** - Always explain why you're changing from the user's requested method

### Violation Example

❌ **Incorrect**: Silently switching from user's requested Option 1 to a different approach without explanation
✅ **Correct**: Fixing the import error, finding the correct pattern, or explaining the issue and asking for guidance

---

*This requirement was established after a format mismatch in prompt journal creation on 20-01-2025.*
*Problem-solving protocol added after approach switching incident on 20-01-2025.*
