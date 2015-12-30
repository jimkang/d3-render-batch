function multiClass(sel, classMap) {
  for (var classKey in classMap) {
    sel.class(classKey, classMap[classKey]);
  }
}

module.exports = multiClass;
