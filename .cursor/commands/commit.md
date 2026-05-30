# Commit (author only)

Create a git commit for the current changes. Follow these rules strictly.

## Before committing

1. Run `git status` and `git diff` (staged and unstaged) to understand what will be committed.
2. Stage only relevant files with `git add` (never stage `.env.local`, secrets, or credentials).
3. Draft a concise commit message (1–2 sentences) focused on **why**, matching recent commit style in `git log`.

## Commit message rules

- Subject + optional body only.
- **No** `Co-authored-by`, `Signed-off-by`, `Reviewed-by`, or any contributor trailers.
- **No** AI/Cursor/bot attribution lines.
- Author is only whoever is configured in `git config user.name` / `user.email`.

## Execute commit

Use a HEREDOC for the message, for example:

```bash
git commit -m "$(cat <<'EOF'
Your commit message here.

EOF
)"
```

After commit, run `git status` to confirm success.

If the user did not explicitly ask to push, do **not** push to remote.
