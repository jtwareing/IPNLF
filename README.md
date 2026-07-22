# IPNLF landing-page viability test

This repository records the membership-page prototype used to test an economical workflow for creating standalone IPNLF web pages.

## Versions

- `main` is the cleaned baseline: the original page, with source documents excluded from Git.
- `viability/mobile-safety-metadata` contains the responsive, test-safety and metadata improvements.
- The existing Netlify page at <https://hilarious-dango-7a8bd0.netlify.app/> remains the untouched before version.

The membership copy is dummy test content. It demonstrates the proposed workflow; it is not the proposed Vessel project page.

## Netlify configuration

The Netlify publish directory is `site`. Only files inside that folder should be made public. Working notes, briefs and other source documents belong outside `site` and are also excluded by `.gitignore`.

For an improved test without changing the before version, create a separate Netlify site or branch deploy from `viability/mobile-safety-metadata`. Confirm that Netlify reads `netlify.toml` and reports `site` as the publish directory before deploying.

## Review workflow

1. Make each piece of work on a named branch.
2. Use a Netlify branch/deploy preview for review.
3. Check phone, tablet and desktop layouts, links, images, accessibility basics and browser errors.
4. Obtain content and brand approval.
5. Merge the approved branch into `main`.
6. Let Netlify deploy the approved commit, retaining the previous deploy for rollback.

## Current architectural limitation

This supplied prototype uses a custom browser runtime and downloads React and Babel from unpkg.com, plus fonts from Google Fonts. Those services are external dependencies. For a repeatable production workflow, the preferred next step is pre-rendered HTML and CSS with only the JavaScript genuinely required by the page.

