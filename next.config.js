/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Se o SWC estiver habilitado, é aconselhável permitir a minificação pelo SWC.
  optimizeFonts: false, // Esta opção depende de se você está otimizando as fontes ou não.
};

module.exports = nextConfig;
