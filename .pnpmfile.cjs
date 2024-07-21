function readPackage(pkg, context) {
  // all our workspaces start with @off
  if (pkg.name.startsWith('@off')) return pkg;

  const isReactInUse =
    'eact' in pkg.dependencies ||
    'eact' in pkg.devDependencies ||
    'eact' in pkg.peerDependencies;
  const isTypesReactInUse =
    '@types/react' in pkg.devDependencies ||
    '@types/react' in pkg.peerDependencies ||
    '@types/react' in pkg.dependencies;

  if (isReactInUse || isTypesReactInUse) {
    delete pkg.devDependencies['@types/react'];
    const peerDependencies = pkg.peerDependencies || {};

    pkg.peerDependencies = peerDependencies;

    // our workspaces had 17 and 18 in use
    peerDependencies['@types/react'] = '17 || 18';
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};