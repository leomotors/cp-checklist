// @ts-check

/** @satisfies {import("next").NextConfig}  */
const config = {
  reactStrictMode: true,
  transpilePackages: [
    "@cp-checklist/apollo",
    "@cp-checklist/codegen",
    "@cp-checklist/constants",
    "@cp-checklist/design",
  ],
};

export default config;
