/* @ds-bundle: {"format":3,"namespace":"IPNLFDesignSystem_3c2b4e","components":[{"name":"SectionHeader","sourcePath":"components/brand/SectionHeader.jsx"},{"name":"StatBlock","sourcePath":"components/brand/StatBlock.jsx"},{"name":"ValueCard","sourcePath":"components/brand/ValueCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/brand/SectionHeader.jsx":"2ccacfce19c2","components/brand/StatBlock.jsx":"e350ff425c4a","components/brand/ValueCard.jsx":"b60af1df802c","components/core/Badge.jsx":"5660a11dc88c","components/core/Button.jsx":"3abc85c652ec","components/core/Card.jsx":"7833e5e346d9","components/core/Input.jsx":"f537bcba510b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IPNLFDesignSystem_3c2b4e = window.IPNLFDesignSystem_3c2b4e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IPNLF SectionHeader — eyebrow (overline) + display headline,
 * the consistent header pattern across the brand. Optional intro.
 */
function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      maxWidth: align === "center" ? "720px" : "none",
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 700,
      fontSize: "13px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--brand-accent)",
      marginBottom: "12px"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(32px, 4.5vw, 56px)",
      lineHeight: 0.96,
      letterSpacing: "0.01em",
      textTransform: "uppercase",
      color: onDark ? "var(--text-on-dark)" : "var(--text-strong)",
      margin: 0
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "18px",
      lineHeight: 1.6,
      color: onDark ? "var(--text-on-dark-soft)" : "var(--text-muted)",
      marginTop: "16px",
      marginBottom: 0,
      maxWidth: "56ch",
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0,
      textWrap: "pretty"
    }
  }, intro));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IPNLF StatBlock — big-number impact statistic.
 * Large Bebas figure over a short label. Used throughout
 * the deck for membership / impact data (e.g. "87% of oceans").
 */
