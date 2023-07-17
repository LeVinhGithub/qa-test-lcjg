function fn() {
  var env = karate.env; // get system property 'karate.env'

  karate.log('karate.env system property was:', env);
  var config = {
    env: env,
    domainUrl: 'https://lcjg-betalabs.github.io/test-site-qa',
  };

  return config;
}
