# Devnotes

Tired of keeping different notepad files scattered around? Do you struggle where to put
simple notes as: credentials to testing account, what to do next, links to issues you are solving or
taking quick notes before going to lunch?

Simple tool to keep your personal dev notes close to project, accessed by your IDE is here.

## How to use

```bash
npm install -g @msmid/devnotes
```

in your project root:

```bash
devnotes init
```

## Commands

### `init`

- creates empty `devnotes.md` in your current path
- append devnotes.md to `.gitignore`

### `add`

- adds markdown element to `devnotes.md`
- available subcommands `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `a`

### `help`

- sefl-explanatory
