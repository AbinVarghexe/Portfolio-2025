
# GitHub Copilot Usage and Instructions

## Overview

This project leverages GitHub Copilot to accelerate development, provide code suggestions, and automate repetitive coding tasks. Copilot is integrated into the VS Code environment and can be used for a variety of programming languages and frameworks present in this repository.

## How to Use GitHub Copilot in This Project

1. **Enable Copilot Extension**: Ensure the GitHub Copilot extension is installed and enabled in VS Code.
2. **Code Suggestions**: As you type in any file (TypeScript, JavaScript, CSS, Prisma, etc.), Copilot will suggest code completions. Press `Tab` to accept a suggestion, or use `Ctrl+Space` to see more options.
3. **Multi-line Completions**: For larger code blocks, start typing a comment describing the function or component you want, and Copilot will generate the code for you.
4. **Context Awareness**: Copilot uses the context of your open files and project structure to provide relevant suggestions. For best results, keep related files open.
5. **Editing Existing Code**: Copilot can help refactor, document, or extend existing code. Select a code block and start editing or add a comment for Copilot to suggest improvements.
6. **Limitations**: Always review Copilot's suggestions for correctness, security, and style compliance. Copilot may not always follow project-specific conventions or best practices.

## Project-Specific Guidance

- **Next.js & React**: Copilot is effective for generating components, hooks, and API routes. Use descriptive comments to guide Copilot for custom logic.
- **Prisma**: Copilot can help with schema definitions and query generation. Double-check generated queries for correctness.
- **Design System**: For UI components in `src/components/ui/`, Copilot can suggest reusable patterns. Reference `design-system.ts` for consistency.
- **API Routes**: When working in `src/app/api/`, Copilot can scaffold route handlers and validation logic.

## Best Practices

- Use Copilot as an assistant, not a replacement for code review.
- Regularly commit your changes and review Copilot-generated code for accuracy.
- Update this document if you establish new Copilot usage patterns or project conventions.

---

## Instructions for Contributors

1. **Follow the Project Structure**: Organize new code according to the folders and conventions described in `STRUCTURE.md` and `README.md`.
2. **Linting and Formatting**: Use the provided ESLint and Prettier configurations. Run `pnpm lint` before committing.
3. **Testing**: Add or update tests as needed. Ensure all tests pass before submitting a PR.
4. **Documentation**: Update relevant documentation files (`README.md`, `QUICKSTART.md`, etc.) when you add new features or make significant changes.
5. **Pull Requests**: Submit clear, descriptive PRs. Reference related issues and describe the changes and reasoning.
6. **Security**: Do not commit sensitive information. Review Copilot suggestions for potential security issues.

For more details, see the documentation files in the root directory.
