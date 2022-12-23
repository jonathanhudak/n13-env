/** @type {import('next').NextConfig} */

const { env } = process;

const publicEnvVars = Object.keys(env).filter(k => k.startsWith('NEXT_PUBLIC_')).reduce((acc, k) => ({
  ...acc,
  [k]: env[k],
}), {});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: publicEnvVars,
};

module.exports = nextConfig
