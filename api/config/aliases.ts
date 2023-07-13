import moduleAlias from 'module-alias';

moduleAlias.addAliases({
    '@config': `${__dirname}/../config`,
    '@application': `${__dirname}/../src/application`,
    '@domain': `${__dirname}/../src/domain`,
    '@infrastructure': `${__dirname}/../src/infrastructure`,
    '@presentation': `${__dirname}/../src/presentation`,
});