function StatBlock({
  value,
  label,
  tone = "deep",
  align = "left",
  style = {},
  ...rest
}) {
  const tones = {
    deep: "var(--ipnlf-deep)",
    teal: "var(--ipnlf-teal)",
    ocean: "var(--ipnlf-ocean)",
    orange: "var(--ipnlf-orange)",
    gold: "var(--ipnlf-gold)",
    white: "#fff"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(48px, 7vw, 88px)",
      lineHeight: 0.9,
      letterSpacing: "0.01em",
      color: tones[tone] || tones.deep
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "14px",
      lineHeight: 1.4,
      fontWeight: 600,
      color: tone === "white" ? "var(--text-on-dark-soft)" : "var(--text-muted)",
      marginTop: "8px",
      maxWidth: "22ch",
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/brand/ValueCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IPNLF ValueCard — icon medallion + title + body.
 * Built for the brand's hand-drawn white line icons, which sit
 * inside a colored circular medallion. Used for values, services,
 * and feature grids.
 */
function ValueCard({
  icon,
  iconTone = "teal",
  title,
  children,
  variant = "light",
  style = {},
  ...rest
}) {
  const tones = {
    deep: "var(--ipnlf-deep)",
    teal: "var(--ipnlf-teal)",
    ocean: "var(--ipnlf-ocean)",
    orange: "var(--ipnlf-orange)"
  };
  const surfaces = {
    light: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      boxShadow: "var(--shadow-sm)",
      titleColor: "var(--text-strong)"
    },
    soft: {
      background: "var(--surface-soft)",
      color: "var(--text-body)",
      titleColor: "var(--text-strong)"
    },
    dark: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark-soft)",
      titleColor: "#fff"
    }
  };
  const s = surfaces[variant] || surfaces.light;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      padding: "var(--space-6)",
      borderRadius: "var(--radius-lg)",
      background: s.background,
      color: s.color,
      boxShadow: s.boxShadow || "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "64px",
      height: "64px",
      borderRadius: "var(--radius-pill)",
      background: tones[iconTone] || tones.teal,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, typeof icon === "string" ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: "34px",
      height: "34px",
      objectFit: "contain"
    }
  }) : icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: 1,
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      color: s.titleColor,
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "15px",
      lineHeight: 1.6,
      textWrap: "pretty"
    }
  }, children));
}
Object.assign(__ds_scope, { ValueCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ValueCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IPNLF Badge — compact status / category label.
 * Tones map to brand + feedback colors. Solid or soft fill.
 */
function Badge({
  tone = "teal",
  soft = false,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    deep: "var(--ipnlf-deep)",
    teal: "var(--ipnlf-teal)",
    ocean: "var(--ipnlf-ocean)",
    orange: "var(--ipnlf-orange)",
    gold: "var(--ipnlf-gold)",
    slate: "var(--ipnlf-slate)"
  };
  const c = tones[tone] || tones.teal;
  const solid = {
    background: c,
    color: tone === "gold" ? "var(--ipnlf-ink)" : "#fff"
  };
  const softStyle = {
    background: "color-mix(in srgb, " + c + " 16%, white)",
    color: c
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-text)",
      fontWeight: 700,
      fontSize: "12px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)",
      ...(soft ? softStyle : solid),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IPNLF Button — primary brand action.
 * Variants: primary (deep teal), accent (orange CTA), secondary (teal),
 * outline, ghost. Sizes: sm, md, lg. Optional pill shape.
 */
function Button({
  variant = "primary",
  size = "md",
  pill = false,
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "14px"
    },
    md: {
      padding: "12px 24px",
      fontSize: "15px"
    },
    lg: {
      padding: "16px 32px",
      fontSize: "17px"
    }
  };
  const variants = {
    primary: {
      background: "var(--brand-primary)",
      color: "#fff",
      border: "1.5px solid var(--brand-primary)"
    },
    accent: {
      background: "var(--brand-accent)",
      color: "#fff",
      border: "1.5px solid var(--brand-accent)"
    },
    secondary: {
      background: "var(--brand-secondary)",
      color: "#fff",
      border: "1.5px solid var(--brand-secondary)"
    },
    outline: {
      background: "transparent",
      color: "var(--brand-primary)",
      border: "1.5px solid var(--brand-primary)"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand-primary)",
      border: "1.5px solid transparent"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-text)",
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: "0.01em",
    borderRadius: pill ? "var(--radius-pill)" : "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    transition: "transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard)",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.filter = "brightness(0.92)";
  };
  const onLeave = e => {
    e.currentTarget.style.filter = "none";
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
  };
  const onUp = e => {
    e.currentTarget.style.transform = "scale(1)";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: e => {
      onLeave(e);
      onUp(e);
    },
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IPNLF Card — content surface. Variants:
 *  - light (white, soft shadow)
 *  - soft (foam wash)
 *  - dark (deep teal, light text)
 *  - outline (hairline border, no shadow)
 * Optional hover lift for interactive cards.
 */
function Card({
  variant = "light",
  hover = false,
  padded = true,
  children,
  style = {},
  ...rest
}) {
  const variants = {
    light: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      boxShadow: "var(--shadow-sm)"
    },
    soft: {
      background: "var(--surface-soft)",
      color: "var(--text-body)"
    },
    dark: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1.5px solid var(--border-subtle)"
    }
  };
  const onEnter = e => {
    if (hover) {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    }
  };
  const onLeave = e => {
    if (hover) {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = variants[variant].boxShadow || "none";
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    style: {
      borderRadius: "var(--radius-lg)",
      padding: padded ? "var(--space-6)" : 0,
      overflow: "hidden",
      transition: "transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IPNLF Input — text field with optional label and hint.
 * Calm ocean focus ring; hairline border that strengthens on focus.
 */
function Input({
  label,
  hint,
  id,
  invalid = false,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? "var(--feedback-danger)" : focus ? "var(--brand-primary)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-text)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "13px",
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "15px",
      color: "var(--text-body)",
      padding: "11px 14px",
      borderRadius: "var(--radius-sm)",
      border: "1.5px solid " + borderColor,
      outline: focus ? "3px solid color-mix(in srgb, var(--focus-ring) 35%, transparent)" : "none",
      background: "var(--surface-card)",
      transition: "border-color var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: invalid ? "var(--feedback-danger)" : "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.ValueCard = __ds_scope.ValueCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

})();
