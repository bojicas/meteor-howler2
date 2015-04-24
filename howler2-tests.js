Tinytest.add('Howler - exists', function (test) {
  test.isTrue(_.isObject(Howler), 'Howler does not exist');
});

Tinytest.add('Howl - exists', function (test) {
  test.isTrue(_.isFunction(Howl), 'Howl does not exist');
});
