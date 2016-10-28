function multiClass(sel, classMap) {
  for (var classKey in classMap) {
    sel.classed(classKey, classMap[classKey]);
  }
}

module.exports = multiClass;
