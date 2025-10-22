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

---

*This requirement was established after a format mismatch in prompt journal creation on 20-01-2025.*
