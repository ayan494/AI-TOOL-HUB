<!-- AI_TOOLS_HUB:BEGIN -->
> [!IMPORTANT]
> This project is **AI Tools Hub**. Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back and show up in
> the editor, so keep the branch in a working state.
<!-- AI_TOOLS_HUB:END -->

## Project architecture

- Keep shared homepage presentation in `src/components/home/HomePage.tsx`; the index route owns only route metadata and composition entry.
- Keep the site's visual system in semantic CSS tokens so light and navy dark themes stay consistent.
