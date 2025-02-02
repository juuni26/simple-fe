/** @type {import('prettier').Config} */
export default {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^[@/]', // Match any imports starting with @ or /
    '^[.][.]/', // Match parent directory imports
    '^[.]/', // Match current directory imports
  ],
}
