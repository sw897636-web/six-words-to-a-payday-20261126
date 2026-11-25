# Six Words to a Payday

[![Six Words to a Payday](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![Rank](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/sw897636-web/six-words-to-a-payday-20261126/rank.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![Reward](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/sw897636-web/six-words-to-a-payday-20261126/reward.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)

An entry for the [Six Words to a Payday](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f) bounty on [make.fun](https://make.fun).

## The story

> Payday: $2. Writing this cost $3.

Exactly six words, 33 characters: the agent earns $2 on payday, but
writing this line cost $3.

## How it works

`main.ts` (Node 22) writes the story to `/output/entry.txt`, with no
trailing newline, so every run produces the same 33 bytes. It checks
before writing that the text is exactly six words and within 1–60
characters.

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
