# OptiHR — Afrikaans Translation Pack

This folder contains the complete Afrikaans translation set for the OptiHR website,
ready for human review before being wired into the codebase via `next-intl` or a
similar i18n library.

## What's here

| File | Covers |
|---|---|
| `00-glossary.md` | Brand terms, statutory bodies (CCMA, BCEA, LRA, EEA, OHSA, POPIA, SACE, CIPC), HR terminology, marketing phrases, reviewer notes. **Review this first.** |
| `01-microcopy.md` | Sitewide microcopy — nav, footer, buttons, CTAs, badges, form labels, validation messages, chat widget, 404. |
| `02-home.md` | Home page (hero, "Who we are", FAQ, testimonials, SEO). |
| `03-about.md` | About Us page (founder block, Rhodene block, "Why choose" cards, testimonials, SEO). |
| `04-contact.md` | Contact page (header, contact details, 3-step form copy, thank-you page, SEO). |
| `05-faq.md` | FAQ page — all 6 sections with full Q&A, SEO. |
| `06-services.md` | Services archive page + every service card title/body/CTA + each detail-page intro paragraph. |
| `07-audience-pages.md` | All four audience pages: small businesses, large businesses, independent schools, AI in the workplace. |
| `08-pricing.md` | Pricing page — banners, all 5 retainer packages, 3 prepaid packages, company secretarial, POPIA tiers, FAQ, SEO. |
| `09-popia-legal.md` | POPIA compliance overview page + full Privacy Notice / Terms / Cookie Policy. ⚠️ Legal text needs attorney review. |
| `10-insights.md` | OptiBuzz archive page + all 16 article titles, excerpts, categories, dates. (Article bodies recommended for fresh authoring rather than translation.) |

## How to review

Each file uses side-by-side English | Afrikaans tables. Walk through page by page,
mark up corrections directly in the markdown, and tick the **Sign-off** boxes at
the bottom of each file once approved.

The **glossary** (`00-glossary.md`) is the single source of truth for terminology.
If you want a term changed (e.g. "Behoudfooi" → "Retainer-fooi"), mark it in the
glossary first — every other file uses it.

## What hasn't been translated yet

By design, two areas are deferred to a follow-up phase:

1. **Service detail page deep content** (`06b-service-details.md` placeholder) — the
   "whyOptiHR" rows, "legalConsiderations" rows, FAQ, and `sections[]` arrays inside
   each of the 13 service detail JSONs. These are 200–250 lines each. The headline
   copy (title, description, CTA) IS translated in `06-services.md`.

2. **OptiBuzz article bodies** — the 16 articles each have 5–8 sections of
   long-form expert commentary. **Recommendation: author these fresh in Afrikaans**
   rather than translating, so the voice feels native to a SA Afrikaans reader.
   All headline metadata IS translated in `10-insights.md`.

## Next steps after sign-off

1. **Approve glossary** — corrections cascade to every file.
2. **Walk through page files** in order (microcopy → home → about → etc.).
3. **Legal review** of `09-popia-legal.md` by an Afrikaans-speaking attorney.
4. **Decide on article body strategy** — translate vs. fresh authoring.
5. **Code refactor phase** — add `next-intl`, route prefix `/af/`, language toggle
   in nav, wire each translated string into the codebase.

## Voice and tone notes

- Translations preserve OptiHR's **direct, warm, expert** voice rather than
  defaulting to overly formal or bureaucratic Afrikaans.
- Brand terms (OptiHR, OptiAI, OptiBuzz, OPTI-REMOTE, etc.) are NOT translated.
- Statutory acronyms (CCMA, POPIA, SACE, CIPC) follow the glossary's bilingual
  pattern: spell out in Afrikaans on first mention, then use the acronym.
- Numbers, percentages, prices (R), email addresses, phone numbers, URLs are kept
  identical across both languages.
- Compound nouns follow Afrikaans hyphenation rules (e.g. "MH-nakoming",
  "KVBA-suksessyfer", "vakbond-geskil").

## Reviewer info

Each file ends with a sign-off block:

```
- [ ] Reviewer reviewed (initial + date): __________
- [ ] Approved for use in code translations
```

Once all 11 files are approved, the technical i18n work can begin.
