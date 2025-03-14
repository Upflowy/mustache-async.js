module.exports = {
  'name': 'Tater',
  'bold': function () {
    return async function (text, render) {
      return '<b>' + (await render(text)) + '</b>';
    };
  }
};
