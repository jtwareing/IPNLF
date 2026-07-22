# IPNLF.org practical style audit

Audit date: 22 July 2026  
Source reviewed: <https://ipnlf.org/>

## Purpose and limits

This is a practical design inventory for economical prototype work. It records visible and computed design characteristics from IPNLF.org; it is not a copy of the WordPress theme and should not be treated as an agency-approved brand manual.

## Evidence observed on the live site

### Typography

- Display headings: **Bebas Neue**, regular weight.
- Body and navigation: **Open Sans**, generally medium-to-bold for controls.
- Desktop homepage H1 observed at approximately 80px with a 1.05 line-height.
- Mobile homepage H1 observed at approximately 43px with a 1.05 line-height.
- Desktop H2 observed at approximately 55px; mobile H2 approximately 32px on the sampled homepage sections.
- The live site scales type responsively rather than using one fixed size.

### Core colours

| Role | Observed value | Hex |
|---|---:|---:|
| Primary navy | `rgb(16, 54, 73)` | `#103649` |
| Existing prototype deep blue | `rgb(12, 70, 91)` | `#0c465b` |
| Gold / menu accent | `rgb(246, 174, 46)` | `#f6ae2e` |
| Teal | `rgb(47, 159, 138)` | `#2f9f8a` |
| Link blue | `rgb(24, 121, 189)` | `#1879bd` |
| White | `rgb(255, 255, 255)` | `#ffffff` |

Body copy frequently uses the primary navy with reduced opacity. Dark sections use white or partially transparent white text.

### Layout and responsive behaviour

- Main content containers commonly have a maximum width near 1200px.
- The sampled mobile breakpoint presents a fixed white header approximately 67px high.
- The mobile header uses the colour logo on the left and a gold square menu control on the right.
- Desktop headings and multi-column sections reduce substantially on phone widths.
- The site uses generous section spacing, strong full-width imagery and alternating white, pale and deep-blue section backgrounds.

### Component language

- Bebas Neue headings provide the strongest visual brand cue.
- Gold is used for high-priority controls and emphasis.
- Teal and blue act as supporting accents.
- Rounded pills are used selectively; the live WordPress site also contains square controls, especially in the mobile header.
- Photography is treated as full-bleed or large-format, normally with a deep-blue overlay to protect text contrast.

## External and plugin CSS observed

The homepage loads the IPNLF WordPress theme stylesheet plus CSS from several plugins, including Contact Form 7, Instagram Feed, blog-design packages, newsletter tools, A-Z listing and Twitter feed components. It also loads Adobe Typekit stylesheets.

This is evidence that downloading every stylesheet would reproduce a large amount of plugin-specific and unused code. It would not produce a clean or maintainable style guide.

## Implementation decisions informed by the audit

- Use the observed font pairing, but self-host the open-licensed Google Fonts copies used by the prototype.
- Use `#103649`, `#f6ae2e`, `#2f9f8a`, `#1879bd` and the existing prototype's `#0c465b` as a compact working palette.
- Use a 1200px maximum page container and responsive heading sizes.
- Bring the prototype mobile header closer to the live site: fixed white bar, colour logo and gold square menu control.
- Keep the page's own semantic CSS rather than importing the WordPress theme or plugin styles.

The removed browser dependencies previously required approximately 3.13 MB of third-party JavaScript on an uncached visit, before counting externally hosted fonts. The static branch makes no third-party runtime or font requests. Its self-hosted font files add approximately 0.59 MB to the repository and can be cached with the rest of the site.

## Evidence, inference and items requiring confirmation

**Evidence:** the fonts, computed colours, sampled type sizes, container widths, mobile header geometry and linked stylesheets were observed directly on the public site.

**Inference:** these recurring characteristics are likely part of IPNLF's intended web identity and are reasonable working defaults for prototypes.

**Not confirmed:** agency-approved spacing scales, exact breakpoint policy, button specifications, accessibility requirements, font licensing arrangements for the WordPress theme, and which legacy/plugin styles are still considered current.

## Recommended agency request

Ask for a compact approved web brand kit containing:

- font families, weights and licences;
- primary and accessible colour combinations;
- heading and body scales;
- page widths and responsive breakpoints;
- button, link, header and footer specifications;
- logo files and minimum-use guidance;
- approved reusable components.

That confirmation is safer and cheaper than maintaining a copied snapshot of the WordPress CSS.
