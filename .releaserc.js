/**
 * Release configuration for the monorepo
 *
 * For more info;
 * - https://github.com/semantic-release/semantic-release
 * - https://github.com/lerna/lerna
 */

module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'master',
    { name: 'beta', channel: 'beta', prerelease: 'beta' },
    { name: 'alpha', channel: 'alpha', prerelease: 'alpha' },
  ],
  prepare: [
    {
      path: '@semantic-release/changelog',
      changelogTitle: '# CHANGELOG',
    },
    '@semantic-release/npm',
    {
      path: '@semantic-release/git',
      message:
        'chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}',
    },
  ],
};
