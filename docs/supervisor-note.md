# IPNLF web-page viability test: supervisor briefing

## Purpose

We used a dummy membership page to test whether IPNLF can economically draft and review a standalone web page using GitHub and Netlify. It is a proof of the process and is visually different from the proposed Vessel project.

The original Netlify test remains unchanged as the **before version**: <https://hilarious-dango-7a8bd0.netlify.app/>. The cleaned baseline and the improvements are separately recorded in GitHub, so every change can be reviewed or reversed.

## What has changed

- Put the cleaned original page on GitHub's `main` branch.
- Made all improvements on a separate `viability/mobile-safety-metadata` branch.
- Limited Netlify's publish directory to `site`, preventing briefs, Word documents and working files elsewhere in the project from being uploaded.
- Removed unnecessary design-system notes and manifests from the public page files. They remain in the separate private-source folder locally.
- Added responsive layouts for phone and tablet. The mobile header follows the current IPNLF site's broad pattern: white header, colour logo, gold divider and a single accessible menu.
- Changed three-column content to two columns on tablet and one column on phone, and adapted spacing, headings, partner logos, statistics, quotations, CTA and footer.
- Added a meaningful page title, description, language, social-sharing metadata, favicon and browser theme colour.
- Added three layers of test-site search protection: page-level `noindex`, Netlify's `X-Robots-Tag`, and `robots.txt`.
- Added basic security headers covering content-type sniffing, referrer information, browser permissions and framing.
- Changed the contact address to `members@ipnlf.org`, matching the address found on the current official contact page. This should still receive an internal confirmation before a public launch.

## Checks completed

The improved branch was rendered and checked at 320, 375, 390, 768, 1024 and 1280 pixels. There was no horizontal overflow. The mobile menu opened, navigated and closed correctly; phone, tablet and desktop column changes applied as intended; CSS, images and the membership email link loaded correctly; and the browser console showed no errors.

A local publication check returned the page, logo and design-system CSS successfully. The previously exposed Word document and internal design-system readme returned 404 from the new publish folder.

These checks are good evidence that the approach has legs, but they are not a full accessibility audit, cross-browser certification or security assessment.

The search protections discourage indexing; they do not make the page private. Anyone with the URL can open it. If confidential or unapproved material is ever tested, the Netlify site needs access control or password protection as well as `noindex`.

## CSS and WordPress plugins

The page's CSS links work because its styles and assets are included together in the standalone Netlify deployment. It does **not** inherit the IPNLF WordPress theme automatically. If the WordPress agency changes the main site's fonts, colours, header or spacing, this page will not automatically follow those changes.

Publishing a separate Netlify page will not break the plugins on IPNLF.org because it does not run inside WordPress. The reverse is also important: WordPress plugins do not carry across. Forms, cookie consent, analytics, SEO controls, redirects, translations, accessibility tools and other plugin-provided services must be deliberately reproduced or integrated on the standalone page.

Before repeating the method, the most economical governance step would be to ask the agency for a small approved web brand kit: current fonts, colours, header/footer guidance, button styles and breakpoints. This is less work than exporting or recreating the whole WordPress theme.

## Remaining risks and recommended direction

The supplied prototype on the earlier improvement branch runs a custom page system and downloads React and Babel from unpkg.com in every visitor's browser; it also loads fonts from Google Fonts. If a third-party service is blocked, slow or changed, the page may fail or render poorly.

The later `viability/static-html-brand-audit` branch resolves this limitation: it uses pre-rendered HTML and CSS, self-hosts the open-licensed font files, retains only a small mobile-menu script and adds a strict Content Security Policy. The branches remain separate so the architectural versions can be compared before adoption.

For a temporary review link, this is acceptable if the limitation is understood. For a repeatable production approach, normal pre-rendered HTML and CSS with a small amount of JavaScript only where needed would be more reliable, secure, searchable and maintainable. It would also reduce dependencies and future support costs.

Other controls needed before public use are:

- content, image-rights and brand approval;
- accessibility review, including keyboard, screen-reader and colour-contrast testing;
- privacy/cookie review before adding analytics, forms or tracking;
- link, email and form-owner confirmation;
- testing in current Chrome, Edge, Firefox and Safari, plus real iOS and Android devices;
- a clear owner for future text, dependency and security updates.

## Proposed next step

Create a **separate Netlify branch preview or second Netlify test site** from the improvement branch. This will give us an improved “after” URL while preserving the existing before URL. It should remain blocked from search indexing and should not replace or sit under IPNLF.org until the agency has agreed how the page will integrate.

If approved for production, the preferred integration is for the agency to place the final page within the existing IPNLF site/template. A separate IPNLF subdomain routed to Netlify is a workable alternative, but it creates a second platform that needs its own analytics, consent, accessibility, security and maintenance arrangements.
