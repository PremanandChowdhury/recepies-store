const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: ' 425px',
  tablet: ' 768px',
}

export const device = {
  mobileXs: `(max-width: ${size.mobileS})`,
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
}
