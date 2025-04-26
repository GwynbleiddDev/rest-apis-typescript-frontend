module.exports = {
  hooks: {
    readPackage(pkg, context) {
      if (pkg.name === '@vitejs/plugin-react-swc') {
        pkg.dependencies = {
          ...pkg.dependencies,
          vite: '^6.2.0', // Forzar la misma versión de Vite
        };
        pkg.peerDependencies = {
          ...pkg.peerDependencies,
          '@types/node': '^22.14.0', // Forzar la versión correcta
        };
      }
      return pkg;
    },
  },
};