// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   // https://img.magnific.comportrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "img.magnific.com",
//         port: "",
//         pathname: "/**",
//         search: "",
//       },
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.magnific.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;